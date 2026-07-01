import Link from "next/link";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Página no encontrada | Espacios FII",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center px-4 py-16">
      <div className="surface-card max-w-md p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary)]">
          <Icon name="search" className="h-6 w-6" />
        </span>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Error 404</p>
        <h1 className="mt-2 text-xl font-semibold text-[var(--text)]">Página no encontrada</h1>
        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
          La ruta solicitada no existe o fue movida.
        </p>
        <Link href="/" className="btn-primary mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
