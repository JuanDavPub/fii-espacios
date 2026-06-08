import EspaciosBuscador from "./EspaciosBuscador";

export const metadata = {
  title: "Buscar espacios | Espacios FII",
};

export default function EspaciosPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="surface-card scroll-reveal p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
          Consulta institucional
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)]">Buscar espacios</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">
          Busca aulas, laboratorios, talleres, oficinas y demas espacios por nombre, codigo, bloque o tipo.
        </p>
      </section>
      <EspaciosBuscador />
    </div>
  );
}
