import { expect, test, type Page } from "@playwright/test";

/** Etapa 4: seções-piloto 1, 7 e 4 e cadência de CTA. */

async function ready(page: Page) {
  await page.goto("/");
  await expect(page.locator(".preloader")).toHaveCount(0, { timeout: 8000 });
}

async function scrollToSelector(page: Page, selector: string) {
  await page.locator(selector).evaluate((el) => window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 72));
  await page.waitForTimeout(700);
}

test("copy literal do PDF nos títulos (nome acessível completo)", async ({ page }) => {
  await ready(page);
  await expect(page.getByRole("heading", { level: 1 })).toHaveAccessibleName(
    "TRANSFORME SEU PREPARO ARTÍSTICO EM VISIBILIDADE NO MERCADO.",
  );
  await expect(page.locator("#clareza h2")).toHaveAccessibleName("O MERCADO PRECISA CONSEGUIR LER VOCÊ COM CLAREZA.");
  await expect(page.locator("#duas-formas h2")).toHaveText("DUAS FORMAS DE TRATAR A CARREIRA.");
  await expect(page.locator("#duas-formas tbody tr")).toHaveCount(5);
  await expect(page.locator("#duas-formas")).toContainText("A carreira estagna e ninguém sabe muito bem por que");
  await expect(page.locator("#hero a[data-cta-inline]")).toHaveText("QUERO GANHAR VISIBILIDADE");
  // rótulo inventado removido do hero
  await expect(page.locator("#hero")).not.toContainText("GESTÃO DE CARREIRA · ESTELA ALBANI");
});

test("palavra partida: sr-only + aria-hidden, nunca role=text", async ({ page }) => {
  await ready(page);
  await expect(page.locator('[role="text"]')).toHaveCount(0);
  await expect(page.locator("#hero .sr-only")).toHaveText("VISIBILIDADE");
  const visual = page.locator('#hero h1 [aria-hidden="true"]');
  expect(await visual.count()).toBeGreaterThanOrEqual(2);
});

test("foto em letra: ft8 otimizada pelo Next, P&B pelo manifesto", async ({ page }) => {
  await ready(page);
  const word = page.locator("#clareza .photo-word");
  await expect(word).toHaveAttribute("data-photo", "conceptual-ft8");
  await expect(word).toHaveClass(/grayscale/);
  const bg = await word.evaluate((el) => getComputedStyle(el).backgroundImage);
  expect(bg).toContain("/_next/image");
  expect(bg).toContain("ft8.png");
  // a seção fica em papel branco também no tema escuro
  await page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
  const bgColor = await page.locator("#clareza").evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(bgColor).toBe("rgb(255, 255, 255)");
});

test("pins: seções 7 e 8, só no desktop", async ({ page }, info) => {
  await ready(page);
  await scrollToSelector(page, "#duas-formas");
  const spacers = await page.locator(".pin-spacer").count();
  if (info.project.name === "desktop-1440") {
    expect(spacers).toBe(2);
    await expect(page.locator(".pin-spacer #duas-formas")).toHaveCount(1);
    await expect(page.locator(".pin-spacer .method-pin")).toHaveCount(1);
  } else {
    expect(spacers).toBe(0);
  }
});

test.describe("movimento reduzido", () => {
  test.use({ reducedMotion: "reduce" });
  test("estado final sem animação: eixo no lugar e nenhum pin", async ({ page }, info) => {
    await ready(page);
    await expect
      .poll(() => page.locator("#hero").evaluate((el) => getComputedStyle(el).getPropertyValue("--cut").trim()))
      .toBe("64%");
    await scrollToSelector(page, "#duas-formas");
    await expect(page.locator(".pin-spacer")).toHaveCount(0);
    expect(info.project.name).toBeTruthy();
  });
});

test("cadência de CTA: persistente só fora do hero e longe de outro CTA", async ({ page }, info) => {
  await ready(page);
  const mobile = info.project.name === "mobile-390";
  const persistent = page.locator(`[data-cta-persistent="${mobile ? "mobile" : "header"}"]`);
  const wa = page.locator('[data-pending="whatsapp-flutuante"], a[aria-label="Conversar no WhatsApp"]');

  // No hero: CTA persistente e WhatsApp escondidos.
  await expect(persistent).toHaveCSS("opacity", "0");
  await expect(wa).toHaveCSS("opacity", "0");

  // Depois do hero, numa seção sem CTA (seção 4): aparecem.
  // Rola direto (sem roda do mouse: a animação do Lenis em curso desfaria o scroll seguinte).
  await page.locator("#clareza").evaluate((el) => window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + 200));
  await page.waitForTimeout(700);
  await expect(persistent).toHaveCSS("opacity", "1");
  await expect(wa).toHaveCSS("opacity", "1");
  await expect(persistent).toHaveText("QUERO ENTRAR NO GESTÃO DE CARREIRA");

  if (mobile) {
    const bar = (await persistent.boundingBox())!;
    const button = (await wa.boundingBox())!;
    expect(bar.x + bar.width).toBeLessThanOrEqual(button.x - 8); // nunca cobre o WhatsApp
  }

  // Na oferta: o persistente some (o CTA da oferta está na tela).
  await scrollToSelector(page, "#oferta");
  await expect(persistent).toHaveCSS("opacity", "0");
});
