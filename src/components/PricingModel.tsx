import Image from "next/image";
import { ArrowRightIcon } from "./icons";
import { CheckItem, Eyebrow } from "./ui";

const items = [
  "Números únicos nacionais (4004, 4003, 3003)",
  "PABX Virtual em nuvem sem limites físicos",
  "Tarifação local para chamadas de qualquer estado",
  "URA, chatbot e integração com WhatsApp corporativo",
  "Dashboards com relatórios em tempo real",
  "SLA 99,5% com suporte 24/7 especializado",
];

export default function PricingModel() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.95fr_1.25fr] lg:items-center">
        <div>
          <Eyebrow accent="cyan">Planos e funcionalidades</Eyebrow>
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Telefonia profissional sem complicações.
          </h2>

          <ul className="mt-10 flex flex-col gap-4">
            {items.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>

          <a
            href="#contato"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            Ver planos e preços
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="relative -mr-6 lg:mr-0">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-cyan-500/20" style={{
            transform: 'perspective(1200px) rotateY(-2deg) rotateX(1deg)',
          }}>
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent" />
            <div className="relative aspect-video w-full">
              <Image
                src="/images/planos-dashboard-clickfone.png"
                alt="Painel ClickFone com métricas em tempo real"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
