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
        <div className="flex flex-row justify-center mt-6" >
          <nav className="flex inline-flex gap-10 space-x-4 border border-[#ff9500] rounded-full px-4 py-2">
            <a className="text-black" href="/">Home</a>
            <a className="text-black" href="">Sobre</a>
            <a className="text-black" href="">Projetos</a>
            <a className="text-black" href="">Contato</a>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
