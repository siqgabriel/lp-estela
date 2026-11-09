import { expect, test, type Page } from "@playwright/test";

/** Etapa 3: correções de base. Cada teste cobre um item aprovado. */

async function waitPreloaderGone(page: Page) {
  await expect(page.locator(".preloader")).toHaveCount(0, { timeout: 6000 });
}

/** Lista textos com contraste abaixo de AA (4,5:1; 3:1 para texto grande). */
async function contrastFailures(page: Page) {
  return page.evaluate(() => {
    // Normaliza qualquer cor CSS (inclusive oklab/color-mix do Tailwind 4) para RGBA via canvas.
    const ctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true })!;
    const parse = (color: string) => {
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      return [d[0], d[1], d[2], d[3] / 255];
    };
    const lum = (c: number[]) => {
      const a = c.slice(0, 3).map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    };
    // Fundo real atrás do texto: pilha de elementos no ponto central do texto
    // (enxerga blocos irmãos posicionados, como o bloco do eixo). Ignora camadas fixas.
    const isFixedLayer = (n: Element) => {
      for (let e: Element | null = n; e; e = e.parentElement) {
        const pos = getComputedStyle(e).position;
        if (pos === "fixed" || pos === "sticky") return true;
      }
      return false;
    };
    const bgOf = (el: Element): number[] => {
      const fixedText = isFixedLayer(el);
      el.scrollIntoView({ block: "center" });
      // Amostra sob o primeiro trecho de texto (não no início da caixa, que pode estar do outro lado do eixo).
      const textNode = Array.from(el.childNodes).find((n) => n.nodeType === 3 && n.textContent!.trim())!;
      const range = document.createRange();
      range.selectNodeContents(textNode);
      const r = range.getClientRects()[0] ?? el.getBoundingClientRect();
      const stack = document.elementsFromPoint(r.left + Math.min(r.width / 2, 12), r.top + r.height / 2);
      for (const n of stack) {
        if (n.tagName === "CANVAS" || (!fixedText && isFixedLayer(n))) continue;
        const p = parse(getComputedStyle(n).backgroundColor);
        if (p[3] > 0.5) return p;
      }
      return [255, 255, 255];
    };
    const out: string[] = [];
    const nodes = document.querySelectorAll("main *, header *, footer *");
    for (const el of Array.from(nodes)) {
      const direct = Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent!.trim());
      if (!direct) continue;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2 || cs.visibility === "hidden" || el.closest(".sr-only")) continue;
      // Elementos escondidos por opacidade (ex.: CTA persistente fora de hora) não são lidos.
      let hidden = false;
      for (let e: Element | null = el; e; e = e.parentElement) if (Number(getComputedStyle(e).opacity) < 0.1) hidden = true;
      if (hidden) continue;
      // Texto com background-clip (foto ou gradiente na letra) é verificado em teste próprio.
      if (cs.webkitTextFillColor === "rgba(0, 0, 0, 0)") continue;
      const fg = parse(cs.color);
      const bg = bgOf(el);
      const alpha = fg[3];
      const mixed = fg.slice(0, 3).map((v, i) => v * alpha + bg[i] * (1 - alpha));
      const l1 = lum(mixed);
      const l2 = lum(bg);
      const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
      const size = parseFloat(cs.fontSize);
      const large = size >= 24 || (size >= 18.66 && Number(cs.fontWeight) >= 700);
      if (ratio < (large ? 3 : 4.5)) out.push(`${ratio.toFixed(2)} — ${el.textContent!.trim().slice(0, 60)}`);
    }
    return out;
  });
}

test.describe("tema e contraste", () => {
  test.use({ reducedMotion: "reduce" });

  for (const theme of ["light", "dark"] as const) {
    test(`contraste AA no tema ${theme}`, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem("gc-theme", t), theme);
      await page.goto("/");
      await waitPreloaderGone(page);
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      expect(await contrastFailures(page)).toEqual([]);
    });
  }
});

test("sem JavaScript o conteúdo aparece e o preloader some", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator(".preloader")).toBeHidden();
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("details")).toHaveCount(9);
  await context.close();
});

