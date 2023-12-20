import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function StudentOpinion() {

  useEffect(() => {
    Aos.init();
  },[])

  return (
    <div className="bg-blue-700 overflow-hidden">
      <div className="max-w-7xl mx-auto py-10 sm:py-28 px-6 flex flex-col md:flex-row md:relative">
        <RiDoubleQuotesL className="md:text-[130px] absolute top-5 left-1 z-10 text-blue-400 hidden md:block" />
        <div className="md:w-1/2 md:h-[420px] md:mb-12" data-aos="fade-right">
          <img
            className="w-full h-full object-cover md:rounded-2xl rounded-t-2xl"
            src="https://www.alverno.edu/get/files/image/galleries/testimonial-0001.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2 md:h-[420px] bg-white md:absolute md:mt-12 right-6 md:rounded-2xl rounded-b-2xl px-5 md:px-8 lg:px-16 py-5 md:py-8 lg:py-12" data-aos="fade-left">
          <p className="text-md md:text-xl lg:text-2xl text-gray-700">
            QDPI - da men muloqot qobiliyatimni rivojlantira oldim va
            mustaqil ravishda va jamoada qanday qilib yaxshi ishlashni
            o'rgandim. Professorlarimning ko'magi bilan men kampusda va undan
            tashqarida qimmatli martaba tajribasiga ega bo'ldim. Oxir oqibat,
            men kuchliroq etakchiga aylanaman.
          </p>
          <p className="font-bold md:text-lg mt-4 md:mt-10 uppercase text-right text-blue-700"><span>-</span> Muxlisa</p>
        </div>
        <RiDoubleQuotesR className="md:text-[130px] absolute bottom-5 right-5 text-blue-500 hidden md:block" />
      </div>
    </div>
  );
}

export default StudentOpinion;
