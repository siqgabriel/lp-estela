import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import { themeInitScript } from "@/components/layout/ThemeToggle";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Preloader } from "@/components/layout/Preloader";
import { CursorTrail } from "@/components/layout/CursorTrail";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { CtaDock } from "@/components/layout/CtaDock";
import { siteConfig } from "@/lib/site-config";

// Bebas Neue (família 2014): Regular = linha de entrada, Bold = impacto.
// Licença SIL OFL 1.1 verificada; procedência em app/fonts/bebas-neue/SOURCE.md.
const bebasNeue = localFont({
  src: [
    { path: "./fonts/bebas-neue/BebasNeue-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/bebas-neue/BebasNeue-Bold.woff2", weight: "700", style: "normal" },
  ],
  // Variável própria: next/font/local gera nome de família com hash, então o token
  // --font-display do Tailwind aponta para esta variável (globals.css).
  variable: "--font-bebas",
  display: "swap",
  fallback: ["Impact", "Arial Narrow", "sans-serif"],
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.shortName,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{".preloader{display:none!important}"}</style>
        </noscript>
      </head>
      <body className={`${bebasNeue.variable} ${barlow.variable} ${inter.variable} antialiased`}>
        <a
          href="#conteudo"
          className="btn-on-field sr-only px-4 py-3 font-ui text-sm font-semibold focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-110"
        >
          Pular para o conteúdo
        </a>
        <Preloader />
        <CursorTrail />
        <SiteHeader />
        <SmoothScrollProvider>
          <main id="conteudo" tabIndex={-1} className="outline-none">
            {children}
          </main>
        </SmoothScrollProvider>
        <CtaDock />
      </body>
    </html>
  );
}
