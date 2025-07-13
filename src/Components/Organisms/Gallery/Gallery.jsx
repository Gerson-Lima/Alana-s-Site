import { useState } from 'react';
import { ImageModal } from '../../Molecules/ImageModal/ImageModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './Gallery.css';
import 'swiper/css';
import 'swiper/css/pagination';

export function Gallery() {
  const images = [
    '/1.png',
    '/Rectangle73.png',
    '/3.png',
    '/5.png',
    '/4.png',
    '/8.png',
    '/9.png',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenModal = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="md:py-8 sm:py-0">
      
      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-7 grid-rows-1 gap-4 px-4 max-h-[600px] xl:max-h-[1200px] overflow-hidden">
        <button
          type="button"
          className="col-span-1 row-span-2 focus:outline-none"
          onClick={() => handleOpenModal(0)}
        >
          <img
            src={images[0]}
            alt="Imagem 1"
            className="object-cover w-full h-full shadow-md hover:opacity-80 transition"
          />
        </button>
        <button
          type="button"
          className="col-span-3 row-span-2 focus:outline-none"
          onClick={() => handleOpenModal(1)}
        >
          <img
            src={images[1]}
            alt="Imagem 2"
            className="object-cover w-full h-full shadow-md hover:opacity-80 transition"
          />
        </button>
        <button
          type="button"
          className="col-span-1 row-span-1 focus:outline-none"
          onClick={() => handleOpenModal(2)}
        >
          <img
            src={images[2]}
            alt="Imagem 3"
            className="object-cover w-full h-full shadow-md hover:opacity-80 transition"
          />
        </button>
        <button
          type="button"
          className="col-span-2 row-span-1 focus:outline-none"
          onClick={() => handleOpenModal(4)}
        >
          <img
            src={images[4]}
            alt="Imagem 5"
            className="object-cover w-full h-full shadow-md hover:opacity-80 transition"
          />
        </button>
        <button
          type="button"
          className="col-span-1 row-span-1 focus:outline-none"
          onClick={() => handleOpenModal(3)}
        >
          <img
            src={images[3]}
            alt="Imagem 4"
            className="object-cover w-full h-full shadow-md hover:opacity-80 transition"
          />
        </button>
        <button
          type="button"
          className="col-span-1 row-span-1 focus:outline-none"
          onClick={() => handleOpenModal(5)}
        >
          <img
            src={images[5]}
            alt="Imagem 6"
            className="object-cover w-full h-full shadow-md hover:opacity-80 transition"
          />
        </button>
        <button
          type="button"
          className="col-span-1 row-span-1 focus:outline-none"
          onClick={() => handleOpenModal(6)}
        >
          <img
            src={images[6]}
            alt="Imagem 7"
            className="object-cover w-full h-full shadow-md hover:opacity-80 transition"
          />
        </button>
      </div>

      {/* MOBILE SWIPER */}
      <div className="md:hidden px-4">
        <Swiper
          loop={true}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <button
                type="button"
                className="focus:outline-none w-full"
                onClick={() => handleOpenModal(idx)}
              >
                <img
                  src={src}
                  alt={`Imagem ${idx + 1}`}
                  className="object-cover w-full h-64 shadow-md hover:opacity-80 transition"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isOpen && (
        <ImageModal
          images={images}
          index={selectedIndex}
          setIndex={setSelectedIndex}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
