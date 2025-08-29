import { useEffect } from 'react';
import Logo from '../../../assets/Logo.svg';
import './AboutSection.css'

export function AboutSection() {

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const elements = document.querySelectorAll('#about [data-aos]');

    if (isMobile) {
      elements.forEach((el) => {
        el.removeAttribute('data-aos');
        el.removeAttribute('data-aos-offset');
        el.removeAttribute('data-aos-duration');
        el.removeAttribute('data-aos-delay');
        el.removeAttribute('data-aos-anchor-placement');
      });

      if (window.AOS && window.AOS.refresh) {
        window.AOS.refresh();
      }
    }

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile) {
        elements.forEach((el) => {
          el.removeAttribute('data-aos');
          el.removeAttribute('data-aos-offset');
          el.removeAttribute('data-aos-duration');
          el.removeAttribute('data-aos-delay');
          el.removeAttribute('data-aos-anchor-placement');
        });
        if (window.AOS && window.AOS.refresh) {
          window.AOS.refresh();
        }
      } else {
        // window.location.reload();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="about-bg scroll-mt-28" id="about">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 sm:mt-16 md:mt-1">

        <div className="hidden lg:flex flex-row items-center gap-6">
          
          {/* Barra vertical */}
          <div
            className="w-[3px] bg-[#202020] mr-14 self-stretch my-16"
            data-aos="fade-up"
            data-aos-offset="950"
          ></div>

          {/* Grid 3 colunas */}
          <div className="flex-1 grid grid-cols-3 gap-12">
            
            {/* COLUNA 1 */}
            <div
              className="flex flex-col items-start justify-center"
              data-aos="fade-up"
              data-aos-offset="950"
            >
              <a className="mb-4 self-start">
                <img
                  alt="Logo"
                  src={Logo}
                  className="h-24 w-auto mb-4"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    transform: 'translateZ(0)',
                  }}
                />
              </a>

              <h2 className="text-3xl font-primary font-semibold text-[#472D2D] mb-8 leading-normal text-start">
                ARQUITETURA,<br />
                INTERIORES &<br />
                CONSULTORIA.
              </h2>

              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-secondary text-white font-semibold font-primary rounded-[2px] hover:bg-[#8E5858] transition"
              >
                Saiba mais{" "}
                <span className="pl-2" style={{ position: "relative", top: "2px" }}>
                  &gt;
                </span>
              </a>
            </div>

            {/* COLUNA 2 */}
            <div className="flex justify-center self-end mr-20">
              <img
                src="/about-me.webp"
                alt="Alana Martins"
                className="max-w-sm w-full"
                data-aos="fade"
                data-aos-offset="950" 
              />
            </div>

            {/* COLUNA 3 */}
            <div
              className="flex flex-col items-start text-left justify-center"
              data-aos="fade-up"
              data-aos-offset="950"
            >
              <h3 className="text-3xl font-primary font-bold text-[#472D2D] mb-4">
                SOBRE A ARQUITETA
              </h3>
              <p className="text-[#472D2D] text-2xl leading-relaxed max-w-lg">
                Sou Alana Martins, arquiteta e urbanista formada pela UFERSA, com experiência em projetos residenciais e comerciais que unem funcionalidade e estética. Meu trabalho busca refletir a personalidade e os objetivos de cada cliente, criando espaços confortáveis e cheios de identidade.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:hidden items-center gap-8 sm:pt-10">
          
          {/* Barra vertical */}
          <div
            className="hidden lg:block w-[3px] bg-[#202020] mr-14 self-stretch my-16"
            data-aos="fade-up"
            data-aos-offset="950"
          ></div>

          {/* Logo */}
          <a>
            <img
              alt="Logo"
              src={Logo}
              className="h-20 w-auto"
              data-aos="fade-up"
              data-aos-offset="950"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                transform: 'translateZ(0)',
              }}
            />
          </a>

          {/* Título */}
          <h2
            className="text-2xl font-primary font-semibold text-[#472D2D] leading-normal text-center"
            data-aos="fade-up"
            data-aos-offset="300"
          >
            ARQUITETURA,<br />
            INTERIORES &<br />
            CONSULTORIA.
          </h2>

          {/* SOBRE MIM */}
          <div
            className="text-center max-w-lg"
            data-aos="fade-up"
            data-aos-offset="950"
          >
            <h3 className="text-2xl font-primary font-bold text-[#472D2D] mb-4">
              SOBRE A ARQUITETA
            </h3>
            <p className="text-[#472D2D] text-xl leading-relaxed mb-6">
              Sou Alana Martins, arquiteta e urbanista formada pela UFERSA, com experiência em projetos residenciais e comerciais que unem funcionalidade e estética. Meu trabalho busca refletir a personalidade e os objetivos de cada cliente, criando espaços confortáveis e cheios de identidade.
            </p>
          </div>

          {/* Botão */}
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-secondary text-white font-semibold font-primary rounded-[2px] hover:bg-[#8E5858] transition"
            data-aos="zoom-out-up"
            data-aos-offset="950"
          >
            Saiba mais{" "}
            <span className="pl-2" style={{ position: "relative", top: "2px" }}>
              &gt;
            </span>
          </a>

          {/* Imagem */}
          <div className="flex justify-center">
            <img
              src="/about-me.webp"
              alt="Alana Martins"
              className="max-w-sm w-full"
              data-aos="fade"
              data-aos-offset="210"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
