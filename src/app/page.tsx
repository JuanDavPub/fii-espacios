import Link from "next/link";
import { BLOQUES, ESPACIOS } from "@/data/bloques";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-[#003865]">
          Encuentra cualquier espacio de la facultad
        </h1>
        <p className="max-w-3xl text-neutral-700">
          Esta guía reúne la información de los bloques A, B, C, D, E, F y G de la
          Facultad de Ingeniería Industrial: aulas, laboratorios, talleres, oficinas,
          auditorios y servicios. Explora por bloque o busca directamente el espacio
          que necesitas.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/bloques"
            className="rounded-md bg-[#003865] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#00518f] transition-colors"
          >
            Explorar bloques
          </Link>
          <Link
            href="/espacios"
            className="rounded-md border border-[#003865] px-5 py-2.5 text-sm font-medium text-[#003865] hover:bg-blue-50 transition-colors"
          >
            Buscar un espacio
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-neutral-900">Bloques de la facultad</h2>
          <span className="text-sm text-neutral-500">
            {ESPACIOS.length} espacios registrados
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BLOQUES.map((bloque) => {
            const total = ESPACIOS.filter((e) => e.bloqueId === bloque.id).length;
            return (
              <Link
                key={bloque.id}
                href={`/bloques/${bloque.id}`}
                className="group flex flex-col gap-2 rounded-lg border border-neutral-200 p-5 hover:border-[#003865] hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-[#003865] group-hover:underline">
                  {bloque.nombre}
                </h3>
                <p className="text-sm text-neutral-600">{bloque.resumen}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-500">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1">
                    {bloque.plantas.length === 1
                      ? "1 nivel"
                      : `${bloque.plantas.length} niveles`}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1">
                    {total} espacios
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="rounded-lg bg-neutral-50 border border-neutral-200 p-6">
        <h2 className="text-lg font-semibold text-neutral-900 mb-2">
          ¿Cómo está organizada la facultad?
        </h2>
        <ul className="grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
          <li>
            <strong>Bloques A, B y C</strong> — conjunto principal en forma de &quot;U&quot;,
            con planta baja, primera planta y segunda planta.
          </li>
          <li>
            <strong>Bloque G de Aulas</strong> — edificio alargado de aulas en fila,
            con planta baja y planta alta.
          </li>
          <li>
            <strong>Bloque D y E</strong> — unidad en forma de L con laboratorios,
            talleres y oficinas.
          </li>
          <li>
            <strong>Bloque F</strong> — nave de talleres con bodega y baños, de un
            solo nivel.
          </li>
        </ul>
      </section>
    </div>
  );
}
