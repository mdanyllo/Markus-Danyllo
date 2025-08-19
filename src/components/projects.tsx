"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Projects() {
    return(
        <div className="w-full">
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-3xl md:text-4xl mb-10">Projetos</h1>
                <div className="flex flex-col mt-20">
                <div className="flex flex-row justify-center md:gap-20 md:w-250 mb-10">
                    <Image
                        src="/projeto1.png"
                        alt="Projeto 1"
                        width={800}  
                        height={600}
                        className="border-10 border-gray-400"      
                    />
                    <div>
                    <h1 className="flex flex-col font-semibold text-3xl ">Divino Pote</h1>
                    <p>Projeto freelance onde o cliente queria um site simples para atrair clientes para fazer pedido no WhatsApp deles.</p>
                    <div className="flex gap-4 mt-10">
                        <Link href="https://divinopote.vercel.app/" className="text-white bg-black p-2 rounded-sm">
                        Ver demo
                        </Link>
                        <Link href="https://github.com/mdanyllo/FREELA04---Divino-Pote" className="text-white bg-black p-2 rounded-sm">
                        Repositório
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}   