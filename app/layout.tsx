import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Accademia Aurea | Formazione d'Eccellenza",
  description: "Piattaforma italiana di formazione professionale certificata. Corsi di lingua italiana, design digitale, marketing, programmazione e AI. Accreditamento EQF europeo.",
  metadataBase: new URL("https://www.accademiaaurea.it"),
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="oro">
      <body>
        <CustomCursor />
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
