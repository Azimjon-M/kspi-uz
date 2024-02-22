import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import TextTranslate from "../TextTranslate";

const NewsHome = () => {
  const [firstNews, setFirstNews] = useState(null);
  const [news, setNews] = useState(null);
  useEffect(() => {
    Aos.init();
    const loadPost = async () => {
      try {
        await axios
          .get("https://api.kspi.uz/v1/yangilik/yangilik/")
          .then((res) => {
            setFirstNews(res.data.slice(0, 1));
            setNews(res.data.slice(1, 5));
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    loadPost();
  }, []);
  return (
    <div className="px-5 py-3 md:px-10 lg:px-20 xl:px-0 max-w-7xl mx-auto">
      <div className="md:flex md:items-center justify-between">
        {/* News heading */}
        <div className="mx-auto my-1 md:my-3">
          <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269]">
            <TextTranslate id="newsHeading" />
          </h2>
        </div>
      </div>

      {/* News items */}
      {/* First news */}
      <div className="grid md:grid-cols-1 xl:grid-cols-2 overflow-hidden">
        {firstNews &&
          firstNews.map((item, idx) => (
            <Link
              className="inline-block"
              to={`/yangiliklar/${item.id}`}
              key={idx}
            >
              <div
                className="p-4 max-w-sm md:max-w-3xl lg:max-w-4xl mx-auto group/item hover:cursor-pointer h-full"
                data-aos="fade-right"
              >
                <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md hover:shadow-lg flex-col group/edit">
                  <div className="flex items-center mb-3 relative overflow-hidden">
                    <img
                      className="w-full rounded group-hover/item:scale-105 ease-in duration-300 ..."
                      src={item.rasm}
                      alt="Sunset in the mountains"
                    />
                    <div className="absolute top-0 left-3 h-12 w-12 bg-[#802323] text-center flex flex-col text-sm p-1 rounded-b-md">
                      <span className="text-white">
                        {item.sana.slice(8, 10)}.{item.sana.slice(5, 7)}
                      </span>
                      <span className="text-white">
                        {item.sana.slice(0, 4)}
                      </span>
                    </div>
                    <div className="absolute bottom-0 border-[#004269] border-2 w-20 group-hover/edit:w-full ... ease-in duration-300 ..."></div>
                  </div>
                  {/* News title */}
                  <div className="flex flex-col justify-between flex-grow px-2">
                    <h2 className="leading-relaxed font-bold line-clamp-3 xl:line-clamp-5 text-base lg:text-lg text-[#004269] text-center dark:text-gray-300">
                      {item.title}
                    </h2>
                    <div className="flex justify-center items-center">
                      <div className="border-4 bg-[#004269] w-10 my-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        {/* Remaining news */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 overflow-hidden">
          {news &&
            news.map((item, idx) => (
              <Link
                className="inline-block"
                to={`/yangiliklar/${item.id}`}
                key={idx}
              >
                <div
                  className="p-4 max-w-sm lg:max-w-xs xl:max-w-md mx-auto group/item hover:cursor-pointer"
                  data-aos="fade-left"
                >
                  <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md hover:shadow-lg flex-col group/edit">
                    <div className="flex items-center mb-3 relative overflow-hidden">
                      <img
                        className="w-full md:h-56 lg:h-40 xl:h-44 object-cover rounded group-hover/item:scale-105 ease-in duration-300 ..."
                        src={item.rasm}
                        alt="Sunset in the mountains"
                      />
                      <div className="absolute top-0 left-3 h-12 w-12 bg-[#802323] text-center flex flex-col text-sm p-1 rounded-b-md">
                        <span className="text-white">
                          {item.sana.slice(8, 10)}.{item.sana.slice(5, 7)}
                        </span>
                        <span className="text-white">
                          {item.sana.slice(0, 4)}
                        </span>
                      </div>
                      <div className="absolute bottom-0 border-[#004269] border-2 w-10 group-hover/edit:w-full ... ease-in duration-300 ..."></div>
                    </div>
                    {/* News title */}
                    <div className="flex flex-col justify-between flex-grow px-2">
                      <h2 className="leading-relaxed font-bold line-clamp-3 xl:line-clamp-2 text-base text-[#004269] text-center dark:text-gray-300 line">
                        {item.title}
                      </h2>
                      <div className="flex justify-center items-center">
                        <div className="border-4 bg-[#004269] w-10 my-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      {/* Barcha yangiliklarga o'tish */}
      <div className="flex justify-end my-2">
        <Link
          className="cursor-pointer md:text-xl hover:scale-105 ease-in-out duration-150 lg:pr-3"
          to="/yangiliklar"
        >
          <span className="flex items-center ease-in-out duration-200">
            <TextTranslate id="newsToPage" /> »
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NewsHome;
