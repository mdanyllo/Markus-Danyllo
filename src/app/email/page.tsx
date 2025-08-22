"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";
import { div } from "framer-motion/client";

export default function Email() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <Image src="/robo.gif" alt="Robôzinho programando" width={400} height={240} className="mb-10 md:mt-2 mt-16" />
            <h1 className="md:text-4xl text-3xl text-center font-medium">Obrigado pela sua mensagem!</h1>
            <h2 className="md:text-2xl font-medium">Responderemos em breve.</h2>
            <Link href="https://portfolio-markusdanyllo.vercel.app/" className="flex items-center justify-center text-black font-medium mt-10 px-6 py-3 border-2 border-[#ff9500] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#f58f00] hover:text-white">Voltar para a Home</Link>
        </div>
    )
}