import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

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
        {/* qoshimcha */}
        {/* <div></div> */}

        {/* NEWS */}
        <div className="col-span-3 ...">
          <h2 className="text-xl text-[#004269] xl:text-3xl 2xl:text-4xl font-bold text-center mb-5">
            {newsData.title}
          </h2>
          <img className="mb-5 w-full rounded" src={newsData.rasm} alt="" />
          <div className="d-inline-block">
            <p className="d-inline-block text-3xl border-2 border-[#004269] px-5 py-3 float-left mr-3">
              {newsData && newsData.body && newsData.body.slice(0, 1)}
            </p>
            <span className="text-md lg:text-lg xl:text-xl">
              {newsData && newsData.body && newsData.body.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
