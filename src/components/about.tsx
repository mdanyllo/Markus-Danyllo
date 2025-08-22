import Image from "next/image";
import Link from "next/link";
import { Children } from "react";


export default function About() {
    return (
        <div id="sobre" className="flex flex-col justify-center items-center w-full h-full bg-black mt-10 md:scroll-mt-10">
            <div className="md:flex md:flex-row flex flex-col justify-center gap-10 items-center">
                <div className="flex justify-center items-center md:w-1/2">
                <Image
                    src="/about.jpeg"
                    alt="Markus falando no microfone"
                    width={1000}       // largura máxima da imagem
                    height={800}      // altura proporcional à largura
                    className="w-80 mt-20 md:w-110  hover:scale-105 transition-transform duration-500 object-cover"
                />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start gap-2 mt-14 text-white w-90 md:w-1/3">
                    <p className="text-xs md:text-sm">Desenvolvedor de Software e Técnico de Robótica</p>
                    <h1 className="text-3xl mb-4">Markus Danyllo</h1>
                    <p className="text-center md:text-start">Tenho 19 anos e atualmente curso Análise e Desenvolvimento de Sistemas. Meu primeiro contato real com programação aconteceu em 2022, quando comecei a estudar Python. No ano seguinte, me aprofundei em JavaScript, HTML e CSS, e também fui vice-campeão mundial de robótica, uma experiência que consolidou meu interesse por tecnologia e inovação.

                    Em 2024, participei do programa ONE, uma iniciativa da Alura em parceria com a Oracle, que ampliou significativamente minha visão sobre desenvolvimento de software. Após essa experiência, consegui meus primeiros projetos freelance, nos quais pude aplicar meus conhecimentos e ganhar experiência profissional prática com programação.

                    Hoje, atuo como técnico de robótica no IEMA, participo do programa Jovem Tech e integro o programa Bolsa Futuro Digital da Softex PE. Possuo habilidades em NextJS, Tailwind, HTML, CSS, JavaScript e Python, e atualmente estou em processo de aprendizagem de Java.
                    Apaixonado por tecnologia, busco transformar ideias em soluções digitais inovadoras e de impacto.</p>
                                    </div>
            </div>
            <div className="flex flex-col items-center mt-20 mb-20">
                <h1 className="text-3xl md:text-4xl">Habilidades</h1>
                <div className="flex justify-center items-center w-10 gap-8 md:w-18 md:gap-24 sm:gap-16">
                    <Image
                    src="/python.png"
                    alt="Python"
                    title="Python"
                    width={1000}       // largura máxima da imagem
                    height={800}      // altura proporcional à largura
                    className="w-50 mt-12 sm:w-64 md:w-110  hover:scale-120 transition-transform duration-500 object-cover"
                    />
                    <Image
                    src="/html+css.png"
                    alt="HTML e CSS"
                    title="HTML e CSS"
                    width={1000}       // largura máxima da imagem
                    height={800}      // altura proporcional à largura
                    className="w-50 mt-12 sm:w-64 md:w-110  hover:scale-120 transition-transform duration-500 object-cover"
                    />
                    <Image
                    src="/js.png"
                    alt="JavaScript"
                    title="JavaScript"
                    width={1000}       // largura máxima da imagem
                    height={800}      // altura proporcional à largura
                    className="w-50 mt-12 sm:w-64 md:w-90  hover:scale-120 transition-transform duration-500 object-cover"
                    />
                    <Image
                    src="/tailwind.png"
                    alt="Tailwind CSS"
                    title="Tailwind CSS"
                    width={1000}       // largura máxima da imagem
                    height={800}      // altura proporcional à largura
                    className="w-50 mt-12 sm:w-64 md:w-110  hover:scale-120 transition-transform duration-500 object-cover"
                    />
                    <Image
                    src="/next.png"
                    alt="NextJS"
                    title="NextJS"
                    width={1200}       // largura máxima da imagem
                    height={1000}      // altura proporcional à largura
                    className="w-50 mt-12 sm:w-64 md:w-120 md:h-20 hover:scale-120 transition-transform duration-500 object-cover"
                    />
                </div>
            </div>
        </div>
    )
}