import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoMaruzalar = () => {
  const [hovered, setHovered] = useState(false);
  let player = null;

  function getYoutubeVideoId(url) {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|[^/]+\/(?:watch|v|e)(?:\?.*v=|\/))|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match && match[1];
  }

  const videoId = getYoutubeVideoId(
    "https://youtu.be/RTy6VcabQvI"
  );

  const onMouseEnter = () => {
    setHovered(true);
    if (player !== null) {
      player.playVideo();
    }
  };

  const onMouseLeave = () => {
    setHovered(false);
    if (player !== null) {
      player.pauseVideo();
    }
  };

  const onReady = (event) => {
    player = event.target;
    if (!hovered) {
      player.pauseVideo();
    }
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-center text-2xl my-5 font-bold">Video maruzalar</h2>
      <div className="p-5">
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Fizika va matematika
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Xorijiy tillar
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
          <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Pedagogika va psixologiya
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
          <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Tabiiy fanlar
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
          <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Tarix</div>
          <div className="flex flex-col gap-y-4 collapse-content">
          <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            O’zbek tili va adabiyot
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">San'at</div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Boshlang’ich ta’lim
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Jismoniy tarbiya
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Maktabgacha ta’lim
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Rus tili va adabiyoti
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMaruzalar;



