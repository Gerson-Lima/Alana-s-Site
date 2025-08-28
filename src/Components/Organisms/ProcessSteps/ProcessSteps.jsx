import { useEffect } from 'react';
import Steps from '../../Molecules/Steps/Steps';
import { Icon1, Icon2, Icon3, Icon4 } from '../../Atoms/Icons/Icons';

export function ProcessSteps() {

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const elements = document.querySelectorAll('#steps [data-aos]');
    
    if (isMobile) {
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
    <section className="py-12 bg-white scroll-mt-28 overflow-x-hidden" id="steps">
      <div className="max-w-7xl mx-auto space-y-7 p-6 xl:px-0 sm:px-11">
        <h1 className="text-4xl font-primary font-extrabold mb-10 text-[#663535]" data-aos="fade-up" data-aos-delay="200">
          ETAPAS DO PROCESSO
        </h1>

        <div className="xl:flex">
          <div className="w-[7px] bg-[#E0D7D7] mr-5 md:mr-14 self-stretch" data-aos="fade-up" data-aos-delay="200"></div>

          <div className="flex flex-wrap gap-y-10 gap-x-10 xl:gap-x-16 items-center justify-center" data-aos="fade-up" data-aos-delay="200">
            <Steps
              icon={<Icon1 />}
              title="Reunião de Coleta de Dados"
              subtitle="Momento em que nos conhecemos melhor e você me conta tudo o que deseja para o seu projeto"
            />

            <Steps
              icon={<Icon2 />}
              title="Apresentação do Projeto"
              subtitle="Seu projeto ganhará forma e você verá imagens 3D de fácil compreensão."
            />

            <Steps
              icon={<Icon3 />}
              title="Alterações e Refinos"
              subtitle="Caso deseje, poderemos fazer alterações e correções no projeto."
            />

            <Steps
              icon={<Icon4 />}
              title="Projeto Entregue e Detalhado"
              subtitle="Entrega para que os profissionais da obra saibam exatamente o que fazer."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
