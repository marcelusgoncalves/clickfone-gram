import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clickfone-gram.vercel.app"),
  title: "ClickFone | PABX Virtual em Nuvem — Memória RAM",
  description:
    "Telefonia em nuvem profissional com números únicos nacionais, relatórios em tempo real e mobilidade total. Sem infraestrutura física.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
