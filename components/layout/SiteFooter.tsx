import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-bastidor-line bg-bastidor-bg-deep py-12 text-bastidor-text-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:px-8">
        <Image
          src="/brand/logo-gc.png"
          alt="Gestão de Carreira"
          width={120}
          height={48}
          className="h-8 w-auto opacity-80 brightness-0 invert"
        />
        <p className="font-ui text-xs uppercase tracking-widest">Estela Albani</p>
        <p className="font-ui text-xs">
          © {new Date().getFullYear()} Gestão de Carreira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
