import { defineConfig, devices } from "@playwright/test";

const PORT = 3100;

/**
 * Testes contra o build de produção, numa pasta separada (.next-test) para não
 * disputar a .next do `next dev`. Na etapa 5 entram 768 e 1920 px.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop-1440", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    {
      name: "mobile-390",
      use: { ...devices["Desktop Chrome"], viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
    },
  ],
  webServer: {
    command: `npx next build && npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    env: { NEXT_DIST_DIR: ".next-test" },
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
  },
});
