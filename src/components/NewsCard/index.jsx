import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import APIYangilik from "../../services/yangilik";

const NewsCard = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const res = await APIYangilik.getById(id);
        setNews(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setLoading(false);
      }
    };
    loadNews();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:px-5 xl:px-10 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Yangiliklar", link: "/yangiliklar" },
            { text: "Yangilik" },
          ]}
        />
      </div>

      <div className="p-10 xl:px-0 max-w-7xl mx-auto">
        <div className="col-span-3 ...">
          <h2 className="text-xl text-[#004269] xl:text-3xl 2xl:text-4xl font-bold text-center mb-5">
            {news?.title_uz}
          </h2>
          <img src={news?.rasm_1} alt="" />
          <div className="d-inline-block">
            <p className="d-inline-block text-3xl border-2 border-[#004269] px-5 py-3 float-left mr-3">
              {news && news.body_0_uz && news.body_0_uz.slice(0, 1)}
            </p>
            <span className="text-md lg:text-lg xl:text-xl">
              {news && news.body_0_uz && news.body_0_uz.slice(1)}
            </span>
          </div>
          <div className="text-md lg:text-lg xl:text-xl">
            {news && news.body_1_uz}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
