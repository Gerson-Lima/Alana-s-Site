import { useEffect } from 'react';
import { Dialog } from '@headlessui/react';

/* eslint-disable react/prop-types */
export function ImageModal({ images, index, onClose, setIndex }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [images, setIndex, onClose]);

  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fundo clicável para fechar */}
      <button
        onClick={onClose}
        className="fixed inset-0 bg-black/90 cursor-default"
        aria-label="Fechar modal clicando no fundo"
      />

      <div className="relative z-50 max-w-6xl w-full mx-auto p-4 flex flex-col items-center">
        {/* Botão Fechar fixo */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-50 sm:pt-20"
        >
          ✕
        </button>

        {/* Container fixo para a imagem e os botões prev/next */}
        <div className="relative w-full flex justify-center items-center" style={{ height: '80vh', maxWidth: '100%' }}>
          <div className="relative h-full w-full max-w-4xl flex justify-center items-center bg-transparent rounded">
            <img
              src={images[index]}
              alt="Imagem do Projeto"
              className="max-h-full max-w-full object-contain rounded"
            />

            {/* Botão Prev */}
            <button
              onClick={() => setIndex((index - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl p-2 rounded-full"
            >
              ‹
            </button>

            {/* Botão Next */}
            <button
              onClick={() => setIndex((index + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl p-2 rounded-full"
            >
              ›
            </button>
          </div>
        </div>

        {/* Filmstrip de miniaturas centralizada fixa */}
        <div className="mt-4 w-full flex justify-center gap-2 flex-wrap px-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`border-2 ${i === index ? 'border-white' : 'border-transparent'} rounded hover:border-gray-300`}
            >
              <img
                src={img}
                alt={`Miniatura ${i}`}
                className="h-20 object-cover rounded"
              />
            </button>
          ))}
        </div>
      </div>
    </Dialog>
  );
}
