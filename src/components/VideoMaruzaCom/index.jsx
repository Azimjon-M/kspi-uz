import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router";

const VideoMaruzalar = () => {
  const data = {
    posts: ["https://www.youtube.com/watch?v=RTy6VcabQvI"],
  };

  const params = useParams();
  const post = data.posts.find((dataItem) => dataItem.id === params.id);
  const youtubeID = post.split("v=")[1];
  const onReady = (e) => {
    console.log(e.target);
  };

  const opts = {
    height: "100%",
    width: "100%",
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
          <div className="grid grid-cols-2 gap-y-4 collapse-content">
            <div>
              <div className="p-2">
                <YouTube
                  className="w-full h-full"
                  videoId={youtubeID}
                  onReady={onReady}
                  opts={opts}
                />
              </div>
              <div className="text-xl">Nyutonning birinchi qonuni</div>
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Xorijiy tillar
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Pedagogika va psixologiya
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Tabiiy fanlar
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Tarix</div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            O’zbek tili va adabiyot
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">San'at</div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Boshlang’ich ta’lim
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Jismoniy tarbiya
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Maktabgacha ta’lim
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
        <div className="collapse bg-base-200 mb-4 collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Rus tili va adabiyoti
          </div>
          <div className="flex flex-col gap-y-4 collapse-content">
            <div>
              <YouTube videoId={youtubeID} onReady={onReady} opts={opts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMaruzalar;
