import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOQUES, ESPACIOS, getBloque } from "@/data/bloques";
import EspacioCard from "@/components/EspacioCard";

export function generateStaticParams() {
  return BLOQUES.map((bloque) => ({ id: bloque.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const bloque = getBloque(id);
  return { title: bloque ? `${bloque.nombre} | Espacios FII` : "Bloque no encontrado" };
}

export default async function BloqueDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bloque = getBloque(id);
  if (!bloque) notFound();

  const espacios = ESPACIOS.filter((e) => e.bloqueId === bloque.id);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link href="/bloques" className="text-sm text-[#003865] hover:underline">
          ← Volver a bloques
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-[#003865]">{bloque.nombre}</h1>
        <p className="mt-1 max-w-3xl text-neutral-600">{bloque.descripcion}</p>
      </div>

      {bloque.plantas.map((planta) => {
        const espaciosPlanta = espacios.filter((e) => e.planta === planta.nombre);

        return (
          <section key={planta.nombre} className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
              {planta.nombre}
              {espaciosPlanta.length > 0 && (
                <span className="ml-2 text-sm font-normal text-neutral-500">
                  ({espaciosPlanta.length} espacios)
                </span>
              )}
            </h2>

            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={planta.imagen}
                  alt={`Plano de ${bloque.nombre} — ${planta.nombre}`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="border-t border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-500">
                Plano de referencia — {bloque.nombre}, {planta.nombre}.
              </p>
            </div>

            {espaciosPlanta.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {espaciosPlanta.map((espacio) => (
                  <EspacioCard key={espacio.id} espacio={espacio} />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
