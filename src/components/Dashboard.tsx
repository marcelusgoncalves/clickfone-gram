import Image from "next/image";
import { Eyebrow } from "./ui";

function BrowserFrame({
  src,
  alt,
  path,
}: {
  src: string;
  alt: string;
  path: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/80 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-4 text-xs text-slate-500">{path}</span>
      </div>
      <div className="relative aspect-video w-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Eyebrow accent="cyan">Painel ClickFone</Eyebrow>
        <h2 className="font-heading max-w-3xl text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Controle total das suas chamadas, em tempo real.
        </h2>
        <p className="mt-6 max-w-3xl text-justify text-lg leading-relaxed text-slate-300">
          Dashboard inteligente com métricas de chamadas, atendidas vs perdidas, filas de espera, relatórios avançados e distribuição de chamadas por agente — tudo acessível de qualquer dispositivo, a qualquer hora.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <BrowserFrame
            src="/images/dashboard-01.jpeg"
            alt="Dashboard ClickFone com visão geral de chamadas ativas, atendidas, perdidas e métricas em tempo real"
            path="painel.clickfone.com.br/dashboard"
          />
          <BrowserFrame
            src="/images/dashboard-02.jpeg"
            alt="Relatórios de performance com gráficos de volume de chamadas por hora e distribuição por fila"
            path="painel.clickfone.com.br/relatorios"
          />
        </div>
      </div>
    </section>
  );
}
