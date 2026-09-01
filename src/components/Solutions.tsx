import { RadarIcon, RefreshIcon, ServerIcon, SmartphoneIcon } from "./icons";
import { Card, Eyebrow } from "./ui";

const solutions = [
  {
    icon: ServerIcon,
    accent: "cyan" as const,
    title: "PABX Virtual Escalável",
    description:
      "Infraestrutura de telefonia em nuvem que cresce com seu negócio, sem limites de ramais.",
  },
  {
    icon: SmartphoneIcon,
    accent: "cyan" as const,
    title: "Mobilidade Total",
    description:
      "Trabalhe de qualquer lugar com softphone, aplicativo mobile e SIP trunks sem restrições.",
  },
  {
    icon: RefreshIcon,
    accent: "cyan" as const,
    title: "Números Nacionais",
    description:
      "Números únicos (4004, 4003, 3003) com tarifação local em qualquer estado do Brasil.",
  },
  {
    icon: RadarIcon,
    accent: "cyan" as const,
    title: "Inteligência Operacional",
    description:
      "Dashboards em tempo real, relatórios avançados e análise de performance de chamadas.",
  },
];

export default function Solutions() {
  return (
    <section id="solucao" className="scroll-mt-20 bg-slate-900/30 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Eyebrow accent="cyan">Soluções ClickFone</Eyebrow>
        <h2 className="font-heading max-w-3xl text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Telefonia profissional para empresas modernas.
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-slate-400">
          ClickFone oferece uma plataforma completa de comunicação que unifica
          PABX, números nacionais, URA inteligente e integração com WhatsApp
          corporativo — tudo sem infraestrutura física ou complexidade operacional.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {solutions.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
