import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
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
      <body
        className={`${inter.className} sm:px-8 p-2 sm:px-[40px] md:px-[40px] lg:px-[80px]`}
      >
        <Header />
        <main className="min-h-svh">{children}</main>
      </body>
    </html>
  );
}
