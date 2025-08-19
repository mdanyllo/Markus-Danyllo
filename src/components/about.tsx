import Image from "next/image";
import Link from "next/link";
import { Children } from "react";


export default function About() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full bg-black mt-10">
            <div className="md:flex md:flex-row md:gap-26 flex flex-col justify-center gap-10 items-center">
                <div className="flex justify-center items-center">
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
                    <p className="text-center md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a ultricies orci. Pellentesque nibh lorem, dictum sit amet augue sed, malesuada tempus mauris. Nulla nec aliquet arcu. Phasellus eu risus posuere tellus blandit lobortis. In faucibus lacinia sem, et luctus sem convallis eu. Nunc blandit nunc vel ligula consectetur fringilla. Donec neque neque, pharetra sit amet convallis ut, venenatis nec turpis. Nam arcu urna, vestibulum eget sapien quis, finibus aliquam turpis Nunc blandit nunc vel ligula consectetur fringilla. Donec neque neque, pharetra sit amet convallis ut, venenatis nec turpis. Nam arcu urna, vestibulum eget sapien quis, finibus aliquam turpis. Phasellus quis dui mi. Nam at tempus ligula. Vivamus eu ullamcorper enim. Proin aliquam eget metus non mollis. Morbi quis mi sem. Phasellus leo turpis, ornare et sodales et, congue vel lacus.</p>
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