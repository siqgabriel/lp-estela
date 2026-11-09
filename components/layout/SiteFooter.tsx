import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/** Rodapé em ink: usa logo-estela.png, que já é branco (feito para fundo escuro), sem filtro. */
export function SiteFooter() {
  const legal = siteConfig.legal;
  const legalPending = !legal.company || !legal.cnpj || !legal.termsUrl || !legal.privacyUrl;
  return (
    <footer className="border-t border-bastidor-line bg-bastidor-bg-deep pt-12 pb-24 text-bastidor-text-soft lg:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:px-8">
        <Image src="/img/brand/logo-estela.png" alt="Estela Albani" width={543} height={209} className="h-12 w-auto" />
        <p className="font-ui text-xs">
          © {new Date().getFullYear()} Gestão de Carreira. Todos os direitos reservados.
        </p>
        {legalPending && (
          <p className="font-ui text-xs text-bastidor-text" data-pending="legal">
            [Pendente: razão social, CNPJ, termos e privacidade — lib/site-config.ts]
          </p>
        )}
      </div>
    </footer>
  );
}
