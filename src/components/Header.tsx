import Link from "next/link";
import { auth, signOut } from "@/lib/auth";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/bloques", label: "Bloques" },
  { href: "/espacios", label: "Buscar espacios" },
];

export default async function Header() {
  const session = await auth();

  return (
    <header className="border-b border-neutral-200 bg-[#003865] text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-blue-200">
            Universidad de Guayaquil
          </p>
          <Link href="/" className="text-lg font-semibold hover:text-blue-100">
            Facultad de Ingeniería Industrial — Guía de Espacios
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <nav className="flex gap-1 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-3 py-1.5 hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {session?.user.role === "ADMIN" && (
              <Link
                href="/admin/usuarios"
                className="rounded px-3 py-1.5 hover:bg-white/10 transition-colors"
              >
                Administrar usuarios
              </Link>
            )}
          </nav>

          {session?.user && (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs">
                <span>
                  {session.user.name}{" "}
                  <span className="text-blue-200">
                    ({session.user.role === "ADMIN" ? "admin" : "usuario"})
                  </span>
                </span>
                <button type="submit" className="font-medium underline hover:text-blue-100">
                  Salir
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
