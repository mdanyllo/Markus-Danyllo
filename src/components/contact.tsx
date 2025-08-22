"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrblnpqy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setTimeout(() => {
        window.location.href = "/email";
      }, 10);
      } else {
        alert("Ocorreu um erro, tente novamente.");
      }
    } catch (error) {
      alert("Falha na conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="contato" className="flex flex-col items-center bg-black md:scroll-mt-9 scroll-mt-16">
      <div className="flex flex-col items-center w-full">
        <h1 className="md:text-4xl text-3xl mt-10 mb-4 text-white">Entre em contato</h1>
        <p className="text-white text-lg text-center mb-8 md:w-1/3 w-70">
          Vamos fechar um projeto juntos? Minha caixa de entrada está sempre aberta. Se você tiver alguma dúvida ou só quiser dizer oi, prometo responder o mais rápido possível!!
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:mb-10 mb-8 mt-4">
          <Link
            className="flex items-center justify-center text-white text-sm sm:text-base font-medium gap-3 hover:scale-105 transition-transform duration-300 bg-green-500 py-3 px-6 sm:px-8 rounded-lg shadow-lg min-w-[160px]"
            href="https://wa.me/+5598984800522?text=Ol%C3%A1%2C%20gostei%20muito%20do%20seu%20portf%C3%B3lio%20e%20quero%20fechar%20um%20projeto%20com%20voc%C3%AA."
            target="_blank"
          >
            <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} />
            WhatsApp
          </Link>

          <Link
            className="flex items-center justify-center text-white text-sm sm:text-base font-medium gap-3 hover:scale-105 transition-transform duration-300 bg-red-500 py-3 px-6 sm:px-8 rounded-lg shadow-lg min-w-[160px]"
            href="mailto:markusdanyllodev@gmail.com?subject=PROPOSTA"
            target="_blank"
          >
            <Image src="/email.png" alt="Email" width={24} height={24} />
            Email
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-4 gap-4 md:w-full max-w-md md:mb-20 mb-12 w-80 px-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="p-3 rounded-md border-2 border-[#ff9500] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff9500]"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            required
            className="p-3 rounded-md border-2 border-[#ff9500] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff9500]"
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            required
            className="p-3 rounded-md border-2 border-[#ff9500] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff9500]"
            rows={5}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-black border-2 text-white py-3 px-6 border-[#ff9500] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#f58f00] disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}
