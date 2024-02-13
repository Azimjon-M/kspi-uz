import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../Breadcrumb";

const NewsCard = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://api.kspi.uz/v1/yangilik/yangilik/"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);
  const { id } = useParams();
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    // API dan tanlangan yangilik ma'lumotlarini olish
    fetch(`https://api.kspi.uz/v1/yangilik/yangilik/${id}`)
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error("Xatolik: ", error));
  }, [id]);

  return (
    <div className="px-5 xl:px-0 max-w-7xl mx-auto">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Yangiliklar", link: "/yangiliklar" },
            { text: "Yangilik" },
          ]}
        />
      </div>

      <div className="p-10 xl:px-0 md:grid md:grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="col-span-3 ...">
          <h2 className="text-xl text-[#004269] xl:text-2xl font-bold text-center mb-5">
            {newsData.title}
          </h2>
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
