import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight:  ["200", "300", "400", "500", "700"], // você pode adicionar os pesos que quiser
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
      <body className={`${kanit.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
