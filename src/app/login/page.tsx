import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Icon from "@/components/Icon";
import LoginForm from "./LoginForm";
import LoginAnimations from "./LoginAnimations";

export const metadata = {
  title: "Iniciar sesión | Espacios FII",
};

export default function LoginPage() {
  return (
    <div className="login-gradient position-relative d-flex align-items-center justify-content-center min-vh-100 overflow-hidden px-3 py-5">
      <LoginAnimations />

      <div aria-hidden="true" className="login-pattern pointer-events-none position-absolute top-0 start-0 w-100 h-100" />
      <div
        aria-hidden="true"
        className="anim-blob pointer-events-none position-absolute rounded-circle"
        style={{ top: "-6rem", left: "-6rem", width: "18rem", height: "18rem", background: "rgba(255,255,255,0.06)", filter: "blur(70px)" }}
      />
      <div
        aria-hidden="true"
        className="anim-blob pointer-events-none position-absolute rounded-circle"
        style={{ bottom: "-7rem", right: "-5rem", width: "24rem", height: "24rem", background: "rgba(255,255,255,0.05)", filter: "blur(70px)" }}
      />

      <div className="container-fluid position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div className="d-flex flex-column align-items-center text-center">
              <div data-anim="logo" className="brand-logo-badge h-20 w-20 sm:h-24 sm:w-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/LogoUGcolor.svg?v=5"
                  alt="Universidad de Guayaquil"
                  className="brand-logo-img"
                />
              </div>

              <h1 data-anim="title" className="mt-4 fw-semibold text-white" style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)", letterSpacing: "-0.01em" }}>
                Gestión de Espacios UG
              </h1>
              <p data-anim="subtitle" className="mt-2 mb-0 text-white-50" style={{ maxWidth: "26rem", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Sistema inteligente para la administración y consulta de aulas, laboratorios,
                talleres, oficinas y espacios institucionales de la Universidad de Guayaquil.
              </p>

              <section
                data-anim="card"
                className="glass-panel w-100 mt-4 rounded-4 shadow-lg p-4 p-sm-5 text-start"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A4A82] mb-0">
                  Acceso institucional
                </p>
                <h2 className="mt-2 fw-semibold" style={{ fontSize: "1.5rem", color: "#243447", letterSpacing: "-0.01em" }}>
                  Inicia sesión en tu cuenta
                </h2>
                <p className="mt-2 mb-0 text-sm leading-6 text-[#64748B]">
                  Ingresa tus credenciales institucionales para consultar bloques, aulas,
                  laboratorios y demás espacios de la facultad.
                </p>

                <div className="mt-4">
                  <Suspense>
                    <LoginForm />
                  </Suspense>
                </div>
              </section>

              <p className="mt-4 mb-0 d-flex align-items-center justify-content-center gap-2 text-xs text-white-50">
                <Icon name="shield" className="h-4 w-4 shrink-0 text-white/80" />
                Acceso seguro y cifrado para la comunidad de la Facultad de Ingeniería Industrial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
