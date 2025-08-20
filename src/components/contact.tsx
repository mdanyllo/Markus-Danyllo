"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Contact() {
    return (
        <div className="flex flex-col items-center bg-black">
            <div className="flex flex-col items-center w-1/2 ">
                <h1 className="text-4xl mt-10 mb-4">Entre em contato</h1>
                <p className="text-white text-lg text-center mb-8">Vamos fechar um projeto juntos? Minha caixa de entrada está sempre aberta. Se você tiver alguma dúvida ou só quiser dizer oi, prometo responder o mais rápido possível!!</p>
                <h4 className="text-2xl mb-4">Diga olá</h4>
                <div className="flex justify-center gap-10 mb-20">
                    <Link
                    className="flex items-center text-black text-sm sm:text-base font-medium gap-2 hover:scale-110 transition-transform duration-300 bg-white py-2 px-7 rounded-sm"
                    href="https://wa.me/+5598984800522?text=Ol%C3%A1%2C%20gostei%20muito%20do%20seu%20portf%C3%B3lio%20e%20quero%20fechar%20um%20projeto%20com%20voc%C3%AA."
                    >
                        <Image
                            src="/whatsapp.png"
                            alt="WhatsApp"
                            width={24}
                            height={24}
                        />
                        WhatsApp
                    </Link>
                    <Link
                    className="flex items-center text-black text-sm sm:text-base font-medium gap-2 hover:scale-110 transition-transform duration-300 bg-white py-4 px-10 rounded-sm"
                    href="https://www.linkedin.com/in/markusdanyllo"
                    >
                        <Image
                            src="/email.png"
                            alt="Email"
                            width={24}
                            height={24}
                        />
                        Email
                    </Link>
                </div>
            </div>
        </div>
    )
}