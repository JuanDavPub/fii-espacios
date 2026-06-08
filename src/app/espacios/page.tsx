import EspaciosBuscador from "./EspaciosBuscador";

export const metadata = {
  title: "Buscar espacios | Espacios FII",
};

export default function EspaciosPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-[#003865]">Buscar espacios</h1>
        <p className="mt-1 text-neutral-600">
          Busca aulas, laboratorios, talleres, oficinas y demás espacios por nombre,
          código, bloque o tipo.
        </p>
      </div>
      <EspaciosBuscador />
    </div>
  );
}
