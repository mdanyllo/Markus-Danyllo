"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname === "/email") return null;

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-2">
        <div className="md:w-16 w-12">
          <Image src="/robo.gif" alt="Robôzinho programando" width={200} height={24} />
        </div>

        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black hover:text-[#ff9500] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        
        <div className="relative md:hidden">
          <button
            className="text-black p-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md flex flex-col gap-3 p-3 animate-fadeIn">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-[#ff9500] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
