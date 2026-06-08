import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateUser } from "../actions";

export const metadata = {
  title: "Editar usuario | Espacios FII",
};

export default async function EditarUsuarioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const usuario = await prisma.user.findUnique({ where: { id } });
  if (!usuario) notFound();

  const updateUserWithId = updateUser.bind(null, usuario.id);

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6">
      <div>
        <Link href="/admin/usuarios" className="text-sm text-[#003865] hover:underline">
          ← Volver a usuarios
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-[#003865]">Editar usuario</h1>
        <p className="mt-1 text-neutral-600">
          Actualiza los datos de <strong>{usuario.username}</strong>. Deja la
          contraseña en blanco si no quieres cambiarla.
        </p>
      </div>

      <form action={updateUserWithId} className="flex flex-col gap-4 rounded-lg border border-neutral-200 p-6">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-700">Usuario</label>
          <input
            name="username"
            defaultValue={usuario.username}
            required
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-700">Nombre completo</label>
          <input
            name="name"
            defaultValue={usuario.name}
            required
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-700">
            Nueva contraseña (opcional)
          </label>
          <input
            name="password"
            type="password"
            minLength={6}
            placeholder="Dejar en blanco para no cambiarla"
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-700">Rol</label>
          <select
            name="role"
            defaultValue={usuario.role}
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
          >
            <option value="USER">Usuario</option>
            <option value="ADMIN">Administrador</option>
          </select>
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-md bg-[#003865] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#00518f] transition-colors"
          >
            Guardar cambios
          </button>
          <Link
            href="/admin/usuarios"
            className="rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
