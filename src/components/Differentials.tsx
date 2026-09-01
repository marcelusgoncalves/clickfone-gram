import { CheckIcon, ShieldIcon, TruckIcon, ZapIcon } from "./icons";
import { Card, Eyebrow } from "./ui";

const items = [
  {
    icon: ZapIcon,
    accent: "cyan" as const,
    title: "Implementação Rápida",
    description:
      "Ative sua telefonia em nuvem em minutos, sem necessidade de infraestrutura física.",
  },
  {
    icon: ShieldIcon,
    accent: "cyan" as const,
    title: "Segurança Corporativa",
    description:
      "Criptografia de dados, LGPD compliance, SLA 99,5% e suporte 24/7 especializado.",
  },
  {
    icon: CheckIcon,
    accent: "cyan" as const,
    title: "AWS Infrastructure",
    description:
      "Hospedagem redundante em datacenters da Amazon com backup nacional e internacional.",
  },
  {
    icon: TruckIcon,
    accent: "cyan" as const,
    title: "Suporte Dedicado",
    description:
      "Equipe especializada acompanhando sua operação, desde implantação até otimizações contínuas.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-20 bg-slate-900/30 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Eyebrow accent="cyan">Diferenciais ClickFone</Eyebrow>
        <h2 className="font-heading max-w-3xl text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Por que escolher ClickFone.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>

        <p className="mt-14 text-center text-2xl font-bold text-white">
          Confiabilidade e{" "}
          <span className="text-cyan-400">Inovação.</span>
        </p>
      </div>
    </section>
  );
}
