import Image from "next/image";
import { ClockIcon, CompassIcon, EyeIcon, ShieldIcon } from "./icons";
import { Card, Eyebrow } from "./ui";

const pillars = [
  {
    icon: ClockIcon,
    accent: "cyan" as const,
    title: "PABX em Nuvem",
    description:
      "Infraestrutura de telefonia escalável e confiável, hospedada em datacenters AWS com redundância nacional e internacional.",
  },
  {
    icon: EyeIcon,
    accent: "cyan" as const,
    title: "Visibilidade Total",
    description:
      "Dashboards inteligentes com métricas em tempo real, relatórios avançados e inteligência operacional para decisões informadas.",
  },
  {
    icon: ShieldIcon,
    accent: "cyan" as const,
    title: "Segurança Empresarial",
    description:
      "Criptografia de dados, conformidade LGPD, SLA 99,5% e protocolos de segurança de nível corporativo.",
  },
  {
    icon: CompassIcon,
    accent: "cyan" as const,
    title: "Mobilidade Total",
    description:
      "Acesse de qualquer lugar via softphone, mobile app ou SIP trunk. Trabalhe remotamente sem perder funcionalidades.",
  },
];

export default function About() {
  return (
    <section id="quem-somos" className="scroll-mt-20 bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <Eyebrow accent="cyan">Sobre ClickFone</Eyebrow>
            <h2 className="font-heading max-w-2xl text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Telefonia em nuvem que simplifica a comunicação empresarial.
            </h2>
            <div className="mt-6 max-w-2xl space-y-6 text-justify text-lg leading-relaxed text-slate-300">
              <p>
                ClickFone é uma solução de PABX Virtual em nuvem criada pela Memória RAM Solutions, empresa com mais de 28 anos de experiência em tecnologia empresarial. Nosso objetivo é oferecer comunicação profissional sem complexidade operacional, permitindo que empresas de qualquer tamanho tenham acesso a recursos de telefonia de nível corporativo.
              </p>
              <p>
                Com infraestrutura hospedada em AWS e suporte especializado 24/7, ClickFone oferece números únicos nacionais, relatórios em tempo real, integração com URA e WhatsApp corporativo — tudo sem necessidade de investimento em infraestrutura física ou aparelhos especializados.
              </p>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <Image
              src="/images/dashboard-clickfone.png"
              alt="Dashboard ClickFone"
              width={600}
              height={400}
              priority
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <Card key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
