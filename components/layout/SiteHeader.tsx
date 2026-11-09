import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { HeaderCta } from "./HeaderCta";

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
            className="h-auto w-[132px]"
            priority
          />
        </a>

        <div className="flex items-center gap-4">
          <HeaderCta />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
