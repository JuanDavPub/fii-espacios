import { Suspense } from "react";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Iniciar sesión | Espacios FII",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6 py-12">
      <div className="text-center">
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          Universidad de Guayaquil
        </p>
        <h1 className="text-xl font-semibold text-[#003865]">
          Acceso a la guía de espacios
        </h1>
        <p className="mt-1 text-sm text-neutral-600">
          Ingresa con tu cuenta para consultar los bloques y espacios de la
          Facultad de Ingeniería Industrial.
        </p>
      </div>
      <div className="rounded-lg border border-neutral-200 p-6">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
