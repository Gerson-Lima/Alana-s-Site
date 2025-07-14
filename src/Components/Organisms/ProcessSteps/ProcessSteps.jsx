import Steps from '../../Molecules/Steps/steps.jsx';
import { Icon1, Icon2, Icon3, Icon4 } from '../../Atoms/Icons/Icons';


export function ProcessSteps() {
  return (
    <section className="py-12 bg-white scroll-mt-28" id="steps">
      <div className="max-w-7xl mx-auto space-y-7 p-6 xl:px-0 sm:px-11">
        <h1 className="text-4xl font-primary font-extrabold mb-10 text-[#663535]">ETAPAS DO PROCESSO</h1>

        <div className="xl:flex">
      
          <div className="w-[7px] bg-[#E0D7D7] mr-5 md:mr-14 self-stretch"></div>

            <div className="flex flex-wrap gap-10 items-center justify-center">
              <Steps
                icon={<Icon1 />}
                title="Reunião de Coleta de Dados"
                subtitle="Momento que a gente se conhece melhor, e você me conta tudo que espera receber."
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
