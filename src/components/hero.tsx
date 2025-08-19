"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [nome, setNome] = useState("");
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);

  const timer = setTimeout(() => {
      window.scrollTo({behavior: "smooth" });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  function handleSaveName() {
    if (nome.trim() !== "") {
      setShowModal(false);
    }
  }

  return (
    <div className="flex flex-col items-center md:mt-40 mt-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center md:items-center w-full md:gap-30 gap-10">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <p className="text-black text-lg sm:text-xl capitalize">Olá, {nome ? nome : "meu amigo(a)"}! Me chamo</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Markus Danyllo</h1>
          <p className="text-black text-base sm:text-lg">
            Desenvolvedor de Software e Técnico de Robótica
          </p>
        </div>
        <div className="relative w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 animate-fadeIn">
        <Image
          src="/perfil.JPG"
          alt="Markus programando"
          title="Markus programando no FIRA RoboWorld Cup - Alemanha 2023"
          width={800}       // largura máxima da imagem
          height={600}      // altura proporcional à largura
          className="w-48 sm:w-64 md:w-80 rounded-3xl hover:scale-105 transition-transform duration-500 animate-fadeIn object-cover"
        />
      </div>
      </div>
      <section className="w-1/2 flex justify-center items-center gap-6 sm:justify-end md:ml-52 mt-4 sm:gap-8 animate-fadeIn">
        <Link
          className="flex items-center text-black text-sm sm:text-base font-medium gap-2 hover:scale-110 transition-transform duration-300"
          href="https://github.com/mdanyllo"
        >
          <Image
            src="/github.png"
            alt="GitHub"
            width={24}  // w-6 equivale a 24px
            height={24}
          />
          GitHub
        </Link>
        <Link
          className="flex items-center text-black text-sm sm:text-base font-medium gap-2 hover:scale-110 transition-transform duration-300"
          href="https://www.linkedin.com/in/markusdanyllo"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          LinkedIn
        </Link>
      </section>
      <button className="flex items-center justify-center text-black font-medium mt-20 px-6 py-3 border-2 border-[#ff9500] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#f58f00] hover:text-white">
        Conheça o meu trabalho
      </button>

      {showModal && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-72 sm:w-80">
            <h2 className="text-xl text-black font-bold mb-4">Qual é o seu nome?</h2>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
              className="text-black border rounded p-2 w-full"
              placeholder="Digite seu nome"
            />
            <button
              onClick={handleSaveName}
              className="mt-4 bg-[#f58f00] text-white px-4 py-2 rounded cursor-pointer"
            >
              Continuar
            </button>
          </div> 
        </div>
      )}
    </div>
  );
}
