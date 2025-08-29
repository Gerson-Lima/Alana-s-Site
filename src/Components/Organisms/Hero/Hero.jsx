/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import imgHero from "../../../assets/img-hero.webp";
import { IconArrow } from "../../Atoms/Icons/Icons";
import "./Hero.css";

export function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imgHero;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center px-4 pt-20 lg:pt-32 sm:pt-32 hero-bg overflow-x-hidden"
      id="home"
    >
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8 w-full max-w-7xl px-0 sm:px-7 xl:px-0">
        <div className="text-left max-w-xl pb-16">
          <h1
            className="lg:text-4xl sm:text-[18px] md:text-[40px] 2sm:text-[34px] font-primary font-extrabold text-gray-800 mb-3 flex flex-col"
            {...(!isMobile && {
              'data-aos': 'fade-up',
              'data-aos-duration': '1000'
            })}
          >
            <span className="text-[#202020] uppercase">
              Transformando sonhos
            </span>
            <span className="text-secondary uppercase text-right xl:ml-52 mt-2">
              em espaços únicos
            </span>
          </h1>

          <div
            className="lg:w-96 sm:w-52 h-[1.5px] bg-[#202020] mt-4 sm:mt-2"
            {...(!isMobile && {
              'data-aos': 'fade-up',
              'data-aos-duration': '1200'
            })}
          ></div>

          <p
            className="xl:text-[24px] sm:text-[16px] text-[#202020] font-primary mb-6 mt-2 leading-tight"
            {...(!isMobile && {
              'data-aos': 'fade-up',
              'data-aos-duration': '1300'
            })}
          >
            Entre em contato e vamos dar vida&nbsp;
            <br className="hidden md:block" /> 
            ao seu novo ambiente!
          </p>
          <a
            href="#contact"
            className="inline-flex px-6 py-3 bg-secondary text-white font-semibold font-primary rounded-[2px] hover:bg-[#8E5858] transition"
            {...(!isMobile && {
              'data-aos': 'zoom-out-up',
              'data-aos-duration': '1400'
            })}
          >
            Tire suas dúvidas{" "}
            <span
              className="pl-2"
              style={{ position: "relative", top: "2px" }}
            >
              <IconArrow />
            </span>
          </a>
        </div>

        <div
          className="lg:block w-full lg:w-auto"
          {...(!isMobile && {
            'data-aos': 'fade',
            'data-aos-duration': '1400'
          })}
        >
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
