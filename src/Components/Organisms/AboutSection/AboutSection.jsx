import Logo from '../../../assets/Logo.svg';
import './AboutSection.css'

export function AboutSection() {
  return (
    <section className="about-bg">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 flex flex-col lg:flex-row items-start gap-6">
        
        {/* Barra vertical à esquerda */}
        <div className="w-[3px] bg-[#202020] mr-5 md:mr-14 self-stretch my-16"></div>


        {/* Grid de 3 colunas */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA 1 */}
          <div className="flex flex-col items-start justify-center">
            <a className="mb-6">
              <img
                alt="Logo"
                src={Logo}
                className="h-12 md:h-24 w-auto mb-4"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translateZ(0)',
                }}
              />
            </a>

            <h2 className="text-xl md:text-3xl font-primary font-semibold text-[#472D2D] mb-10 !leading-normal">
              ARQUITETA,<br />
              URBANISTA &<br />
              DESIGNER DE INTERIORES.
            </h2>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-secondary text-white font-semibold font-primary rounded-[2px] hover:bg-[#8E5858] transition"
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
          <div className="flex justify-center lg:self-end mr-20">
            <img
              src="/about-me.png"
              alt="Alana Martins"
              className="max-w-sm w-full"
            />
          </div>

          {/* COLUNA 3 */}
          <div className="flex flex-col items-start text-left justify-center">
            <h3 className="text-2xl md:text-3xl font-primary font-bold text-[#472D2D] mb-4">
              SOBRE MIM
            </h3>
            <p className="text-[#472D2D] text-2xl leading-relaxed max-w-lg">
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
