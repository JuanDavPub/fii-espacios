import Link from "next/link";
import { BLOQUES, ESPACIOS } from "@/data/bloques";

export const metadata = {
  title: "Bloques | Espacios FII",
};

export default function BloquesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-[#003865]">Bloques de la facultad</h1>
        <p className="mt-1 text-neutral-600">
          La Facultad de Ingeniería Industrial está conformada por siete bloques.
          Selecciona uno para ver su distribución por planta y los espacios que contiene.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {BLOQUES.map((bloque) => {
          const espacios = ESPACIOS.filter((e) => e.bloqueId === bloque.id);
          return (
            <Link
              key={bloque.id}
              href={`/bloques/${bloque.id}`}
              className="group flex flex-col gap-3 rounded-lg border border-neutral-200 p-5 hover:border-[#003865] hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-[#003865] group-hover:underline">
                  {bloque.nombre}
                </h2>
                <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600">
                  {espacios.length} espacios
                </span>
              </div>
              <p className="text-sm text-neutral-600">{bloque.descripcion}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {bloque.plantas.map((planta) => (
                  <span
                    key={planta.nombre}
                    className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-500"
                  >
                    {planta.nombre}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
