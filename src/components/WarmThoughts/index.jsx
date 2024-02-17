import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FaPlay } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";

import video1 from "../../assets/video/cccccc.mp4";
import img1 from "../../assets/images/Aquielle.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";

function WarmThoughts() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-3xl text-teal-700">QDPI</div>
        <h1 className="text-xl md:text-4xl text-center">Ularning so'zlarida</h1>
        <div className="hidden md:block p-5">
          <div className="grid grid-cols-3 gap-2">
            <div className="max-h-[730px] relative group">
              <div className="before:content-[' ']  group-hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-[350] before:z-[2] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:pointer-events-none before:bg-gradient-to-t from-black via-transparent to-transparent after:content-[' '] after:w-[calc(100%-20px)] after:h-[calc(100%-20px)] group-hover:after:opacity-100 after:opacity-0 after:z-[2] after:absolute after:top-[1.5%] after:left-[2.5%] after:border-solid after:border after:border-gray-400 after:pointer-events-none after:transition-opacity after:duration-[350]">
                <div className="w-full h-full group-hover:opacity-0 object-contain">
                  <img src={img1} alt="Aquielle" className="w-full h-full" />
                </div>
              </div>
              <video
                className="w-fill h-full absolute top-0 left-0 group-hover:opacity-100 opacity-0"
                playsInline
                loop
                muted
                autoPlay
              >
                <source src={video1} type="video/mp4" />
              </video>
              <Link
                to="https://www.youtube.com/watch?v=SskZXD_xpaE"
                className="w-full group absolute bottom-0 left-0 z-[4] px-5 py-6 translate-y-[-5%] group-hover:translate-y-[0] opacity-0 group-hover:opacity-100 transition-transform duration-[400] ease-linear"
              >
                <span className="flex justify-center items-center w-16 h-16 mx-auto rounded-full text-3xl border border-gray-800 hover:border-yellow-500 bg-yellow-500 hover:bg-zinc-900 hover:text-yellow-500 font-bold">
                  {/* <FaPlay className="border border-yellow-600"/> */}
                  <IoPlayOutline className="" />
                </span>
                <span className="block text-white text-[1.18rem] leading-[1.2] font-normal text-center mt-5">
                  What is Brown like for students of color?
                </span>
                <span className="block text-white text-[0.875rem] leading-[1.26] font-normal text-center mt-3">
                  Aquielle Person
                </span>
              </Link>
            </div>
            <div className="h-96 bg-orange-400">2</div>
            <div className="h-96 bg-orange-400">3</div>
          </div>
        </div>
        <div className="md:hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="h-[500px] max-w-72"
          >
            <SwiperSlide className="flex items-center justify-center">
              <video
                className="w-fill h-full rounded-lg"
                playsInline
                loop
                muted
                autoPlay
                controls
              >
                <source
                  src="https://docs.material-tailwind.com/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Twy8N5Tmf48?si=MsXJVV-rhUBDiqZS"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                autoPlay
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default WarmThoughts;
