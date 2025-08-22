"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [nome, setNome] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("nome");
    if (savedName) {
      setNome(savedName);
      setShowModal(false);
    } else {
      setShowModal(true);
    }

    const timer = setTimeout(() => {
      window.scrollTo({ behavior: "smooth" });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  function handleSaveName() {
    if (nome.trim() !== "") {
      localStorage.setItem("nome", nome);
      setShowModal(false);
    }
  }

  return (
    <div id="home" className="flex flex-col items-center md:mt-40 mt-30 px-4 sm:px-8 md:w-full md:px-16 lg:px-24 scroll-mt-50">
      <div className="flex flex-col items-center w-full gap-10 md:flex-row md:gap-80 md:justify-center">
        <div className="flex flex-col items-center w-full md:items-start md:w-1/3">
          <p className="text-black text-lg sm:text-xl capitalize">
            Olá, {nome ? nome : "Visitante"}! Me chamo
          </p>
          <h1 className="text-4xl font-bold md:text-6xl md:whitespace-nowrap mb-2">
            Markus Danyllo
          </h1>
          <p className="text-black text-sm md:whitespace-nowrap md:text-base sm:text-lg">
            Desenvolvedor de Software e Técnico de Robótica
          </p>
        </div>
        <div className="flex flex-col items-center w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-3xl">
          <Image
            src="/perfil.JPG"
            alt="Markus programando"
            title="Markus programando no FIRA RoboWorld Cup - Alemanha 2023"
            width={800}       
            height={600}      
            className="w-48 sm:w-64 md:w-80 rounded-3xl object-cover"
          />
          <section className="flex justify-center items-center gap-6 mt-4 sm:gap-8 animate-fadeIn">
            <Link
              className="flex items-center text-black text-sm sm:text-base font-medium gap-2 hover:scale-110 transition-transform duration-300"
              href="https://github.com/mdanyllo"
            >
              <Image src="/github.png" alt="GitHub" width={20} height={24} />
              GitHub
            </Link>
            <Link
              className="flex items-center text-black text-sm sm:text-base font-medium gap-2 hover:scale-110 transition-transform duration-300"
              href="https://www.linkedin.com/in/markusdanyllo"
            >
              <Image src="/linkedin.png" alt="LinkedIn" width={20} height={24} />
              LinkedIn
            </Link>
          </section>
        </div>
      </div>
      <Link href="#projetos" className="flex items-center justify-center text-black font-medium mt-20 px-6 py-3 border-2 border-[#ff9500] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#f58f00] hover:text-white">
        Conheça o meu trabalho
      </Link>

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
