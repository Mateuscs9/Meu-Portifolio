import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateus Souza — Portfólio",
  description: "Projetos, competências e trajetória profissional de Mateus Souza.",
  metadataBase: new URL("https://mateus-souza-portfolio.mateus-costasouza-58.chatgpt.site"),
  openGraph: {
    title: "Mateus Souza — Desenvolvedor Full Stack",
    description: "Projetos, competências e trajetória profissional de Mateus Souza.",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Mateus Souza — Desenvolvedor Full Stack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Souza — Desenvolvedor Full Stack",
    description: "Projetos, competências e trajetória profissional de Mateus Souza.",
    images: ["/og.png"],
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
