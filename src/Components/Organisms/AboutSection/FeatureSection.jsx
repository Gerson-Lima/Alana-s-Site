import { useEffect } from "react";
import { IconCustom1, IconCustom2, IconCustom3 } from "../../Atoms/Icons/Icons";
import './FeatureSection.css'

export function FeatureSection() {

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const section = document.querySelector('.feature-bg');
    const elements = document.querySelectorAll('.feature-bg [data-aos]');

    if (isMobile) {

      if (section) {
        section.removeAttribute('data-aos');
        section.removeAttribute('data-aos-delay');
        section.removeAttribute('data-aos-duration');
        section.removeAttribute('data-aos-offset');
        section.removeAttribute('data-aos-anchor-placement');
      }

      // Remove dos filhos
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
      } else {
        // window.location.reload();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="p-6 sm:p-10 lg:p-14 feature-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
        
        {/* Item 1 */}
        <div
          className="flex flex-col items-center text-center border border-[#F3E7D9] p-20 gap-5"
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-anchor-placement="top-center"
        >
          <IconCustom2 className="h-20 w-20 mb-4" />
          <p className="text-[#F3E7D9] text-2xl font-semibold font-primary">Padrão de excelência</p>
        </div>

        {/* Item 2 */}
        <div
          className="flex flex-col items-center text-center md:border-y md:border-x-0 sm:border-x sm:boder-y-0 border-[#F3E7D9] p-20 gap-5"
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-anchor-placement="top-center"
        >
          <IconCustom1 className="h-20 w-20 mb-4" />
          <p className="text-[#F3E7D9] text-2xl font-semibold font-primary">Design sofisticado</p>
        </div>

        {/* Item 3 */}
        <div
          className="flex flex-col items-center text-center border border-[#F3E7D9] p-20 gap-5"
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-anchor-placement="top-center"
        >
          <IconCustom3 className="h-20 w-20 mb-4" />
          <p className="text-[#F3E7D9] text-2xl font-semibold font-primary">Praticidade e Inovação</p>
        </div>

      </div>
    </section>
  );
}
