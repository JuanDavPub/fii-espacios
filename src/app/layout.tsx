import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
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
      <body className="min-h-full bg-[var(--app-bg)] text-neutral-900">
        <Providers>
          <Header>{children}</Header>
        </Providers>
      </body>
    </html>
  );
}
