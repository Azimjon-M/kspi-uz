import { useState, useRef, useEffect, useMemo } from "react";

const Test = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);

  // Refs
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sliderContent = useMemo(
    () => [
      {
        img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        name: "Wanda Maximoff",
      },
      {
        img: "https://img.freepik.com/premium-photo/colorful-pai…uty-charm-this-magnificent-animal_674594-4024.jpg",
        name: "The Hulk",
      },
      {
        img: "	https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        name: "Iron Man",
      },
    ],
    []
  );

  const Slide = (type) => {
    let local;
    if (type === "next") {
      local = active + 1;
      sliderContent.length - 1 < local ? setActive(0) : setActive(local);
    }
    if (type === "prev") {
      local = active - 1;
      local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
    }
    setPrev(active);
  };

  useEffect(() => {
    prevRef.current.style.left = "-10%";
    nextRef.current.style.right = "-10%";
    setTimeout(() => {
      prevRef.current.style.left = "0%";
      nextRef.current.style.right = "0%";
    }, 1000);
  }, [active, sliderContent]);

  return (
    <div className="my-10 max-w-7xl mx-auto">
      <div className="rounded-xl relative shadow-lg overflow-hidden">
        <div className="w-[600px] h-[400px] relative">
          {sliderContent.map((slide, i) => {
            return (
              <img
                src={slide.img}
                key={i}
                alt="slideImg"
                className={`h-full w-full absolute object-cover inset-0 duration-[2.5s] ease-out transition-[clip-path] ${
                  i === active ? "clip-visible" : "clip-hidden"
                }`}
              />
            );
          })}
          <img
            src={sliderContent[prev].img}
            alt="previmg"
            className="w-full h-full  object-cover"
          />
        </div>
        <div>
          <button id="back" ref={prevRef} onClick={() => Slide("prev")}>
            <ion-icon name="chevron-back-outline" size="large"></ion-icon>
          </button>
          <button
            id="forward"
            ref={nextRef}
            className="right-0"
            onClick={() => Slide("next")}
          >
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
