import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Espacios FII | Facultad de Ingeniería Industrial - UG",
  description:
    "Guía de bloques, aulas, laboratorios y demás espacios de la Facultad de Ingeniería Industrial de la Universidad de Guayaquil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Providers>
          <Header />

          <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8">{children}</main>

          <footer className="border-t border-neutral-200 bg-neutral-50 text-sm text-neutral-600">
            <div className="mx-auto max-w-6xl px-4 py-6">
              <p>
                Guía orientativa de espacios de la Facultad de Ingeniería Industrial de la
                Universidad de Guayaquil. Pensada para que estudiantes y visitantes ubiquen
                aulas, laboratorios y demás dependencias sin perderse.
              </p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
