import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsCard = () => {
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
    <div className="p-10">
      <h2 className="text-xl font-bold text-center mb-5">{newsData.title}</h2>
      <img className="mb-5 w-full" src={newsData.rasm} alt="" />
      <div className="d-inline-block">
        <p className="d-inline-block text-3xl border-2 border-[#004269] px-5 py-3 float-left">
          {newsData && newsData.body && newsData.body.slice(0, 1)}
        </p>
        <span>{newsData && newsData.body && newsData.body.slice(1)}</span>
      </div>
    </div>
  );
};

export default NewsCard;
