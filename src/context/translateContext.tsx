"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  pt: {
    greeting: "Olá",
    introduction: "Me chamo",
    developer: "Desenvolvedor de Software e Técnico de Robótica",
    buttonWork: "Conheça o meu trabalho",
    modalTitle: "Qual é o seu nome?",
    modalPlaceholder: "Digite seu nome",
    modalButton: "Continuar",
    p1: "Tenho 19 anos e atualmente curso Análise e Desenvolvimento de Sistemas. Meu primeiro contato real com programação aconteceu em 2022, quando comecei a estudar Python. No ano seguinte, me aprofundei em JavaScript, HTML e CSS, e também fui vice-campeão mundial de robótica, uma experiência que consolidou meu interesse por tecnologia e inovação.",
    p2: "Em 2024, participei do programa ONE, uma iniciativa da Alura em parceria com a Oracle, que ampliou significativamente minha visão sobre desenvolvimento de software. Após essa experiência, consegui meus primeiros projetos freelance, nos quais pude aplicar meus conhecimentos e ganhar experiência profissional prática com programação.",
    p3: "Hoje, atuo como técnico de robótica no IEMA, participo do programa Jovem Tech e integro o programa Bolsa Futuro Digital da Softex PE. Possuo habilidades em NextJS, Tailwind, HTML, CSS, JavaScript e Python, e atualmente estou em processo de aprendizagem de Java. Apaixonado por tecnologia, busco transformar ideias em soluções digitais inovadoras e de impacto.",
    tools: "Habilidades",
    projects: "Projeto",
    t1: "Sistema Financeiro IEADEL",
    d1:"Projeto colaborativo de um sistema voltado para a gestão financeira da minha igreja, com foco em simplicidade e praticidade. A plataforma permite registrar dízimos, ofertas e despesas, além de gerar relatórios detalhados que facilitam o acompanhamento das finanças. Com uma interface intuitiva, o sistema garante controle eficiente e transparente das contribuições e gastos.",
    d2: "Landing page desenvolvida para o restaurante delivery Divino Pote, com foco em atrair clientes e facilitar o processo de pedidos. O site apresenta um design simples e objetivo, direcionando os usuários diretamente para o WhatsApp do restaurante, garantindo praticidade e agilidade no atendimento.",
    t3: "Formulário de Reboque",
    d3: "Projeto freelance desenvolvido para otimizar o processo de registro de atendimentos de reboque. O formulário permite que diferentes usuários, por exempl: o rebocador, a equipe administrativa e até o cliente, preencham informações relevantes de maneira prática. Também é possível fazer upload de fotos relacionadas ao atendimento. Todas as informações são armazenadas no Firebase, garantindo segurança, organização e facilidade de acesso. O projeto proporciona mais eficiência na comunicação entre equipes e clientes, tornando o processo de atendimento mais ágil e confiável.",
    t4: "Gerador de QR CODE",
    d4:"Esse foi um dos meus primeiros projetos na programação, criado com a intenção de colocar em prática o que eu estava aprendendo. A ideia era simples: digitar um texto ou link e transformar em um QR Code de forma instantânea. Para isso, utilizei uma API de geração de QR Codes, que tornou o processo rápido e funcional. Foi um exercício importante para entender melhor como integrar serviços externos e transformar teoria em algo que realmente funciona.",
    demo: "Ver demo",
    repo: "Repositório",
    mprojects: "Veja mais projetos",
    contact: "Entre em contato",
    desccontact:"Vamos fechar um projeto juntos? Minha caixa de entrada está sempre aberta. Se você tiver alguma dúvida ou só quiser dizer oi, prometo responder o mais rápido possível!!",
    cname:"Seu nome",
    cemail:"Seu email",
    cmessage:"Sua mensagem",
    send: "Enviar",
    sending: "Enviando...",
    cop: "Markus Danyllo. Todos os direitos reservados.",
    aboutbar: "Sobre",
    projectsbar:"Projetos",
    contactbar:"Contato"
  },
  en: {
    greeting: "Hi",
    introduction: "My name is",
    developer: "Software Developer & Robotics Technician",
    buttonWork: "Check my work",
    modalTitle: "What's your name?",
    modalPlaceholder: "Enter your name",
    modalButton: "Continue",
    p1: "I am 19 years old and currently studying Systems Analysis and Development. My first real contact with programming happened in 2022, when I started learning Python. The following year, I deepened my knowledge of JavaScript, HTML, and CSS, and I also became the vice-world champion in robotics—an experience that solidified my interest in technology and innovation.",
    p2: "In 2024, I participated in the ONE program, an initiative by Alura in partnership with Oracle, which significantly broadened my perspective on software development. After that experience, I landed my first freelance projects, where I was able to apply my knowledge and gain practical professional experience in programming.",
    p3: "Today, I work as a robotics technician at IEMA, participate in the Jovem Tech program, and am part of the Bolsa Futuro Digital program at Softex PE. I have skills in NextJS, Tailwind, HTML, CSS, JavaScript, and Python, and I am currently learning Java. Passionate about technology, I strive to transform ideas into innovative and impactful digital solutions.",
    tools: "Skills",
    projects: "Projects",
    t1: "IEADEL Financial System",
    d1: "Collaborative project for a financial management system for my church, focused on simplicity and practicality. The platform allows recording tithes, offerings, and expenses, as well as generating detailed reports that make it easier to track finances. With an intuitive interface, the system ensures efficient and transparent control of contributions and expenditures.",
    d2: "Landing page developed for the Divino Pote delivery restaurant, focused on attracting customers and streamlining the ordering process. The site features a simple and straightforward design, directing users straight to the restaurant's WhatsApp, ensuring convenience and quick service.",
    t3: "Towing Form",
    d3: "Freelance project developed to optimize the tow service registration process. The form allows different users—such as the tow operator, the administrative team, and even the client—to enter relevant information easily. It also supports uploading photos related to the service. All data is stored in Firebase, ensuring security, organization, and easy access. The project improves communication between teams and clients, making the service process faster and more reliable.",
    t4: "QR Code Generator",
    d4: "This was one of my first programming projects, created with the goal of putting into practice what I was learning. The idea was simple: type a text or link and instantly generate a QR Code. To achieve this, I used a QR Code generation API, which made the process fast and functional. It was an important exercise for better understanding how to integrate external services and turn theory into something that actually works.",
    demo: "View demo",
    repo: "Repository",
    mprojects: "View more projects",
    contact: "Get in touch",
    desccontact:"Let’s build something together! My inbox is always open. Whether you have a question or just want to say hello, I’ll get back to you as soon as I can.",
    cname:"Your name",
    cemail:"Your email",
    cmessage:"Your message",
    send:"Send",
    sending: "Sending form...",
    cop: "Markus Danyllo. All rights reserved.",
    aboutbar: "About",
    projectsbar: "Projects",
    contactbar:"Contact"
  },
};

type Lang = "pt" | "en";

type TranslationContextType = {
  lang: Lang;
  t: typeof translations["pt"];
  toggleLang: () => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  function toggleLang() {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  }

  const value: TranslationContextType = {
    lang,
    t: translations[lang],
    toggleLang,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) throw new Error("useTranslation must be used inside TranslationProvider");
  return context;
}
