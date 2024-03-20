import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import rrr from "../../assets/images/call.jpg";

function BarchaElonlarCom() {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="max-w-5xl mx-auto md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)] py-20">
        <div className="flex p-5 shadow-md bg-white hover:-translate-y-1 duration-150 hover:shadow-xl">
          <div className="w-60 h-52">
            <img src={rrr} className="w-full h-52 object-center" alt="" />
          </div>
          <div className="pl-5">
            <h3 className="text-base uppercase font-semibold text-red-800">
              Ishlash
            </h3>
            <a
              href="dd"
              className="text-lg md:text-2xl font-bold text-slate-600 line-clamp-2 md:my-2 hover:text-red-700 hover:underline"
            >
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting
            </a>
            <p className="flex text-lg items-center">
              <FaRegCalendarAlt />
              <span className="pl-2">
                Chorshanba, 2024-yil 20-mart, 19:30 dan 21:00 PT
              </span>
            </p>
            <p className="flex text-lg items-center mt-2">
              <IoLocationSharp />
              <span className="pl-2 text-blue-500">
                Braun musiqa markazi, Kempbell resital zali
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarchaElonlarCom;
