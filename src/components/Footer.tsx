import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-slate-500">
              Solução de telefonia em nuvem operacionalizada por Memória RAM Solutions,
              empresa com 28 anos de experiência em tecnologia corporativa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Produtos</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#solucao" className="transition hover:text-cyan-400">
                  PABX Virtual
                </a>
              </li>
              <li>
                <a href="#solucao" className="transition hover:text-cyan-400">
                  Números Nacionais
                </a>
              </li>
              <li>
                <a href="#solucao" className="transition hover:text-cyan-400">
                  Relatórios em Tempo Real
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Recursos</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a href="#solucao" className="transition hover:text-cyan-400">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="transition hover:text-cyan-400">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="transition hover:text-cyan-400">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:comercial@clickfone.com.br"
                  className="transition hover:text-cyan-400"
                >
                  comercial@clickfone.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5508007285800" className="transition hover:text-cyan-400">
                  0800 728 5800
                </a>
              </li>
              <li>Brasília, DF - Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} ClickFone. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
