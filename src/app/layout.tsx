import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: {
    default: "VVAI - Inovação e Tecnologia para o Futuro",
    template: "%s | VVAI",
  },
  description: "Somos a VVAI, uma equipe apaixonada por transformar ideias em soluções tecnológicas inovadoras.",
  keywords: ["VVAI", "tecnologia", "inovação", "desenvolvimento", "software", "equipe"],
  authors: [{ name: "VVAI Team" }],
  creator: "VVAI Team",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vvai.com",
    title: "VVAI - Inovação e Tecnologia para o Futuro",
    description: "Somos a VVAI, uma equipe apaixonada por transformar ideias em soluções tecnológicas inovadoras.",
    siteName: "VVAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "VVAI - Inovação e Tecnologia para o Futuro",
    description: "Somos a VVAI, uma equipe apaixonada por transformar ideias em soluções tecnológicas inovadoras.",
    creator: "@vvai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
