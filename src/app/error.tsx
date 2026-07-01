"use client";

import { useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center px-4 py-16">
      <div className="surface-card max-w-md p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--danger-light)] text-[var(--danger)]">
          <Icon name="close" className="h-6 w-6" />
        </span>
        <h1 className="mt-5 text-xl font-semibold text-[var(--text)]">Ocurrió un error inesperado</h1>
        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
          Algo falló al procesar tu solicitud. Puedes intentarlo de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn-primary rounded-lg px-4 py-2 text-sm font-medium">
            Reintentar
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-[var(--border-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--secondary)]"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
