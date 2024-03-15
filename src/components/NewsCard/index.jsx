import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

const NewsCard = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState({});
  const items = [
    {
      name: "Switzerland",
      image: "https://i.ibb.co/qCkd9jS/img1.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Finland",
      image: "https://i.ibb.co/jrRb11q/img2.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Iceland",
      image: "https://i.ibb.co/NSwVv8D/img3.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Australia",
      image: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Netherland",
      image: "https://i.ibb.co/jTQfmTq/img5.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      name: "Ireland",
      image: "https://i.ibb.co/RNkk6L0/img6.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
  ];

  useEffect(() => {
    // API dan tanlangan yangilik ma'lumotlarini olish
    fetch(`https://api.kspi.uz/v1/yangilik/yangilik/${id}`)
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error("Xatolik: ", error));
  }, [id]);

  return (
    <div className="px-5 xl:px-10 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Yangiliklar", link: "/yangiliklar" },
            { text: "Yangilik" },
          ]}
        />
      </div>

      <div className="p-10 xl:px-0 md:grid md:grid-cols-1 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {/* qoshimcha */}
        <div></div>

        {/* NEWS */}
        <div className="col-span-3 ...">
          <h2 className="text-xl text-[#004269] xl:text-2xl font-bold text-center mb-5">
            {newsData.title}
          </h2>
          <div
            id="carouselExampleCrossfade"
            className="relative"
            data-twe-carousel-init
            data-twe-ride="carousel"
          >
            {/* <!--Carousel indicators--> */}
            <div
              className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-twe-carousel-indicators
            >
              <button
                type="button"
                data-twe-target="#carouselExampleCrossfade"
                data-twe-slide-to="0"
                data-twe-carousel-active
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-twe-target="#carouselExampleCrossfade"
                data-twe-slide-to="1"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-twe-target="#carouselExampleCrossfade"
                data-twe-slide-to="2"
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"
              ></button>
            </div>

            {/* <!--Carousel items--> */}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {/* <!--First item--> */}
              <div
                className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-fade
                data-twe-carousel-item
                data-twe-carousel-active
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                  className="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              {/* <!--Second item--> */}
              <div
                className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-fade
                data-twe-carousel-item
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                  className="block w-full"
                  alt="Camera"
                />
              </div>
              {/* <!--Third item--> */}
              <div
                className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-fade
                data-twe-carousel-item
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                  className="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <button
              className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-twe-target="#carouselExampleCrossfade"
              data-twe-slide="prev"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            {/* <!--Carousel controls - next item--> */}
            <button
              className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-twe-target="#carouselExampleCrossfade"
              data-twe-slide="next"
            >
              <span className="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
          <img className="mb-5 w-full rounded" src={newsData.rasm} alt="" />
          <div className="d-inline-block">
            <p className="d-inline-block text-3xl border-2 border-[#004269] px-5 py-3 float-left">
              {newsData && newsData.body && newsData.body.slice(0, 1)}
            </p>
            <span>{newsData && newsData.body && newsData.body.slice(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
