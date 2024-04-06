import React, {useRef} from "react";
import mainVid from "../../assets/video/asosiy.mp4";

const Carousel = () => {
  const mainRef = useRef(null);

  return (
    <div className="relative">
      <video
        ref={mainRef}
        id="mainVideo"
        className="h-[50vh] md:h-[80vh] lg:h-[100vh] object-cover object-center w-full -z-1"
        src={mainVid}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-zinc-900 opacity-35"></div>
    </div>
  );
};

export default Carousel;
