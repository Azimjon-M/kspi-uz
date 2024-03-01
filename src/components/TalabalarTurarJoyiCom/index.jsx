import React from "react";
import StudentsHouse from "../../assets/images/StudentsHouse.jpg";
import TTJRaxbari from "../../assets/images/TTJRaxbari.png";

function TalabalarTurarJoyiCom() {
  return (
    <div>
      <div className="w-full max-h-[20%] md:max-h-screen">
        <img
          src={StudentsHouse}
          alt=""
          className="w-full h-full lg:h-screen object-cover"
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269] mt-5 md:mt-12">
        Talabalar turar joyiga xush kelibsiz
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-2 mt-5 md:mt-12">
        <div className="flex justify-center">
          <img
            src={TTJRaxbari}
            className="max-w-80 max-h-80 rounded-full"
            alt=""
          />
        </div>
        <div className="pr-20">
          <p className="text-lg font-bold">
            Talabalar shaharchasida yashash yangi odamlar bilan tanishish va
            doimiy do'stlikni rivojlantirish uchun son-sanoqsiz imkoniyatlarni
            taqdim etadi.
          </p>
        </div>
      </div>
      <div className="bg-[#F2F2F2]">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default TalabalarTurarJoyiCom;
