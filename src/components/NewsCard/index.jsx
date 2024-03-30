// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Breadcrumb from "../Breadcrumb";
// import APIYangilik from "../../services/yangilik";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";

// const NewsCard = () => {
//   const { id } = useParams();
//   const [news, setNews] = useState(null);
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadNews = async () => {
//       try {
//         const res = await APIYangilik.getById(id);
//         setNews(res.data);
//         console.log(res.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching news data:", error);
//         setLoading(false);
//       }
//     };
//     loadNews();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="md:px-5 xl:px-10 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
//       <div className="border-b-2 border-[#004269] block w-full">
//         <Breadcrumb
//           steps={[
//             { text: "Bosh sahifa", link: "/" },
//             { text: "Yangiliklar", link: "/yangiliklar" },
//             { text: "Yangilik" },
//           ]}
//         />
//       </div>

//       <div className="p-10 xl:px-0 max-w-7xl mx-auto">
//         <div className="col-span-3 ...">
//           <h2 className="text-xl text-[#004269] xl:text-3xl 2xl:text-4xl font-bold text-center mb-5">
//             {news?.title_uz}
//           </h2>

//           <section className="home">
//             <Swiper
//               className="bg-slider"
//               spaceBetween={50}
//               slidesPerView={1}
//               navigation={{
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//               }}
//               thumbs={{ swiper: thumbsSwiper }}
//             >
//               <SwiperSlide className="swiper-slide dark-layer">
//                 <div className="swiper-slide-img">
//                   <img src={news?.rasm_1} alt="" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide className="swiper-slide dark-layer">
//                 <div className="swiper-slide-img">
//                   <img src={news?.rasm_2} alt="" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide className="swiper-slide dark-layer">
//                 <div className="swiper-slide-img">
//                   <img src={news?.rasm_3} alt="" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide className="swiper-slide dark-layer">
//                 <div className="swiper-slide-img">
//                   <img src={news?.rasm_4} alt="" />
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide className="swiper-slide dark-layer">
//                 <div className="swiper-slide-img">
//                   <img src={news?.rasm_5} alt="" />
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//             <div className="bg-slider-thumbs">
//               <Swiper
//                 onSwiper={(swiper) => setThumbsSwiper(swiper)}
//                 spaceBetween={10}
//                 slidesPerView={4}
//                 freeMode={true}
//                 watchSlidesVisibility={true}
//                 watchSlidesProgress={true}
//               >
//                 <SwiperSlide>
//                   <img src={news?.rasm_1} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <img src={news?.rasm_2} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <img src={news?.rasm_3} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <img src={news?.rasm_4} alt="" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <img src={news?.rasm_5} alt="" />
//                 </SwiperSlide>
//               </Swiper>
//             </div>
//           </section>

//           <div className="d-inline-block">
//             <p className="d-inline-block text-3xl border-2 border-[#004269] px-5 py-3 float-left mr-3">
//               {news && news.body_0_uz && news.body_0_uz.slice(0, 1)}
//             </p>
//             <span className="text-md lg:text-lg xl:text-xl">
//               {news && news.body_0_uz && news.body_0_uz.slice(1)}
//             </span>
//           </div>
//           <div className="text-md lg:text-lg xl:text-xl">
//             {news && news.body_1_uz}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;
// Yangiliklar.js

import React from "react";

const New = ({ data }) => {
  const item = data && data[0];
  if (!item) return null;

  return (
    <div className="p-4 max-w-sm lg:max-w-xs xl:max-w-md mx-auto group/item hover:cursor-pointer h-full">
      <div className="flex rounded-lg h-full dark:bg-gray-800 shadow-md hover:shadow-lg flex-col group/edit">
        <div className="flex items-center mb-3 relative overflow-hidden">
          <img
            className="w-full h-48 md:h-48 object-cover rounded group-hover/item:scale-105 ease-in duration-300 ..."
            src={item.rasm_1}
            alt="Sunset in the mountains"
          />
          <div className="absolute top-0 left-3 h-12 w-12 bg-[#802323] text-center flex flex-col text-sm p-1 rounded-b-md">
            {item.sana && (
              <span className="text-white">
                {item.sana.slice(8, 10)}.{item.sana.slice(5, 7)}
              </span>
            )}
            {item.sana && (
              <span className="text-white">{item.sana.slice(0, 4)}</span>
            )}
          </div>
          <div className="absolute bottom-0 border-[#004269] border-2 w-10 group-hover/edit:w-full ... ease-in duration-300 ..."></div>
        </div>

        <div className="flex flex-col justify-between flex-grow px-2">
          <h2 className="leading-relaxed font-bold line-clamp-3 xl:line-clamp-2 text-base text-[#004269] text-center dark:text-gray-300 line">
            {item.title_uz}
          </h2>
          <div className="flex justify-center items-center">
            <div className="border-4 bg-[#004269] w-10 my-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
