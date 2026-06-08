import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import QuickActions from "@/components/QuickActions";
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

function InfoTile({ label, value, icon }: { label: string; value: React.ReactNode; icon: "building" | "home" | "users" | "archive" }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[var(--border-soft)] bg-[var(--secondary)] px-4 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--primary)] shadow-sm">
        <Icon name={icon} className="h-4.5 w-4.5" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">{label}</dt>
        <dd className="mt-0.5 truncate text-sm font-semibold text-[var(--text)]">{value}</dd>
      </div>
    </div>
  );
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
    <div className="flex flex-col gap-6">
      <section className="surface-card scroll-reveal relative overflow-hidden p-6 sm:p-7">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1.5"
          style={{ background: tipoInfo.accent }}
        />
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div>
            <Link
              href="/espacios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-hover)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
            >
              <Icon name="arrowLeft" />
              Volver al buscador
            </Link>
            <p className="mt-5 font-mono text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              {espacio.codigo}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)]">{espacio.nombre}</h1>
              <span className={`badge-pill ${tipoInfo.color}`}>{tipoInfo.etiqueta}</span>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">{espacio.descripcion}</p>
          </div>

          <QuickActions
            title={espacio.nombre}
            filename={`${espacio.id}.json`}
            payload={{ espacio, bloque: bloque?.nombre ?? null }}
          />
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <section className="surface-card overflow-hidden">
          <div className="border-b border-[var(--divider)] px-5 py-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Ubicacion visual
            </p>
            <h2 className="mt-1 text-xl font-semibold text-[var(--text)]">Plano de referencia</h2>
          </div>
          <div className="p-5 sm:p-6">
            {bloque && (
              <div className="overflow-hidden rounded-xl border border-[var(--border-soft)] bg-[var(--secondary)]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={planta?.imagen ?? bloque.imagen}
                    alt={`Plano de ${bloque.nombre} - ${espacio.planta}`}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <p className="border-t border-[var(--border-soft)] bg-white px-4 py-3 text-xs text-[var(--text-muted)]">
                  Ubicacion de referencia dentro del {bloque.nombre} - {espacio.planta}.
                </p>
              </div>
            )}
          </div>
        </section>

        <aside className="surface-card overflow-hidden xl:h-fit">
          <div className="border-b border-[var(--divider)] px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Informacion
            </p>
            <h2 className="mt-1 text-xl font-semibold text-[var(--text)]">Datos del espacio</h2>
          </div>
          <dl className="grid gap-3 p-5">
            <InfoTile
              icon="building"
              label="Bloque"
              value={
                bloque ? (
                  <Link href={`/bloques/${bloque.id}`} className="text-[var(--primary)] hover:underline">
                    {bloque.nombre}
                  </Link>
                ) : (
                  "No definido"
                )
              }
            />
            <InfoTile icon="home" label="Planta" value={espacio.planta} />
            <InfoTile icon="archive" label="Tipo" value={tipoInfo.etiqueta} />
            <InfoTile
              icon="users"
              label="Capacidad"
              value={espacio.capacidad ? `${espacio.capacidad} personas` : "No definida"}
            />
          </dl>
        </aside>
      </div>

      {otrosEnBloque.length > 0 && (
        <section className="surface-card overflow-hidden">
          <div className="border-b border-[var(--divider)] px-5 py-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Relacionados
            </p>
            <h2 className="mt-1 text-xl font-semibold text-[var(--text)]">
              Otros espacios en {bloque?.nombre} - {espacio.planta}
            </h2>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
            {otrosEnBloque.map((e) => (
              <EspacioCard key={e.id} espacio={e} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
