import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const PERIOD_MS = 15000;   // intervalo entre tremidas
const SHAKE_MS  = 900;     // duração da tremida

export function WhatsAppButton() {
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    // respeita usuários que preferem menos animação
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let timeoutId = null;

    const triggerShake = () => {
      setShaking(true);
      timeoutId = setTimeout(() => setShaking(false), SHAKE_MS);
    };

    // dispara a primeira tremida (se não quiser, só remover essa linha)
    triggerShake();

    const intervalId = setInterval(triggerShake, PERIOD_MS);

    return () => {
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes btn-shake {
          0%   { transform: translate3d(0,0,0) rotate(0deg); }
          10%  { transform: translate3d(-4px,0,0) rotate(-2deg); }
          20%  { transform: translate3d(4px,0,0) rotate(2deg); }
          30%  { transform: translate3d(-2px,0,0) rotate(-2deg); }
          40%  { transform: translate3d(2px,0,0) rotate(2deg); }
          50%  { transform: translate3d(-1px,0,0) rotate(-1deg); }
          60%  { transform: translate3d(1px,0,0) rotate(1deg); }
          70%  { transform: translate3d(-1px,0,0) rotate(-1deg); }
          80%  { transform: translate3d(1px,0,0) rotate(1deg); }
          100% { transform: translate3d(0,0,0) rotate(0deg); }
        }
        .shake {
          animation: btn-shake ${SHAKE_MS}ms ease-in-out both;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .shake { animation: none !important; }
        }
      `}</style>

      <a
        href="https://wa.me/5583998219493"
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "fixed bottom-5 right-5",
          "bg-green-500 hover:bg-green-600",
          "text-white rounded-full shadow-lg",
          "p-4 z-50 transition-transform duration-300",
          shaking ? "shake" : ""
        ].join(" ")}
        aria-label="Fale conosco no WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}
