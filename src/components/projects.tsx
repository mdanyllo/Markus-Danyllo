"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Projects() {
    return(
        <div className="w-full">
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-3xl md:text-4xl mb-10">Projetos</h1>
                <div className="flex flex-col md:gap-40 md:mt-10 ">

                    {/*Projeto um*/}
                    <div className="flex flex-col items-center md:flex-row justify-center md:gap-20 md:w-full mb-10">
                        <Image
                            src="/projeto1.png"
                            alt="Projeto 1"
                            width={800}  
                            height={600}
                            className="border-10 border-gray-400 w-full md:w-1/2 max-w-sm"      
                        />
                        <div className="flex flex-col items-center md:items-start font-semibold md:w-1/2 md:mt-2 mt-10 w-full max-w-md">
                            <h1 className="md:text-3xl text-2xl mb-2">Divino Pote</h1>
                            <p className="md:text-lg font-medium text-center md:text-left leading-relaxed break-words">
                            Projeto freelance onde o cliente queria um site simples para atrair clientes
                            para fazer pedido no WhatsApp deles. Projeto freelance onde o cliente queria
                            um site simples para atrair clientes para fazer pedido no WhatsApp deles.
                            </p>
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

                    {/*Projeto dois*/}

                    {/*Projeto três*/}
                </div>
            </div>
        </div>
    )
}   