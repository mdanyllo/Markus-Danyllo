"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
    return (
        <div className="bg-[#141414] flex items-center justify-between w-full h-26">
            <p className="text-white text-sm ml-10 font-thin">© 2025 Markus Danyllo. Todos os direitos reservados.</p>
            <div className="flex gap-14 mr-10">
                <Link
                    className="flex items-center text-black text-sm sm:text-base font-medium gap-2 hover:scale-110 transition-transform duration-300"
                    href="https://github.com/mdanyllo"
                    >
                    <Image
                        src="/github2.png"
                        alt="GitHub"
                        width={20} 
                        height={24}
                    />
                </Link>
                <Link
                    className="flex items-center text-black text-sm sm:text-base font-medium gap-2 hover:scale-110 transition-transform duration-300"
                    href="https://www.linkedin.com/in/markusdanyllo"
                    >
                    <Image
                        src="/linkedin2.png"
                        alt="LinkedIn"
                        width={20}
                        height={24}
                    />
                </Link>
                <Link
                    className="flex items-center text-black text-sm sm:text-base gap-2 hover:scale-110 transition-transform duration-300"
                    href="https://www.linkedin.com/in/markusdanyllo"
                    >
                    <Image
                        src="/mail.png"
                        alt="Email"
                        width={24}
                        height={24}
                    />
                </Link>    
            </div>
        </div>
    )
}