import { IconCustom1, IconCustom2, IconCustom3 } from "../../Atoms/Icons/Icons";
import './FeatureSection.css'

export function FeatureSection() {
  return (
    <section className="p-6 sm:p-10 lg:p-14 feature-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center border border-[#F3E7D9] p-20 gap-5">
          <IconCustom2 className="h-20 w-20 mb-4" />
          <p className="text-[#F3E7D9] text-2xl font-semibold font-primary">Padrão de excelência</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center md:border-y md:border-x-0 sm:border-x sm:boder-y-0 border-[#F3E7D9] p-20 gap-5">
          <IconCustom1 className="h-20 w-20 mb-4" />
          <p className="text-[#F3E7D9] text-2xl font-semibold font-primary">Design sofisticado</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center border border-[#F3E7D9] p-20 gap-5">
          <IconCustom3 className="h-20 w-20 mb-4" />
          <p className="text-[#F3E7D9] text-2xl font-semibold font-primary">Detalhe e inovação</p>
        </div>

      </div>
    </section>
  );
}
