import Logo from '../../../assets/Logo.svg';
import './AboutSection.css'

export function AboutSection() {
  return (
    <section className="about-bg">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 flex flex-col lg:flex-row items-center gap-6 pt-10 sm:mt-16">
        
        {/* Barra vertical à esquerda */}
        <div className="sm:hidden lg:block w-[3px] bg-[#202020] mr-5 lg:mr-14 self-stretch my-16"></div>

        {/* Container flex-col para sm+md, grid só em lg */}
        <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-12">
          
          {/* COLUNA 1 */}
          <div className="flex flex-col items-start justify-center">
            <a className="mb-6 order-1 lg:order-none self-center lg:self-start">
              <img
                alt="Logo"
                src={Logo}
                className="h-20 lg:h-24 w-auto mb-0 lg:mb-4"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translateZ(0)',
                }}
              />
            </a>

            <h2 className="text-2xl lg:text-3xl font-primary font-semibold text-[#472D2D] mb-4 lg:mb-10 leading-normal order-2 lg:order-none text-center lg:text-start self-center lg:self-start">
              ARQUITETA,<br />
              URBANISTA &<br />
              DESIGNER DE INTERIORES.
            </h2>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-secondary text-white font-semibold font-primary rounded-[2px] hover:bg-[#8E5858] transition order-3 lg:order-none self-center lg:self-start"
            >
              Tire suas dúvidas{" "}
              <span
                className="pl-2"
                style={{ position: "relative", top: "2px" }}
              >
                &gt;
              </span>
            </a>
          </div>

          {/* COLUNA 2 */}
          <div className="flex justify-center lg:self-end order-6 lg:order-none mr-0 lg:mr-20">
            <img
              src="/about-me.png"
              alt="Alana Martins"
              className="max-w-sm w-full"
            />
          </div>

          {/* COLUNA 3 */}
          <div className="flex flex-col items-start text-left justify-center">
            <h3 className="text-2xl lg:text-3xl font-primary font-bold text-[#472D2D] mb-4 order-4 lg:order-none">
              SOBRE MIM
            </h3>
            <p className="text-[#472D2D] text-2xl leading-relaxed max-w-lg order-5 lg:order-none">
              Sou Alana Martins, Arquiteta formada pela UFERSA,
              especializada em projetos residenciais e comerciais que
              aliam funcionalidade e estética. Meu trabalho busca refletir a
              personalidade e os objetivos de cada cliente, criando espaços
              confortáveis e cheios de identidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
