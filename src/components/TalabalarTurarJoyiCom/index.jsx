import React, { useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { LuCopyCheck } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";
import StudentsHouse from "../../assets/images/StudentsHouse.jpg";
import TTJRaxbari from "../../assets/images/TTJRaxbari.png";
import ttjTalabalari from "../../assets/images/talabalarTurarJoyi/ttjTalabalari.jpg";
import ttjKompus from "../../assets/images/talabalarTurarJoyi/ttjKompus.jpg";
import ttjXona from "../../assets/images/talabalarTurarJoyi/ttjXona.jpg";

import { Link } from "react-router-dom";

function TalabalarTurarJoyiCom() {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 5000;

  useEffect(() => {
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  });

  return (
    <div>
      {/* video about the institute */}
      <div className="w-full max-h-[20%] md:max-h-screen">
        <img
          src={StudentsHouse}
          alt=""
          className="w-full h-full lg:h-screen object-cover"
        />
      </div>

      {/* Leader's opinion */}
      <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5 md:mt-20">
        Talabalar turar joyiga xush kelibsiz
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-12">
        <div className="flex justify-center">
          <img
            src={TTJRaxbari}
            className="w-60 md:w-72 h-60 md:h-72 rounded-full"
            alt=""
          />
        </div>
        <div className="md:pr-20 text-center md:text-start">
          <RiDoubleQuotesL className="text-6xl text-gray-300" />
          <p className="text-lg text-gray-600 font-bold mt-3">
            Talabalar shaharchasida yashash yangi odamlar bilan tanishish va
            doimiy do'stlikni rivojlantirish uchun son-sanoqsiz imkoniyatlarni
            taqdim etadi.
          </p>
          <p className="mt-2 text-amber-800 italic">
            Zohid Isroilov TTJ raxbari
          </p>
        </div>
      </div>

      {/* TTJ statistics */}
      <div className="bg-[#F2F2F2] overflow-y-scroll py-14 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:mx-0">
            <div className="border-b-4 md:border-b-0 md:border-r-4 border-[#004269] p-7">
              <div className="bg-[#004269] text-center">
                <p className="text-2xl text-white font-bold py-2">
                  Bizning TTJ da
                </p>
              </div>
              <p
                data-val="1942"
                className="num text-5xl font-bold text-center text-[#EB7D46] mt-4"
              >
                0
              </p>
              <p className="text-xl text-center font-bold mt-3">Talaba</p>
            </div>
            <div className="border-b-4 md:border-b-0 md:border-r-4 border-[#004269] p-7">
              <div className="bg-[#004269] text-center">
                <p className="text-2xl text-white font-bold py-2">
                  Bizning TTJ da
                </p>
              </div>
              <p
                id="counter"
                data-val="500"
                className="num text-5xl font-bold text-center text-[#EB7D46] mt-4"
              >
                0
              </p>
              <p className="text-xl text-center font-bold mt-3">Talaba</p>
            </div>
            <div className="p-7">
              <div className="bg-[#004269] text-center">
                <p className="text-2xl text-white font-bold py-2">
                  Bizning TTJ da
                </p>
              </div>
              <p
                data-val="4"
                className="num text-5xl font-bold text-center text-[#EB7D46] mt-4"
              >
                0
              </p>
              <p className="text-xl text-center font-bold mt-3">Talaba</p>
            </div>
          </div>
        </div>
      </div>

      {/* TTJ compus */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5 md:mt-20">
          Bizning kompus
        </h1>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
          <div className="z-10 mx-6 md:mx-0">
            <img
              src={ttjKompus}
              className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
              alt=""
            />
          </div>
          <div className="bg-[#F2F2F2] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
            <h3 className="text-2xl md:text-3xl font-medium">Kompus</h3>
            <p className="text-md md:text-xl mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptatum aut, nam totam rem sed explicabo autem consectetur
              facere illo tenetur error cumque non a possimus eius maxime
              adipisci veritatis! Excepturi quia est rerum porro perferendis,
              illo ipsam ullam similique odit. Saepe culpa tempore aliquid
              adipisci repudiandae ad. Excepturi quia est rerum porro
              perferendis, illo ipsam ullam similique odit. Saepe culpa tempore
              aliquid adipisci repudiandae ad. Excepturi quia est rerum porro
              perferendis, illo ipsam ullam similique odit.
            </p>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
          <div className="z-10 mx-6 md:mx-0 md:order-last">
            <img
              src={ttjXona}
              className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
              alt=""
            />
          </div>
          <div className="bg-[#F2F2F2] p-10 md:pl-16 md:pr-28 md:py-20 -mt-6 md:mt-0 md:-mr-16">
            <h3 className="text-2xl md:text-3xl font-medium">
              Bizning sharoitlarimiz
            </h3>
            <p className="text-md md:text-xl mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptatum aut, nam totam rem sed explicabo autem consectetur
              facere illo tenetur error cumque non a possimus eius maxime
              adipisci veritatis! Excepturi quia est rerum porro perferendis,
              illo ipsam ullam similique odit. Saepe culpa tempore aliquid
              adipisci repudiandae ad. Excepturi quia est rerum porro
              perferendis, illo ipsam ullam similique odit. Saepe culpa tempore
              aliquid adipisci repudiandae ad. Excepturi quia est rerum porro
              perferendis, illo ipsam ullam similique odit.
            </p>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
          <div className="bg-red-300 z-10 mx-6 md:mx-0 shadow-2xl">
            <img src={StudentsHouse} className="object-cover" alt="" />
          </div>
          <div className="bg-[#F2F2F2] p-10 md:pl-28 md:pr-20 md:py-20 -mt-6 md:mt-0 md:-ml-16">
            <h3 className="text-2xl md:text-3xl font-medium">Sarlavha</h3>
            <p className="text-md md:text-xl mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptatum aut, nam totam rem sed explicabo autem consectetur
              facere illo tenetur error cumque non a possimus eius maxime
              adipisci veritatis! Excepturi quia est rerum porro perferendis,
              illo ipsam ullam similique odit. Saepe culpa tempore aliquid
              adipisci repudiandae ad. Excepturi quia est rerum porro
              perferendis, illo ipsam ullam similique odit. Saepe culpa tempore
              aliquid adipisci repudiandae ad. Excepturi quia est rerum porro
              perferendis, illo ipsam ullam similique odit.
            </p>
          </div>
        </div>
      </div>

      {/* Image students  */}
      <div className="max-full my-20 md:mt-32">
        <img
          className="w-full max-h-[600px]"
          src={ttjTalabalari}
          alt="TTJ Talabalari"
        />
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5">
          TTJ uchun ariza topshirish
        </h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 my-16">
          <div className="text-center">
            <Link className="inline-block bg-[#F2F2F2] rounded-full p-5 shadow-lg border border-sky-700 group hover:bg-sky-700">
              <LuCopyCheck className="text-5xl text-sky-700 group-hover:text-sky-50" />
            </Link>
            <p className="text-xl font-bold text-gray-600 mt-5">
              Boshlang'ich(1) kurs uchun
            </p>
          </div>
          <div className="text-center mt-10 md:mt-0">
            <Link className="inline-block bg-[#F2F2F2] rounded-full p-5 shadow-lg border border-sky-700 group hover:bg-sky-700">
              <GoChecklist className="text-5xl text-sky-700 group-hover:text-sky-50" />
            </Link>
            <p className="text-xl font-bold text-gray-600 mt-5">
              Yuqori kusrlar uchun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalabalarTurarJoyiCom;
