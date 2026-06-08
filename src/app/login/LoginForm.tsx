"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Icon from "@/components/Icon";

const fieldShellClass =
  "peer h-[58px] w-full rounded-xl border border-[#DCE5EF] bg-white pl-11 pr-4 pt-5 pb-1.5 text-sm text-[#243447] placeholder-transparent transition hover:border-[#94A3B8] focus:border-[#0A4A82] focus:outline-none focus:ring-4 focus:ring-[#0A4A82]/10";

const floatingLabelClass =
  "pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 text-sm text-[#94A3B8] transition-all duration-150 " +
  "peer-focus:top-[14px] peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#0A4A82] " +
  "peer-[&:not(:placeholder-shown)]:top-[14px] peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-[11px] peer-[&:not(:placeholder-shown)]:font-semibold peer-[&:not(:placeholder-shown)]:text-[#64748B]";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Usuario o contrasena incorrectos.");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] peer-focus:text-[#0A4A82]">
          <Icon name="mail" className="h-[18px] w-[18px]" />
        </span>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          placeholder=" "
          aria-invalid={Boolean(error)}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={fieldShellClass}
        />
        <label htmlFor="username" className={floatingLabelClass}>
          Usuario o correo institucional
        </label>
      </div>

      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] peer-focus:text-[#0A4A82]">
          <Icon name="lock" className="h-[18px] w-[18px]" />
        </span>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          placeholder=" "
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "login-error" : undefined}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`${fieldShellClass} pr-11`}
        />
        <label htmlFor="password" className={floatingLabelClass}>
          Contrasena
        </label>
        <button
          type="button"
          onClick={() => setShowPassword((value) => !value)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-[#94A3B8] transition hover:text-[#0A4A82] focus:outline-none focus:ring-2 focus:ring-[#0A4A82] focus:ring-offset-2"
          aria-label={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
          aria-pressed={showPassword}
          title={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
        >
          <Icon name={showPassword ? "eyeOff" : "eye"} className="h-[18px] w-[18px]" />
        </button>
      </div>

      {error && (
        <div
          id="login-error"
          role="alert"
          className="rounded-xl border border-[#EF4444]/25 bg-[#FEE2E2] px-4 py-3 text-sm text-[#B91C1C]"
        >
          {error}
        </div>
      )}

      <div className="flex items-center justify-between gap-3 text-sm">
        <label className="inline-flex items-center gap-2.5 text-[#64748B]">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 rounded border-[#DCE5EF] text-[#0A4A82] accent-[#0A4A82] focus:outline-none focus:ring-2 focus:ring-[#0A4A82] focus:ring-offset-2"
          />
          Recordarme
        </label>
        <a
          href="mailto:soporte@ug.edu.ec"
          className="rounded-md font-semibold text-[#0A4A82] no-underline transition hover:text-[#083B68] hover:underline focus:outline-none focus:ring-2 focus:ring-[#0A4A82] focus:ring-offset-2"
        >
          Recuperar contrasena
        </a>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#0A4A82] px-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(10,74,130,0.26)] transition hover:bg-[#083B68] hover:shadow-[0_16px_36px_rgba(10,74,130,0.32)] active:translate-y-px active:shadow-none disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#0A4A82] focus:ring-offset-2"
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        )}
        {loading ? "Validando acceso" : "Ingresar"}
      </button>
    </form>
  );
}
