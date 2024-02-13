import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import img1 from "../../assets/images/kspi-img-1.jpg";
import img2 from "../../assets/images/kspi-img2.jpg";
import img3 from "../../assets/images/kspi-img-3.jpg";

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
      className="mySwiper w-auto h-[80vh] object-cover md:h-[90vh] transition-all duration-2000 ease-in-out"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img
              className="block w-auto h-[100%] object-cover transition-all duration-3000 ease-linear"
              src={img}
              alt="Institut rasmi"
            />
            {/* <div className="absolute inset-0 bg-[#004269] opacity-50" /> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
