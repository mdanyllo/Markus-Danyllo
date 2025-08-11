import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Markus Danyllo",
  description: "Meu portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div >
          <nav className="flex justify-center gap-8 p-4 border-b-2 border-[#ff9500]">
            <a href="">Home</a>
            <a href="">Sobre</a>
            <a href="">Projetos</a>
            <a href="">Contato</a>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
