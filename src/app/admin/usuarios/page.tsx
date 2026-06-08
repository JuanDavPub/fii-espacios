import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createUser, deleteUser } from "./actions";

export const metadata = {
  title: "Administrar usuarios | Espacios FII",
};

export default async function UsuariosPage() {
  const session = await auth();
  const usuarios = await prisma.user.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-[#003865]">Administrar usuarios</h1>
        <p className="mt-1 text-neutral-600">
          Crea, edita y elimina las cuentas que pueden iniciar sesión en la guía de
          espacios. No existe registro público: solo un administrador puede dar de
          alta nuevos usuarios.
        </p>
      </div>

      <section className="rounded-lg border border-neutral-200 p-5">
        <h2 className="mb-3 text-lg font-semibold text-neutral-900">Nuevo usuario</h2>
        <form action={createUser} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">Usuario</label>
            <input
              name="username"
              required
              className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">Nombre completo</label>
            <input
              name="name"
              required
              className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">Contraseña</label>
            <input
              name="password"
              type="password"
              required
              minLength={6}
              className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">Rol</label>
            <select
              name="role"
              defaultValue="USER"
              className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-[#003865] focus:outline-none"
            >
              <option value="USER">Usuario</option>
              <option value="ADMIN">Administrador</option>
            </select>
          </div>
          <div className="sm:col-span-2 lg:col-span-4">
            <button
              type="submit"
              className="rounded-md bg-[#003865] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#00518f] transition-colors"
            >
              Crear usuario
            </button>
          </div>
        </form>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
          Usuarios registrados ({usuarios.length})
        </h2>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-50 text-neutral-500">
              <tr>
                <th className="px-4 py-3 font-medium">Usuario</th>
                <th className="px-4 py-3 font-medium">Nombre</th>
                <th className="px-4 py-3 font-medium">Rol</th>
                <th className="px-4 py-3 font-medium">Creado</th>
                <th className="px-4 py-3 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id} className="border-t border-neutral-200">
                  <td className="px-4 py-3 font-mono text-xs">{usuario.username}</td>
                  <td className="px-4 py-3">{usuario.name}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        usuario.role === "ADMIN"
                          ? "bg-violet-100 text-violet-800"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      {usuario.role === "ADMIN" ? "Administrador" : "Usuario"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-neutral-500">
                    {usuario.createdAt.toLocaleDateString("es-EC", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-3">
                      <Link
                        href={`/admin/usuarios/${usuario.id}`}
                        className="text-[#003865] hover:underline"
                      >
                        Editar
                      </Link>
                      {session?.user.id !== usuario.id && (
                        <form
                          action={async () => {
                            "use server";
                            await deleteUser(usuario.id);
                          }}
                        >
                          <button type="submit" className="text-red-600 hover:underline">
                            Eliminar
                          </button>
                        </form>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
