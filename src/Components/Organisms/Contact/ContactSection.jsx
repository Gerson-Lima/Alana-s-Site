import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_a6uy62p',
        'template_zpc8fno',
        form.current,
        'PncutOC2TKFKaQWV8'
      )
      .then(
        () => {
          toast.success('Mensagem enviada com sucesso!');
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error('Erro ao enviar:', error);
          toast.error('Ocorreu um erro ao enviar. Tente novamente.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-white py-16 px-6 lg:px-24 font-primary scroll-mt-36">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* LADO ESQUERDO */}
        <div className="flex flex-col justify-center">
          <div className="max-w-md w-full space-y-6">
            <h2 className="text-4xl font-bold text-[#663535] uppercase">Contato</h2>
            <p className="text-3xl font-medium text-[#202020]">
              Transforme seus espaços com a gente! Entre em contato e faça seu projeto ganhar vida.
            </p>

            <div className="flex flex-col space-y-5 text-[#202020] text-xl">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-6 w-6 text-[#663535]" />
                <span>alanamartinsarquitetura@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-6 w-6 text-[#663535]" />
                <span>+55 (83) 99821-9493</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-6 w-6 text-[#663535]" />
                <span>Todo território nacional.</span>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO - FORMULÁRIO */}
        <div className="relative bg-[#F3E7D9] rounded-[4px] p-8 overflow-visible">
          <span className="hidden lg:block absolute -left-7 top-0 h-32 mt-8 w-7 bg-[#663535] rounded-tl-[4px] rounded-bl-[4px]"></span>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-[#663535] mb-1 font-semibold">Nome</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ex.: Maria"
                  required
                  className="border border-[#663535] px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#663535]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[#663535] mb-1 font-semibold">Sobrenome</label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Ex.: Mendonça"
                  required
                  className="border border-[#663535] px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#663535]"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-[#663535] mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Ex.: arquitetura@gmail.com"
                required
                className="border border-[#663535] px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#663535]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#663535] mb-1 font-semibold">Mensagem</label>
              <textarea
                name="message"
                rows={4}
                required
                className="border border-[#663535] px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#663535]"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#663535] text-white px-6 py-2 font-semibold rounded transition-colors flex items-center ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4d2727]'
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar
                    <span className="pl-2" style={{ position: "relative", top: "2.5px" }}>
                      &gt;
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  )
}
