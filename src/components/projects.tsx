"use client";
import Link from "next/link"
import Image from "next/image";

import { useTranslation } from "@/context/translateContext";

export default function Projects() {
    const { t } = useTranslation();

    return(
        <div id="projetos" className="w-full md:scroll-mt-26 scroll-mt-26">
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-3xl md:text-4xl mb-10">{t.projects}</h1>
                <div className="flex flex-col md:gap-40 mt-10 gap-24 mb-6 md:mt-10 ">

                    {/*Projeto um*/}
                    <div className="flex flex-col items-center md:flex-row justify-center md:gap-20 md:w-full mb-10">
                        <div className="w-80 md:w-1/3">
                            <Image
                                src="/projeto4.png"
                                alt="Projeto 4"
                                width={900}  
                                height={700}
                                className="shadow-lg rounded-xl"      
                            />
                        </div>
                        <div className="flex flex-col items-center md:items-start font-semibold md:w-1/2 md:mt-2 mt-10 w-full max-w-md">
                            <h1 className="md:text-3xl text-2xl mb-2">{t.t1}</h1>
                            <p className="md:text-lg md:text-left font-medium text-center leading-relaxed break-words w-86">
                                {t.d1}
                            </p>
                            <div className="flex gap-4 mt-10">
                                <Link href="https://ieadelfinance.vercel.app/" className="text-white bg-black p-2 rounded-sm">
                                    {t.demo}
                                </Link>
                                <Link href="https://github.com/mdanyllo/IEADEL-Finance" className="text-white bg-black p-2 rounded-sm">
                                    {t.repo}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*Projeto dois*/}
                    <div className="flex flex-col items-center md:flex-row justify-center md:gap-20 md:w-full mb-10">
                        <div className="w-80 md:w-1/3">
                            <Image
                                src="/projeto1.png"
                                alt="Projeto 1"
                                width={900}  
                                height={700}
                                className="shadow-lg rounded-xl"      
                            />
                        </div>
                        <div className="flex flex-col items-center md:items-start font-semibold md:w-1/2 md:mt-2 mt-10 w-full max-w-md">
                            <h1 className="md:text-3xl text-2xl mb-2">Divino Pote</h1>
                            <p className="md:text-lg font-medium text-center md:text-left leading-relaxed break-words w-86">
                                {t.d2}
                            </p>
                            <div className="flex gap-4 mt-10">
                                <Link href="https://divinopote.vercel.app/" className="text-white bg-black p-2 rounded-sm">
                                    {t.demo}
                                </Link>
                                <Link href="https://github.com/mdanyllo/FREELA04---Divino-Pote" className="text-white bg-black p-2 rounded-sm">
                                    {t.repo}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*Projeto três*/}
                    <div className="flex flex-col items-center md:flex-row justify-center md:gap-20 md:w-full mb-10">
                        <div className="w-80 md:w-1/3">
                            <Image
                                src="/projeto2.png"
                                alt="Projeto 2"
                                width={900}  
                                height={700}
                                className="shadow-lg rounded-xl"      
                            />
                        </div>
                        <div className="flex flex-col items-center md:items-start font-semibold md:w-1/2 md:mt-2 mt-10 w-full max-w-md">
                            <h1 className="md:text-3xl text-2xl mb-2">{t.t3}</h1>
                            <p className="md:text-lg font-medium text-center md:text-left leading-relaxed break-words w-86">
                                {t.d3}
                            </p>
                            <div className="flex gap-4 mt-10">
                                <Link href="https://formsmeautosocorro.vercel.app/" className="text-white bg-black p-2 rounded-sm">
                                    {t.demo}
                                </Link>
                                <Link href="/" className="text-white bg-black p-2 rounded-sm">
                                    {t.repo}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*Projeto quatro*/}
                    <div className="flex flex-col items-center md:flex-row justify-center md:gap-20 md:w-full mb-10">
                        <div className="w-80 md:w-1/3">
                            <Image
                                src="/projeto3.png"
                                alt="Projeto 3"
                                width={900}  
                                height={700}
                                className="shadow-lg rounded-xl"      
                            />
                        </div>
                        <div className="flex flex-col items-center md:items-start font-semibold md:w-1/2 md:mt-2 mt-10 w-full max-w-md">
                            <h1 className="md:text-3xl text-2xl mb-2">{t.t4}</h1>
                            <p className="md:text-lg font-medium text-center md:text-left leading-relaxed break-words w-86">
                            {t.d4}
                            </p>
                            <div className="flex gap-4 mt-10">
                                <Link href="https://qr-codes-generator-chi.vercel.app/" className="text-white bg-black p-2 rounded-sm">
                                    {t.demo}
                                </Link>
                                <Link href="https://github.com/mdanyllo/Gerador-de-QR-Code" className="text-white bg-black p-2 rounded-sm">
                                    {t.repo}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                title="Ir para GitHub"
                href="https://github.com/mdanyllo?tab=repositories"
                className="flex items-center justify-center text-black font-medium px-7 py-4 border-2 border-[#ff9500] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#f58f00] hover:text-white mt-2 mb-10"
                >
                {t.mprojects}
                </Link>
            </div>
        </div>
    )
}   