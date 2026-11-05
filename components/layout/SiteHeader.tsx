import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-bastidor-text backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/brand/logo-gc.png"
            alt="Gestão de Carreira"
            width={140}
            height={56}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#oferta"
            className="hidden rounded-full bg-white px-5 py-2 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase tracking-wider text-ink transition-opacity hover:opacity-90 sm:inline-block"
          >
            Quero entrar
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
