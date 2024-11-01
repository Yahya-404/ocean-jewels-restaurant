"use client";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Gallery = () => {
  const gallery = [
    "/assets/images/gallery/g-01.jpg",
    "/assets/images/gallery/g-02.jpg",
    "/assets/images/gallery/g-03.jpg",
    "/assets/images/gallery/g-04.jpg",
    "/assets/images/gallery/g-05.jpg",
  ];

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, EffectCoverflow, Autoplay]}
      spaceBetween={20}
      slidesPerView={1.4}
      // Start
      centeredSlides={true}
      loop={true}
      loopAddBlankSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      speed={2000}
      effect="coverflow"
      coverflowEffect={{
        rotate: 3,
        stretch: 2,
        depth: 100,
        modifier: 5,
        slideShadows: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      className="relative min-h-[600px] h-full"
      // End
    >
      {gallery.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full min-h-56 h-[60vh] md:min-h-96 md:h-[40vh]">
            <Image
              src={item}
              alt=" gallery"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-wp">
        <div className="swiper-button-prev swiper-button">
          <span className="arrows">
            <FaAngleLeft />
          </span>
        </div>
        <div className="swiper-button-next swiper-button">
          <span className="arrows">
            <FaAngleRight />
          </span>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};
