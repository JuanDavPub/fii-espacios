import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ESPACIOS, getBloque, getEspacio, getEspaciosDeBloque } from "@/data/bloques";
import { TIPOS_INFO } from "@/data/tipos";
import EspacioCard from "@/components/EspacioCard";

export function generateStaticParams() {
  return ESPACIOS.map((espacio) => ({ id: espacio.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const espacio = getEspacio(id);
  return { title: espacio ? `${espacio.nombre} | Espacios FII` : "Espacio no encontrado" };
}

export default async function EspacioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const espacio = getEspacio(id);
  if (!espacio) notFound();

  const bloque = getBloque(espacio.bloqueId);
  const planta = bloque?.plantas.find((p) => p.nombre === espacio.planta);
  const tipoInfo = TIPOS_INFO[espacio.tipo];
  const otrosEnBloque = getEspaciosDeBloque(espacio.bloqueId).filter(
    (e) => e.id !== espacio.id && e.planta === espacio.planta
  );

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link href="/espacios" className="text-sm text-[#003865] hover:underline">
          ← Volver al buscador
        </Link>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-sm text-neutral-500">{espacio.codigo}</p>
            <h1 className="text-2xl font-bold text-[#003865]">{espacio.nombre}</h1>
          </div>
          <span className={`rounded-full px-3 py-1.5 text-sm font-medium ${tipoInfo.color}`}>
            {tipoInfo.etiqueta}
          </span>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="sm:col-span-2 flex flex-col gap-4">
          <p className="text-neutral-700">{espacio.descripcion}</p>

          {bloque && (
            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={planta?.imagen ?? bloque.imagen}
                  alt={`Plano de ${bloque.nombre} — ${espacio.planta}`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="border-t border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-500">
                Ubicación de referencia dentro del {bloque.nombre} — {espacio.planta}.
              </p>
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-3 rounded-lg border border-neutral-200 p-4 h-fit">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Ubicación
          </h2>
          <dl className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between gap-2">
              <dt className="text-neutral-500">Bloque</dt>
              <dd className="font-medium text-neutral-900">
                {bloque ? (
                  <Link href={`/bloques/${bloque.id}`} className="text-[#003865] hover:underline">
                    {bloque.nombre}
                  </Link>
                ) : (
                  "—"
                )}
              </dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-neutral-500">Planta</dt>
              <dd className="font-medium text-neutral-900">{espacio.planta}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-neutral-500">Tipo</dt>
              <dd className="font-medium text-neutral-900">{tipoInfo.etiqueta}</dd>
            </div>
            {espacio.capacidad && (
              <div className="flex justify-between gap-2">
                <dt className="text-neutral-500">Capacidad</dt>
                <dd className="font-medium text-neutral-900">{espacio.capacidad} personas</dd>
              </div>
            )}
          </dl>
        </aside>
      </div>

      {otrosEnBloque.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
            Otros espacios en {bloque?.nombre} — {espacio.planta}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otrosEnBloque.map((e) => (
              <EspacioCard key={e.id} espacio={e} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
