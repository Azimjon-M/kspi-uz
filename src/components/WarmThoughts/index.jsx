import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FaPlay } from "react-icons/fa";
import { IoPlayOutline, IoClose } from "react-icons/io5";

import video1 from "../../assets/video/Durdona.mp4";
import video2 from "../../assets/video/Xurshidbek.mp4";
import video3 from "../../assets/video/Madina.mp4";
import img1 from "../../assets/images/durdona.jpg";
import img2 from "../../assets/images/fikrVid.jpg";
import img3 from "../../assets/images/madina.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";

const videos = [
  {
    id: 1,
    name: "Durdona",
    about: "Nima uchun QDPIni tanlagansiz?",
    url: "https://www.youtube-nocookie.com/embed/3d3hmqjjsos?rel=0&controls=1&showinfo=0&autoplay=1&playsinline=1&enablejsapi=1",
    rasm: img1,
    vid: video1,
  },
  {
    id: 2,
    name: "Xurshidbek",
    about: "Nima uchun QDPIni tanlagansiz?",
    url: "https://www.youtube-nocookie.com/embed/a5h3qtBHM6c?rel=0&controls=1&showinfo=0&autoplay=1&playsinline=1&enablejsapi=1",
    rasm: img2,
    vid: video2,
  },
  {
    id: 3,
    name: "Madina",
    about: "Nima uchun QDPIni tanlagansiz?",
    url: "https://www.youtube-nocookie.com/embed/QE9ziawYNvU?rel=0&controls=1&showinfo=0&autoplay=1&playsinline=1&enablejsapi=1",
    rasm: img3,
    vid: video3,
  },
];

function WarmThoughts() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleClick = (videoId) => {
    setSelectedVideoId(videoId);
    setIsVideoVisible(true);
    setIsVideoPlay(true);
  };

  const handleClose = () => {
    setSelectedVideoId(null);
    setIsVideoVisible(false);
    setIsVideoPlay(false);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto my-8 md:my-16">
        <div className="text-2xl md:text-4xl text-center font-bold text-teal-700">
          QDPI
        </div>
        <h1 className="text-xl md:text-3xl font-bold text-[#004269] text-center my-4">
          Ularning so'zlarida
        </h1>
        <div className="hidden md:block p-5 my-12">
          <div className="grid grid-cols-3 gap-2">
            {videos &&
              videos.map((video) => {
                return (
                  <div className="max-h-[730px] relative group" key={video.id}>
                    <div className="before:content-[' ']  group-hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-[350] before:z-[2] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:pointer-events-none before:bg-gradient-to-t from-black via-transparent to-transparent after:content-[' '] after:w-[calc(100%-20px)] after:h-[calc(100%-20px)] group-hover:after:opacity-100 after:opacity-0 after:z-[2] after:absolute after:top-[1.5%] after:left-[2.5%] after:border-solid after:border after:border-gray-400 after:pointer-events-none after:transition-opacity after:duration-[350]">
                      <div className="w-full h-full group-hover:opacity-0 object-contain">
                        <img
                          src={video.rasm}
                          alt="Aquielle"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <video
                      className="w-fill h-full absolute top-0 left-0 group-hover:opacity-100 opacity-0"
                      playsInline
                      loop
                      muted
                      autoPlay
                    >
                      <source src={video.vid} type="video/mp4" />
                    </video>
                    <Link
                      onClick={() => handleClick(video.id)}
                      className="w-full group absolute bottom-0 left-0 z-[4] px-5 py-6 translate-y-[-5%] group-hover:translate-y-[0] opacity-0 group-hover:opacity-100 transition-transform duration-[400] ease-linear"
                    >
                      <span
                        onClick={() => handleClick(video.id)}
                        className="flex justify-center items-center w-16 h-16 mx-auto rounded-full text-3xl border border-gray-800 hover:border-yellow-500 bg-yellow-500 hover:bg-zinc-900 hover:text-yellow-500 font-bold"
                      >
                        <IoPlayOutline />
                      </span>
                      <span className="block text-white text-[1.18rem] leading-[1.2] font-normal text-center mt-5">
                        {video.about}
                      </span>
                      <span className="block text-white text-[0.875rem] leading-[1.26] font-normal text-center mt-3">
                        {video.name}
                      </span>
                    </Link>
                    {selectedVideoId === video.id && (
                      <div
                        className="w-full h-full absolute top-0 left-0"
                        style={{ zIndex: isVideoVisible ? "5" : "-1" }}
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          src={video.url}
                          title="YouTube video player"
                          frameborder="0"
                          allow={isVideoPlay ? "autoplay=1" : ""}
                          allowfullscreen
                        ></iframe>
                      </div>
                    )}
                    {selectedVideoId === video.id && (
                      <button
                        className="absolute top-2 right-2 z-[6] border border-gray-800 hover:border-yellow-500 bg-yellow-500 hover:bg-zinc-900 hover:text-yellow-500 text-lg px-2 py-1 rounded-md"
                        onClick={handleClose}
                      >
                        <IoClose />
                      </button>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="md:hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="h-[439px] max-w-[246px] mt-5"
          >
            {videos &&
              videos.map((video) => {
                return (
                  <SwiperSlide className="relative group w-full" key={video.id}>
                    <div className="before:content-[' ']  group-hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-[350] before:z-[2] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:pointer-events-none before:bg-gradient-to-t from-black via-transparent to-transparent ">
                      <div className="w-full h-full group-hover:opacity-0">
                        <img
                          src={img1}
                          alt="Aquielle"
                          className="w-full h-full"
                        />
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
                      onClick={() => handleClick(video.id)}
                      className="w-full group absolute bottom-0 left-0 z-[4] px-5 py-6"
                    >
                      <span
                        onClick={() => handleClick(video.id)}
                        className="flex justify-center items-center w-14 h-14 mx-auto rounded-full text-2xl border border-gray-800 hover:border-yellow-500 bg-yellow-500 hover:bg-zinc-900 hover:text-yellow-500 font-bold"
                      >
                        <IoPlayOutline />
                      </span>
                      <span className="block text-white text-[1rem] leading-[1.2] font-normal text-center mt-5">
                        {video.about}
                      </span>
                      <span className="block text-white text-[0.875rem] leading-[1.31] font-normal text-center mt-3">
                        {video.name}
                      </span>
                    </Link>
                    {selectedVideoId === video.id && (
                      <div
                        className="w-full h-full absolute top-0 left-0"
                        style={{ zIndex: isVideoVisible ? "5" : "-1" }}
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          src={video.url}
                          title="YouTube video player"
                          frameborder="0"
                          allow={isVideoPlay ? "autoplay=1" : ""}
                          allowfullscreen
                        ></iframe>
                      </div>
                    )}
                    {selectedVideoId === video.id && (
                      <button
                        className="absolute top-2 right-2 z-[6] border border-gray-800 hover:border-yellow-500 bg-yellow-500 hover:bg-zinc-900 hover:text-yellow-500 text-lg px-2 py-1 rounded-md"
                        onClick={handleClose}
                      >
                        <IoClose />
                      </button>
                    )}
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default WarmThoughts;
