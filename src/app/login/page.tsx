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
    <div className="login-gradient position-relative d-flex align-items-center justify-content-center min-vh-100 overflow-x-hidden px-3 py-3 py-md-4">
      <LoginAnimations />

      <div aria-hidden="true" className="login-topbar position-absolute top-0 start-0 w-100" />

      <div
        aria-hidden="true"
        className="anim-blob login-blob-primary pointer-events-none position-absolute rounded-circle"
        style={{ top: "-6rem", left: "-6rem", width: "18rem", height: "18rem", filter: "blur(60px)" }}
      />
      <div
        aria-hidden="true"
        className="anim-blob login-blob-accent pointer-events-none position-absolute rounded-circle"
        style={{ bottom: "-7rem", right: "-5rem", width: "22rem", height: "22rem", filter: "blur(60px)" }}
      />

      <div className="container-fluid position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div className="d-flex flex-column align-items-center text-center mx-auto" style={{ maxWidth: "460px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                data-anim="logo"
                src="/LogoUGcolor.svg?v=5"
                alt="Universidad de Guayaquil"
                className="h-16 sm:h-20"
                style={{ width: "auto" }}
              />

              <h1
                data-anim="title"
                className="mt-3 fw-bold"
                style={{ fontSize: "clamp(1.5rem, 4vw, 1.9rem)", letterSpacing: "-0.01em", color: "var(--login-primary)" }}
              >
                Gestión de Espacios UG
              </h1>

              <section
                data-anim="card"
                className="login-card w-100 mt-4 p-4 p-sm-5 text-start"
              >
                <h2 className="mb-0 fw-semibold" style={{ fontSize: "1.5rem", color: "var(--login-text)", letterSpacing: "-0.01em" }}>
                  Inicia sesión
                </h2>

                <div className="mt-4">
                  <Suspense>
                    <LoginForm />
                  </Suspense>
                </div>
              </section>

              <p className="mt-3 mb-0 d-flex align-items-center justify-content-center gap-2 text-xs" style={{ color: "var(--login-text-secondary)" }}>
                <Icon name="shield" className="h-4 w-4 shrink-0 text-[var(--login-secondary)]" />
                Acceso seguro y cifrado para la comunidad de la Facultad de Ingeniería Industrial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
