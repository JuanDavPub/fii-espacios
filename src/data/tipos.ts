export type TipoEspacio =
  | "aula"
  | "laboratorio"
  | "taller"
  | "oficina"
  | "auditorio"
  | "bano"
  | "deposito"
  | "circulacion"
  | "servicio";

export const TIPOS_INFO: Record<TipoEspacio, { etiqueta: string; color: string }> = {
  aula: { etiqueta: "Aula", color: "bg-blue-100 text-blue-800" },
  laboratorio: { etiqueta: "Laboratorio", color: "bg-emerald-100 text-emerald-800" },
  taller: { etiqueta: "Taller", color: "bg-amber-100 text-amber-800" },
  oficina: { etiqueta: "Oficina", color: "bg-violet-100 text-violet-800" },
  auditorio: { etiqueta: "Auditorio / Gradas", color: "bg-rose-100 text-rose-800" },
  bano: { etiqueta: "Baño", color: "bg-cyan-100 text-cyan-800" },
  deposito: { etiqueta: "Depósito / Bodega", color: "bg-stone-200 text-stone-800" },
  circulacion: { etiqueta: "Circulación / Escaleras", color: "bg-slate-200 text-slate-800" },
  servicio: { etiqueta: "Servicios generales", color: "bg-orange-100 text-orange-800" },
};

export interface Espacio {
  id: string;
  codigo: string;
  nombre: string;
  tipo: TipoEspacio;
  bloqueId: string;
  planta: string;
  descripcion: string;
  capacidad?: number;
}

export interface PlantaBloque {
  nombre: string;
  imagen: string;
}

export interface Bloque {
  id: string;
  nombre: string;
  resumen: string;
  descripcion: string;
  plantas: PlantaBloque[];
  /** Imagen general/portada del bloque (se usa cuando no hay contexto de planta específica). */
  imagen: string;
}
