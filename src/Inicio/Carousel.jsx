import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import foto2 from "../assets/carousel-images/Foto_2.webp";
import foto3 from "../assets/carousel-images/Foto_3.webp";
import foto4 from "../assets/carousel-images/Foto_4.webp";
import foto5 from "../assets/carousel-images/Foto_5.webp";
import foto6 from "../assets/carousel-images/Foto_6.webp";
import foto7 from "../assets/carousel-images/Foto_7.webp";
import foto8 from "../assets/carousel-images/Foto_8.webp";

const Carousel = () => {
  const carouselFotos = [foto2, foto3, foto4, foto5, foto6, foto7, foto8];

  return (
    <div>
      <div className="carousel-container">
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 40 },
            1280: { slidesPerView: 4, spaceBetween: 50 },
          }}
          navigation
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{
            dynamicBullets: true,
          }}
        >
          {carouselFotos.map((foto, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={foto} alt="" className="carouselFotos" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
