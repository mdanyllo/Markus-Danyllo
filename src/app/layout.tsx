import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
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
        <div className="flex flex-row justify-end mt-8 mr-4" >
          <nav className="flex gap-8 mr-8">
            <a className="text-black hover:text-[#ff9500]" href="/">Home</a>
            <a className="text-black hover:text-[#ff9500]" href="">Sobre</a>
            <a className="text-black hover:text-[#ff9500]" href="">Projetos</a>
            <a className="text-black hover:text-[#ff9500]" href="">Contato</a>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
