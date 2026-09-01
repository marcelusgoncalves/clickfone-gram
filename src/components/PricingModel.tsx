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
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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

        <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl shadow-black/40">
          <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-cyan-500/5" />
          <div className="relative aspect-video w-full">
            <Image
              src="/images/dashboard-01.jpeg"
              alt="Dashboard ClickFone com métricas de chamadas, atendidas e filas em tempo real"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
