"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [nome, setNome] = useState("");
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);

    // Scroll suave automático ao carregar
    const timer = setTimeout(() => {
      window.scrollTo({ top: 150, behavior: "smooth" });
    }, 500); // espera 0.5s e desce suavemente

    return () => clearTimeout(timer);
  }, []);

  function handleSaveName() {
    if (nome.trim() !== "") {
      setShowModal(false);
    }
  }

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center md:items-center w-full mt-20 gap-30">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 animate-fadeIn">
          <p className="text-black text-lg sm:text-xl capitalize">Olá, {nome ? nome : "meu amigo(a)"}! Me chamo</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Markus Danyllo</h1>
          <p className="text-black text-base sm:text-lg">
            Desenvolvedor de Software e Técnico de Robótica
          </p>
        </div>
        <img
          className="w-48 sm:w-64 md:w-80 rounded-3xl hover:scale-105 transition-transform duration-500 animate-fadeIn"
          src="/perfil.jpg"
          alt="Markus programando"
          title="Markus programando no FIRA RoboWorld Cup - Alemanha 2023"
        />
      </div>
      <section className="w-1/2 flex flex-col sm:flex-row justify-center sm:justify-end ml-52 mt-4 gap-4 sm:gap-8 animate-fadeIn">
        <a className="flex items-center text-black text-sm sm:text-base font-semibold gap-2 hover:scale-110 transition-transform duration-300" href="https://github.com/mdanyllo">
          <img className="w-8 sm:w-6" src="/github.png" alt="GitHub" />
          GitHub
        </a>
        <a className="flex items-center text-black text-sm sm:text-base font-semibold gap-2 hover:scale-110 transition-transform duration-300" href="https://www.linkedin.com/in/markusdanyllo">
          <img className="w-8 sm:w-6" src="/linkedin.png" alt="LinkedIn" />
          LinkedIn
        </a>
      </section>
      <button className="flex items-center justify-center text-black font-semibold mt-20 px-6 py-3 border-2 border-[#ff9500] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#f58f00] hover:text-white">
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
