import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { LazyLoadImage } from "react-lazy-load-image-component";

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

import placehold2 from "../assets/placeholder/Foto_2.jpg";
import placehold3 from "../assets/placeholder/Foto_3.jpg";
import placehold4 from "../assets/placeholder/Foto_4.jpg";
import placehold5 from "../assets/placeholder/Foto_5.jpg";
import placehold6 from "../assets/placeholder/Foto_6.jpg";
import placehold7 from "../assets/placeholder/Foto_7.jpg";
import placehold8 from "../assets/placeholder/Foto_8.jpg";

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
          <SwiperSlide>
            <LazyLoadImage
              src={foto2}
              alt="carousel"
              effect="blur"
              className="carouselFotos"
              placeholderSrc={placehold2}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LazyLoadImage
              src={foto3}
              alt="carousel"
              effect="blur"
              className="carouselFotos"
              placeholderSrc={placehold3}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LazyLoadImage
              src={foto4}
              alt="carousel"
              effect="blur"
              className="carouselFotos"
              placeholderSrc={placehold4}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LazyLoadImage
              src={foto5}
              alt="carousel"
              effect="blur"
              className="carouselFotos"
              placeholderSrc={placehold5}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LazyLoadImage
              src={foto6}
              alt="carousel"
              effect="blur"
              className="carouselFotos"
              placeholderSrc={placehold6}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LazyLoadImage
              src={foto7}
              alt="carousel"
              effect="blur"
              className="carouselFotos"
              placeholderSrc={placehold7}
            />
          </SwiperSlide>

          <SwiperSlide>
            <LazyLoadImage
              src={foto8}
              alt="carousel"
              effect="blur"
              className="carouselFotos"
              placeholderSrc={placehold8}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
