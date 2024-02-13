import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import img1 from "../../assets/images/kspi-img1.jpg";
import img2 from "../../assets/images/kspi-img1.jpg";
import img3 from "../../assets/images/kspi-img1.jpg";
import { Link } from "react-router-dom";

const Carousel = () => {
  const images = [img1, img2, img3];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper w-full h-[60vh] md:h-[80vh] lg:h-[calc(100vh-130px)] transition-all duration-2000 ease-in-out"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img
              className="block w-full h-full object-cover transition-all duration-3000 ease-linear"
              src={img}
              alt="Institut rasmi"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#004269] to-[#00ffc4] opacity-50" />
            <div className="absolute top-[50%] 2xl:top-[40%] -translate-y-[50%] xl:-translate-y-[180%] left-0 right-0 text-center max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl mx-auto">
              <h2 className="text-sm md:text-lg xl:text-xl 2xl:text-3xl font-semibold text-white mb-3">
                Slide Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                {index + 1}
              </h2>
              <p className="mb-3 text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                incidunt ex ea, inventore necessitatibus unde. In nostrum
                consectetur libero impedit odio corrupti dolorum, quos soluta,
                eum culpa doloremque magnam optio!
              </p>
              <Link className="px-8 py-2 bg-[#004269] text-white xl:text-xl font-bold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Link {index + 1}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
