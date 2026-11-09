import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Header sobre papel branco nos dois temas: o único logo disponível é em ink
 * e nenhum filtro CSS pode ser aplicado a ele (ver CLAUDE.md § Logos).
 * Altura fixa em --header-h (72px), usada como offset das âncoras.
 */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-18 border-b border-paper-rule bg-paper text-paper-ink">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="flex items-center" aria-label="Gestão de Carreira, voltar ao início">
          <Image
            src="/img/brand/logo-gc.png"
            alt="Gestão de Carreira"
            width={866}
            height={400}
            className="h-11 w-auto"
            priority
          />
        </a>

        <div className="flex items-center gap-4">
          <a
            href="#oferta"
            className="hidden rounded-full bg-paper-ink px-5 py-3 font-ui text-xs font-semibold tracking-wider text-paper uppercase transition-opacity hover:opacity-90 sm:inline-block"
          >
            Quero entrar
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
