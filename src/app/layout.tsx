import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Correlativas · Planeador académico UTN",
  description: "Explorá tu plan académico y simulá qué materias priorizar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
