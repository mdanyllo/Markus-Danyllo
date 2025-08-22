"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Projects() {
    return(
        <div id="projetos" className="w-full md:scroll-mt-26 scroll-mt-26">
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-3xl md:text-4xl mb-10">Projetos</h1>
                <div className="flex flex-col md:gap-40 mt-10 gap-24 mb-6 md:mt-10 ">

                    {/*Projeto um*/}
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
                            Landing page desenvolvida para o restaurante delivery Divino Pote, com foco em atrair clientes e facilitar o processo de pedidos. O site apresenta um design simples e objetivo, direcionando os usuários diretamente para o WhatsApp do restaurante, garantindo praticidade e agilidade no atendimento.
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
                            <h1 className="md:text-3xl text-2xl mb-2">Formulário de Reboque</h1>
                            <p className="md:text-lg font-medium text-center md:text-left leading-relaxed break-words w-86">
                            Projeto freelance desenvolvido para otimizar o processo de registro de atendimentos de reboque. O formulário permite que diferentes usuários, por exempl: o rebocador, a equipe administrativa e até o cliente, preencham informações relevantes de maneira prática. Também é possível fazer upload de fotos relacionadas ao atendimento. Todas as informações são armazenadas no Firebase, garantindo segurança, organização e facilidade de acesso. O projeto proporciona mais eficiência na comunicação entre equipes e clientes, tornando o processo de atendimento mais ágil e confiável.
                            </p>
                            <div className="flex gap-4 mt-10">
                                <Link href="https://qr-codes-generator-chi.vercel.app/" className="text-white bg-black p-2 rounded-sm">
                                    Ver demo
                                </Link>
                                <Link href="https://github.com/mdanyllo/Gerador-de-QR-Code" className="text-white bg-black p-2 rounded-sm">
                                    Repositório
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*Projeto três*/}
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
                            <h1 className="md:text-3xl text-2xl mb-2">Gerador de QR Code</h1>
                            <p className="md:text-lg font-medium text-center md:text-left leading-relaxed break-words w-86">
                            Esse foi um dos meus primeiros projetos na programação, criado com a intenção de colocar em prática o que eu estava aprendendo. A ideia era simples: digitar um texto ou link e transformar em um QR Code de forma instantânea. Para isso, utilizei uma API de geração de QR Codes, que tornou o processo rápido e funcional. Foi um exercício importante para entender melhor como integrar serviços externos e transformar teoria em algo que realmente funciona.
                            </p>
                            <div className="flex gap-4 mt-10">
                                <Link href="https://qr-codes-generator-chi.vercel.app/" className="text-white bg-black p-2 rounded-sm">
                                    Ver demo
                                </Link>
                                <Link href="https://github.com/mdanyllo/Gerador-de-QR-Code" className="text-white bg-black p-2 rounded-sm">
                                    Repositório
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/*Projeto quatro*/}
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
                            <h1 className="md:text-3xl text-2xl mb-2">Gerenciador de Feedbacks - JT</h1>
                            <p className="md:text-lg md:text-left font-medium text-center leading-relaxed break-words w-86">
                            Projeto colaborativo ainda em desenvolvimento, criado para automatizar o registro de feedbacks durante os contra-turnos do programa Jovem Tech da. Antes, as observações eram feitas manualmente em cadernos; agora, o sistema permite que instrutores, coordenadores e participantes registrem comportamentos de forma prática e organizada, tornando a avaliação mais rápida, confiável e acessível
                            </p>
                            <div className="flex gap-4 mt-10">
                                <Link href="https://deploy-teste-one.vercel.app/" className="text-white bg-black p-2 rounded-sm">
                                    Ver demo
                                </Link>
                                <Link href="https://github.com/mdanyllo/DeployTeste" className="text-white bg-black p-2 rounded-sm">
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