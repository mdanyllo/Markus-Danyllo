"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold"></div>

        <div className="hidden md:flex gap-8">
          <Link className="text-black hover:text-[#ff9500]" href="/">Home</Link>
          <Link className="text-black hover:text-[#ff9500]" href="#sobre">Sobre</Link>
          <Link className="text-black hover:text-[#ff9500]" href="#projetos">Projetos</Link>
          <Link className="text-black hover:text-[#ff9500]" href="#contato">Contato</Link>
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <Link className="text-black hover:text-[#ff9500]" href="/">Home</Link>
          <Link className="text-black hover:text-[#ff9500]" href="#sobre">Sobre</Link>
          <Link className="text-black hover:text-[#ff9500]" href="#projetos">Projetos</Link>
          <Link className="text-black hover:text-[#ff9500]" href="#contato">Contato</Link>
        </div>
      )}
    </header>
  );
}