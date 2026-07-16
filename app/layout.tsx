import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini Catalogo de Filmes",
  description:
    "Um site que permite que você favorite filmes e leia a descrição deles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`pt-16 px-[120px] manrope.className`}>
        <main className="min-h-svh">{children}</main>
      </body>
    </html>
  );
}
