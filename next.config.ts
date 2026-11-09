import type { NextConfig } from "next";
import { pendingItems } from "./lib/site-config";

// Aviso de pendências externas no build de produção (ver lib/site-config.ts).
if (process.env.NODE_ENV === "production") {
  const pending = pendingItems();
  if (pending.length) {
    console.warn(
      `\n⚠ Gestão de Carreira: ${pending.length} item(ns) pendente(s) em lib/site-config.ts:\n` +
        pending.map((item) => `  - ${item}`).join("\n") +
        "\n",
    );
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Permite build e testes em pasta separada sem disputar a .next do `next dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
