import React from "react";
import imgHero from "../../../assets/img-hero.png";
import bgHero from "../../../assets/bg-hero.png";
import "./Hero.css";

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-4 pt-20 lg:pt-32 sm:pt-32 hero-bg">
      {/* Container para alinhar com o header */}
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8 w-full lg:max-w-7xl sm:px-7">
            {/* Texto à esquerda */}
            <div className="text-left max-w-xl pb-16">
            <h1 className="lg:text-4xl sm:text-[18px] md:text-[40px] 2sm:text-[34px] font-primary font-extrabold text-gray-800 mb-3 flex flex-col">
                <span className="text-[#202020] uppercase">
                Transformando sonhos
                </span>
                <span className="text-secondary uppercase text-right xl:ml-52 mt-2">
                em espaços únicos
                </span>
            </h1>

            <div className="lg:w-96 sm:w-52 h-[1.5px] bg-[#202020] mt-4 sm:mt-2"></div>

            <p className="xl:text-[24px] sm:text-[16px] text-[#202020] font-primary mb-6 mt-2 leading-tight">
                Entre em contato e vamos dar vida
                <br className="hidden md:block" /> 
                ao seu novo ambiente!
            </p>
            <a
                href="#services"
                className="inline-block px-6 py-3 bg-secondary text-white font-semibold font-primary rounded-[2px] hover:bg-[#8E5858] transition"
            >
                Tire suas dúvidas{" "}
                <span
                className="pl-2"
                style={{ position: "relative", top: "3.1px" }}
                >
                {" "}
                &gt;{" "}
                </span>
            </a>
            </div>

            {/* Imagem à direita */}
            <div className="lg:block w-full lg:w-auto">
            <img
                src={imgHero}
                alt="Imagem hero"
                className="w-auto lg:max-w-lg object-cover"
            />
            </div>
        </div>
    </section>
  );
}
