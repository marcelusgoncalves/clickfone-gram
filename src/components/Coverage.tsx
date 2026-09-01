import { BriefcaseIcon, BuildingIcon, FileTextIcon, HomeIcon } from "./icons";
import { Eyebrow, IconCircle } from "./ui";

const areas = [
  { icon: HomeIcon, accent: "cyan" as const, label: "Pequenas e médias empresas" },
  { icon: BriefcaseIcon, accent: "cyan" as const, label: "Empresas de grande porte" },
  { icon: FileTextIcon, accent: "cyan" as const, label: "Órgãos públicos" },
  { icon: BuildingIcon, accent: "cyan" as const, label: "Setores diversos" },
];

export default function Coverage() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Eyebrow accent="cyan">Abrangência ClickFone</Eyebrow>
        <h2 className="font-heading max-w-3xl text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Cobertura nacional com números únicos em todo o Brasil.
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-slate-400">
          ClickFone atende empresas de qualquer tamanho em todo o território nacional
          com números únicos (4004, 4003, 3003), tarifação local e suporte 24/7
          especializado. Operacionalizado por Memória RAM Solutions, empresa com mais
          de 28 anos de experiência em tecnologia corporativa.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.label}
              className="flex flex-col items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center"
            >
              <IconCircle icon={area.icon} accent={area.accent} />
              <p className="font-medium text-slate-200">{area.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
