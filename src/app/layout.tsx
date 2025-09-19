import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar"
import { Kanit } from "next/font/google";

import { TranslationProvider } from "@/context/translateContext";


const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight:  ["200", "300", "400", "500", "700"],
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
        <TranslationProvider>
          <body className={`${kanit.variable} antialiased`}>
            <Navbar />
            {children}
        </body>
      </TranslationProvider>
    </html>
  );
}
