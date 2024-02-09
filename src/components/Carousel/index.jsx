import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import img1 from "../../assets/images/kspi-img1.jpg";
import img2 from "../../assets/images/kspi-img1.jpg";
import img3 from "../../assets/images/kspi-img1.jpg";

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper w-full h-[60vh] md:h-[80vh] lg:h-[calc(100vh-130px)]"
    >
      <SwiperSlide>
        <div className="relative">
          <img
            className="block w-full h-full object-cover"
            src={img1}
            alt="Institut rasmi"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004269] to-[#00ffc4] opacity-50" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="block w-full h-full object-cover"
            src={img2}
            alt="Institut rasmi"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004269] to-[#00ffc4] opacity-50" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="block w-full h-full object-cover"
            src={img3}
            alt="Institut rasmi"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004269] to-[#00ffc4] opacity-50" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
