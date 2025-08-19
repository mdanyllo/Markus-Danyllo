import Image from "next/image";
import Link from "next/link";
import { Children } from "react";


export default function About() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full bg-black mt-10">
            <div className="flex justify-center gap-26">
                <div className="flex justify-center items-center">
                <Image
                    src="/about.jpeg"
                    alt="Markus falando no microfone"
                    width={1000}       // largura máxima da imagem
                    height={800}      // altura proporcional à largura
                    className="w-50 mt-20 sm:w-64 md:w-110  hover:scale-105 transition-transform duration-500 object-cover"
                />
                </div>
                <div className="flex flex-col gap-2 mt-14 text-white w-1/3">
                    <p className="text-sm">Desenvolvedor de Software e Técnico de Robótica</p>
                    <h1 className="text-3xl mb-4">Markus Danyllo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a ultricies orci. Pellentesque nibh lorem, dictum sit amet augue sed, malesuada tempus mauris. Nulla nec aliquet arcu. Phasellus eu risus posuere tellus blandit lobortis. In faucibus lacinia sem, et luctus sem convallis eu. Nunc blandit nunc vel ligula consectetur fringilla. Donec neque neque, pharetra sit amet convallis ut, venenatis nec turpis. Nam arcu urna, vestibulum eget sapien quis, finibus aliquam turpis Nunc blandit nunc vel ligula consectetur fringilla. Donec neque neque, pharetra sit amet convallis ut, venenatis nec turpis. Nam arcu urna, vestibulum eget sapien quis, finibus aliquam turpis. Phasellus quis dui mi. Nam at tempus ligula. Vivamus eu ullamcorper enim. Proin aliquam eget metus non mollis. Morbi quis mi sem. Phasellus leo turpis, ornare et sodales et, congue vel lacus.</p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-4xl">Habilidades</h1>
                <div>
                    {/*Svgs das Habilidades*/}
                </div>
            </div>
        </div>
    )
}