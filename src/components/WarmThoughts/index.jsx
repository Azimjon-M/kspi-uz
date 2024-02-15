import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

function WarmThoughts() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-3xl text-teal-700">QDPI</div>
        <h1 className="text-xl md:text-4xl text-center">Ularning so'zlarida</h1>
        <div className="hidden md:block p-5">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-96 bg-orange-400">1</div>
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
                frameborder="0"
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
