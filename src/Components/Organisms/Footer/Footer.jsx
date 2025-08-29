import { useEffect } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiChevronUp } from 'react-icons/fi';
import Logo from '../../../assets/Logo.svg'; 
import "./Footer.css"

export function Footer() {

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const footer = document.querySelector('footer');
    const elements = document.querySelectorAll('footer [data-aos]');

    if (isMobile) {
      if (footer) {
        footer.removeAttribute('data-aos');
        footer.removeAttribute('data-aos-delay');
        footer.removeAttribute('data-aos-duration');
        footer.removeAttribute('data-aos-offset');
        footer.removeAttribute('data-aos-anchor-placement');
      }

      elements.forEach((el) => {
        el.removeAttribute('data-aos');
        el.removeAttribute('data-aos-delay');
        el.removeAttribute('data-aos-duration');
        el.removeAttribute('data-aos-offset');
        el.removeAttribute('data-aos-anchor-placement');
      });

      if (window.AOS && window.AOS.refresh) {
        window.AOS.refresh();
      }
    }

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile) {
        if (footer) {
          footer.removeAttribute('data-aos');
          footer.removeAttribute('data-aos-delay');
          footer.removeAttribute('data-aos-duration');
          footer.removeAttribute('data-aos-offset');
          footer.removeAttribute('data-aos-anchor-placement');
        }
        elements.forEach((el) => {
          el.removeAttribute('data-aos');
          el.removeAttribute('data-aos-delay');
          el.removeAttribute('data-aos-duration');
          el.removeAttribute('data-aos-offset');
          el.removeAttribute('data-aos-anchor-placement');
        });
        if (window.AOS && window.AOS.refresh) {
          window.AOS.refresh();
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="font-primary relative"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-offset="420"
    >
      {/* TOPO DO FOOTER */}
      <div className="px-6 py-8 lg:px-24 footer-bg">
        <div className="max-w-7xl mx-auto grid gap-8 lg:gap-28 md:grid-cols-1 lg:grid-cols-4">

          {/* LOGO E NOME */}
          <div className="flex justify-center md:justify-center items-center">
            <a href="/">
              <img
                alt="Logo"
                src={Logo}
                className="h-16 md:h-20 lg:h-[95px] w-auto"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translateZ(0)',
                }}
              />
            </a>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="text-center md:text-center lg:text-left">
            <h3 className="text-[#202020] text-xl font-extrabold mb-3 uppercase">Navegação</h3>
            <ul className="grid grid-cols-1 gap-2">
              <li><a href="#home" className="nav-link font-semibold">Início</a></li>
              <li><a href="#steps" className="nav-link font-semibold">Como funciona</a></li>
              <li><a href="#projects" className="nav-link font-semibold">Projetos</a></li>
              <li><a href="#about" className="nav-link font-semibold">Sobre mim</a></li>
              <li><a href="#contact" className="nav-link font-semibold">Contato</a></li>
            </ul>
          </div>

          {/* CONTATOS */}
          <div className="text-center md:text-center lg:text-left">
            <h3 className="text-[#202020] text-xl font-extrabold mb-3 uppercase">Contatos</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:alanamartinsarquitetura@gmail.com" className="contact-link font-semibold text-[#663535] hover:text-[#663535]">
                  alanamartinsarquitetura@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5583998219493"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link text-[#663535] hover:text-[#663535] font-semibold"
                >
                  +55 (83) 99821-9493
                </a>
              </li>
            </ul>
          </div>

          {/* REDES SOCIAIS + BOTÃO VOLTAR AO TOPO */}
          <div className="flex flex-col justify-between items-center lg:items-end md:items-center text-center lg:text-right h-full">
            <div>
              <h3 className="text-[#202020] text-xl font-extrabold mb-3 uppercase">Redes Sociais</h3>
              
               <div className="flex justify-center lg:justify-start space-x-4">
                <a href="https://wa.me/5583998219493" className="social-icon text-[#663535] hover:text-[#4d2727] transition-colors">
                  <FaWhatsapp size={24} />
                </a>
                <a href="https://www.instagram.com/alanamartinsarquiteta/" className="social-icon text-[#663535] hover:text-[#4d2727] transition-colors">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="
                mt-6 flex items-center justify-center
                bg-[#663535] text-white
                hover:bg-[#4d2727]
                transition
                rounded-md p-3 shadow
              "
              aria-label="Voltar ao topo"
            >
              <FiChevronUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="bg-[#663535] font-secondary text-white text-center text-sm py-4">
        Alana Martins Arquitetura © 2025. Todos os direitos reservados.
      </div>
    </footer>
  );
}
