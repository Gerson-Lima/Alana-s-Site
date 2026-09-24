import { useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';

export function LocationSection() {

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const section = document.getElementById('location');
    const elements = document.querySelectorAll('#location [data-aos]');

    if (isMobile) {
      if (section) {
        section.removeAttribute('data-aos');
        section.removeAttribute('data-aos-delay');
        section.removeAttribute('data-aos-duration');
        section.removeAttribute('data-aos-offset');
        section.removeAttribute('data-aos-anchor-placement');
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
        if (section) {
          section.removeAttribute('data-aos');
          section.removeAttribute('data-aos-delay');
          section.removeAttribute('data-aos-duration');
          section.removeAttribute('data-aos-offset');
          section.removeAttribute('data-aos-anchor-placement');
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

  return (
    <section id="location" className="bg-[#F3E7D9] pt-16 font-primary scroll-mt-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div
          className="text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-[22px] lg:text-4xl sm:text-[22px] font-bold text-[#663535] uppercase">
            Catolé do Rocha, Paraíba
          </h2>
          <p className="text-lg sm:text-xl text-[#472D2D] mt-2">
            Empresarial Zé Costa - R. Floriano Peixoto, n<sup className="text-[0.65em]">o</sup>222 - Sl 203 - 2<sup className="text-[0.65em]">o</sup> andar - Centro, Catolé do Rocha - PB, 58884-000
          </p>
        </div>
      </div>

      <div
        className="relative"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <iframe
          src="https://maps.google.com/maps?q=Alana+Martins+Arquitetura&z=17&output=embed"
          className="w-full h-[420px] sm:h-[460px] lg:h-[540px] block"
          style={{
            border: 0,
            // filter: 'grayscale(1) sepia(3.5) hue-rotate(308deg) saturate(1.3) brightness(0.87) contrast(1.2)',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do escritório - Alana Martins Arquitetura"
        ></iframe>

        <div
          className="absolute top-0 left-0 right-0 h-8 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #F3E7D9 0%, rgba(243,231,217,0) 100%)' }}
          aria-hidden="true"
        ></div>

        <div className="hidden md:block absolute left-2 bottom-2 max-w-sm bg-[#663535] text-white rounded-[4px] shadow-lg p-6">
          <h3 className="font-bold uppercase text-lg mb-2">Venha nos conhecer</h3>
          <p className="text-[#F3E7D9] text-base leading-relaxed">
            Visite nosso escritório em Catolé do Rocha - PB, ou nos acompanhe de perto pelo instagram.
          </p>
          <a
            href="https://www.instagram.com/alanamartinsarquiteta/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 text-sm font-semibold hover:text-[#F3E7D9] transition-colors"
          >
            <FaInstagram className="w-[18px] h-[18px]" />
            @alanamartinsarquiteta
          </a>
        </div>
      </div>
    </section>
  );
}
