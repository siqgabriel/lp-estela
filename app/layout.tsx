import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Inter } from "next/font/google";
import "./globals.css";
import { themeInitScript } from "@/components/layout/ThemeToggle";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Preloader } from "@/components/layout/Preloader";
import { CursorTrail } from "@/components/layout/CursorTrail";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
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
  title: "Gestão de Carreira | Estela Albani",
  description:
    "Transforme seu preparo artístico em visibilidade no mercado. O caminho para o seu trabalho chegar até quem importa, sem depender de sorte.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${bebasNeue.variable} ${barlow.variable} ${inter.variable} antialiased`}>
        <Preloader />
        <CursorTrail />
        <SiteHeader />
        <SmoothScrollProvider>
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
