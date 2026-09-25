import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateus Costa Souza — Portfólio",
  description: "Projetos, competências e trajetória profissional de Mateus Costa Souza.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  ),
  openGraph: {
    title: "Mateus Costa Souza — Desenvolvedor Full Stack",
    description: "Projetos, competências e trajetória profissional de Mateus Costa Souza.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Mateus Costa Souza — Desenvolvedor Full Stack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Costa Souza — Desenvolvedor Full Stack",
    description: "Projetos, competências e trajetória profissional de Mateus Costa Souza.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
