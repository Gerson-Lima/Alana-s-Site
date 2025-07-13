import { useEffect } from 'react';
import { Dialog } from '@headlessui/react';

/* eslint-disable react/prop-types */
export function ImageModal({ images, index, onClose, setIndex }) {
    console.log('ImageModal props:', { images, index, onClose, setIndex });

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
      <div className="fixed inset-0 bg-black/90" />

      <div className="relative z-50 max-w-4xl w-full mx-auto p-4 flex flex-col items-center">
        <img
          src={images[index]}
          alt="Imagens de Projetos"
          className="max-h-[80vh] object-cover shadow-lg"
        />

        <div className="mt-4 flex justify-between w-full max-w-md text-white">
          <button
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
            className="px-4 py-2 bg-black/50 hover:bg-black/70 rounded"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setIndex((index + 1) % images.length)}
            className="px-4 py-2 bg-black/50 hover:bg-black/70 rounded"
          >
            Próxima →
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
        >
          ✕
        </button>
      </div>
    </Dialog>
  );
}
