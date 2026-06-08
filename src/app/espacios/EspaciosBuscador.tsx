"use client";

import { useMemo, useState } from "react";
import { BLOQUES, ESPACIOS } from "@/data/bloques";
import { TIPOS_INFO, TipoEspacio } from "@/data/tipos";
import EspacioCard from "@/components/EspacioCard";

export default function EspaciosBuscador() {
  const [busqueda, setBusqueda] = useState("");
  const [bloqueId, setBloqueId] = useState("todos");
  const [tipo, setTipo] = useState<TipoEspacio | "todos">("todos");

  const resultados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();
    return ESPACIOS.filter((espacio) => {
      if (bloqueId !== "todos" && espacio.bloqueId !== bloqueId) return false;
      if (tipo !== "todos" && espacio.tipo !== tipo) return false;
      if (texto) {
        const haystack = `${espacio.codigo} ${espacio.nombre} ${espacio.descripcion} ${espacio.planta}`.toLowerCase();
        if (!haystack.includes(texto)) return false;
      }
      return true;
    });
  }, [busqueda, bloqueId, tipo]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:items-center">
        <input
          type="search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre, código o descripción…"
          className="flex-1 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
        />
        <select
          value={bloqueId}
          onChange={(e) => setBloqueId(e.target.value)}
          className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
        >
          <option value="todos">Todos los bloques</option>
          {BLOQUES.map((b) => (
            <option key={b.id} value={b.id}>
              {b.nombre}
            </option>
          ))}
        </select>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value as TipoEspacio | "todos")}
          className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
        >
          <option value="todos">Todos los tipos</option>
          {(Object.keys(TIPOS_INFO) as TipoEspacio[]).map((t) => (
            <option key={t} value={t}>
              {TIPOS_INFO[t].etiqueta}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-neutral-500">
        {resultados.length} resultado{resultados.length === 1 ? "" : "s"}
      </p>

      {resultados.length === 0 ? (
        <p className="rounded-lg border border-dashed border-neutral-300 p-8 text-center text-neutral-500">
          No se encontraron espacios con esos criterios. Intenta ajustar la búsqueda o los filtros.
        </p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resultados.map((espacio) => (
            <EspacioCard key={espacio.id} espacio={espacio} />
          ))}
        </div>
      )}
    </div>
  );
}
