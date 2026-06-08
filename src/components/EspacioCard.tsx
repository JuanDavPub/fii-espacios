import Link from "next/link";
import { Espacio, TIPOS_INFO } from "@/data/tipos";

export default function EspacioCard({ espacio }: { espacio: Espacio }) {
  const tipoInfo = TIPOS_INFO[espacio.tipo];

  return (
    <Link
      href={`/espacios/${espacio.id}`}
      className="group flex flex-col gap-2 rounded-lg border border-neutral-200 p-4 hover:border-[#003865] hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-mono text-neutral-500">{espacio.codigo}</p>
          <h3 className="font-medium text-neutral-900 group-hover:text-[#003865] group-hover:underline">
            {espacio.nombre}
          </h3>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${tipoInfo.color}`}>
          {tipoInfo.etiqueta}
        </span>
      </div>
      <p className="text-sm text-neutral-600">{espacio.descripcion}</p>
      <div className="mt-1 flex flex-wrap gap-2 text-xs text-neutral-500">
        <span>{espacio.planta}</span>
        {espacio.capacidad && <span>· Capacidad: {espacio.capacidad} personas</span>}
      </div>
    </Link>
  );
}
