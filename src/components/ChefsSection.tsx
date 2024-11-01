"use client";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Topics } from "./shared/routes";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const ChefsSection = () => {
  const chefsInfo = [
    { name: "Nilay Hirpara", img: "/assets/images/chef/c1.jpg" },
    { name: "Ravi Kumawat", img: "/assets/images/chef/c2.jpg" },
    { name: "Navnit Kumar", img: "/assets/images/chef/c3.jpg" },
    { name: "Pranav Badgal", img: "/assets/images/chef/c4.jpg" },
    { name: "Priyotosh Dey", img: "/assets/images/chef/c5.jpg" },
  ];
  const socials = [
    { icon: <FaFacebookF /> },
    { icon: <FaInstagram /> },
    { icon: <FaYoutube /> },
  ];

  return (
    <section id="chefs-sec" className="all-sections">
      <Topics secName={"our staff"} title={"meet our chefs"} />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
        // slidesPerView={3}
        spaceBetween={30}
        // start
        // centeredSlides={true}
        loop={true}
        freeMode={true}
        // loopAddBlankSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={2000}
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
        breakpoints={{
          0: {
            slidesPerView: 1.6,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="relative"
        // End
      >
        {chefsInfo.map((chef, index) => (
          <SwiperSlide key={index} className="my-14 max-w-xs">
            <div className="w-full p-4 bg-chef-card shadow-chef-card rounded-3xl cubic-bezier-2 hover:scale-105">
              <div className="relative w-full h-80 max-h-full">
                <Image
                  src={chef.img}
                  alt={`slide ${index}`}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <h3 className="text-xl text-center mt-2">{chef.name}</h3>
              <ul className="flex-center gap-2 mt-4">
                {socials.map((social, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="bg-social-icons inline-block text-accent p-4 text-xl shadow-social rounded-full hover:bg-none hover:bg-accent hover:text-white"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
