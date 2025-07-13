/* eslint-disable react/prop-types */
export default function Steps({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-16 py-4 max-w-xl">
        
      {/* SVG ou ícone */}
      <div className="w-28 h-28 flex items-center justify-center text-gray-300">
        {icon}
      </div>

      {/* Texto */}
      <div className="flex flex-col leading-[3%] w-2/3">
        <h2 className="text-3xl font-semibold text-[#663535] mb-2">{title}</h2>
        <p className="text-2xl font-normal text-[#663535]">{subtitle}</p>
      </div>
    </div>
  );
}