test.describe("movimento reduzido", () => {
  test.use({ reducedMotion: "reduce" });

  test("preloader não anima o traço e sai rápido; sem cursor trail nem Lenis", async ({ page }) => {
    // Amostra o traço da estrela a cada 30 ms enquanto o preloader existe.
    await page.addInitScript(() => {
      const w = window as unknown as { __dash: string[] };
      w.__dash = [];
      const id = setInterval(() => {
        const path = document.querySelector(".preloader path");
        if (path?.isConnected) w.__dash.push(getComputedStyle(path).strokeDasharray);
        else if (document.readyState === "complete" && w.__dash.length) clearInterval(id);
      }, 30);
    });
    await page.goto("/");
    await waitPreloaderGone(page);
    const samples = await page.evaluate(() => (window as unknown as { __dash: string[] }).__dash);
    expect(samples.length).toBeGreaterThan(0);
    // Antes da hidratação o SVG ainda não tem dasharray ("none"); depois, o modo reduzido o mantém "none".
    expect(samples.filter((s) => s !== "none")).toEqual([]);
    await page.mouse.move(200, 200);
    await expect(page.locator("canvas")).toHaveCount(0);
    await expect(page.locator("html")).not.toHaveClass(/lenis/);
  });
});

test("preloader espera as fontes e completa o traço antes de sair", async ({ page }) => {
  await page.addInitScript(() => {
    (window as unknown as { __t0: number }).__t0 = performance.now();
    window.addEventListener("gc:preloader-done", () => {
      const w = window as unknown as { __done: number; __fonts: string };
      w.__done = performance.now();
      w.__fonts = document.fonts.status;
    });
  });
  await page.goto("/");
  await waitPreloaderGone(page);
  const r = await page.evaluate(() => {
    const w = window as unknown as { __t0: number; __done: number; __fonts: string };
    return { elapsed: w.__done - w.__t0, fonts: w.__fonts };
  });
  expect(r.fonts).toBe("loaded");
  expect(r.elapsed).toBeGreaterThan(1300); // traço de 1,3 s + fade
  expect(r.elapsed).toBeLessThan(4000); // teto de 3 s + fade
});

test("FAQ com details: todas as respostas no HTML", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".faq details")).toHaveCount(9);
  await expect(page.locator(".faq details p")).toHaveCount(9);
  const hidden = page.locator(".faq details").nth(5);
  await expect(hidden).not.toHaveAttribute("open", "");
  await expect(hidden.locator("p")).toHaveText(/ninguém sério promete isso/);
});

test("âncora do CTA para em #oferta sem ficar sob o header", async ({ page }) => {
  await page.goto("/");
  await waitPreloaderGone(page);
  await page.locator('#hero a[href="#oferta"]').click();
  // O topo da seção deve parar logo abaixo do header fixo (72 px), com folga de arredondamento.
  await expect
    .poll(async () => page.locator("#oferta").evaluate((el) => Math.round(el.getBoundingClientRect().top)), {
      timeout: 6000,
    })
    .toBeGreaterThanOrEqual(64);
  await expect
    .poll(async () => page.locator("#oferta").evaluate((el) => Math.round(el.getBoundingClientRect().top)), {
      timeout: 6000,
    })
    .toBeLessThanOrEqual(84);
});

test("SEO: canonical, Open Graph, JSON-LD e skip link", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://lp-estela.vercel.app");
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
  const ld = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) || "{}");
  expect(ld["@type"]).toBe("Course");
  expect(ld.offers.price).toBe("442");
  await waitPreloaderGone(page);
  await page.keyboard.press("Tab");
  await expect(page.locator('a[href="#conteudo"]')).toBeFocused();
});

test("ícone otimizado", async ({ request }) => {
  const res = await request.get("/icon.png");
  expect(res.ok()).toBeTruthy();
  expect((await res.body()).length).toBeLessThan(30_000);
});

test("logo sem filtro e toggle com 44 px", async ({ page }) => {
  await page.goto("/");
  await waitPreloaderGone(page);
  const filter = await page.locator("header img").evaluate((el) => getComputedStyle(el).filter);
  expect(filter).toBe("none");
  const box = await page.locator("header button").boundingBox();
  expect(box!.width).toBeGreaterThanOrEqual(44);
  expect(box!.height).toBeGreaterThanOrEqual(44);
});

test("cursor trail: só com ponteiro fino", async ({ page }, info) => {
  await page.goto("/");
  await waitPreloaderGone(page);
  await page.mouse.move(300, 300);
  await page.mouse.move(420, 380, { steps: 8 });
  if (info.project.name === "mobile-390") {
    await expect(page.locator("canvas")).toHaveCount(0);
  } else {
    const canvas = page.locator("canvas");
    await expect(canvas).toHaveCount(1);
    expect(await canvas.evaluate((el) => getComputedStyle(el).pointerEvents)).toBe("none");
    // Acima do header (z-50) e abaixo do preloader (z-100).
    expect(Number(await canvas.evaluate((el) => getComputedStyle(el).zIndex))).toBe(60);
  }
});

test("pendências visíveis, nunca valores falsos", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('a[href*="wa.me/55X"]')).toHaveCount(0);
  await expect(page.locator('[data-pending="checkout"]')).toBeVisible();
  await expect(page.locator('[data-pending="whatsapp"]')).toHaveCount(1);
});
