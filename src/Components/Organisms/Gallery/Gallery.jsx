import { useEffect, useState } from 'react';
import { ImageModal } from '../../Molecules/ImageModal/ImageModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import './Gallery.css';
import 'swiper/css';

export function Gallery() {
  const images = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.png',
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

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const section = document.getElementById('projects');
    const elements = document.querySelectorAll('#projects [data-aos]');

    if (isMobile) {
      // Remove do próprio section
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
    <section className="md:py-3 sm:py-0" id="projects" data-aos="fade-up" data-aos-delay="200">
      
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
