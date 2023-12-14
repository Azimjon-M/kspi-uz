import React from "react";
import { Link } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineLiveTv } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FormattedMessage } from "react-intl";

function Interactive() {
  return (
    <div>
      <div className="max-w-7xl mx-auto relative -top-5 z-50 bg-white rounded-lg shadow-md">
        <ul className="flex">
          <li className=" flex justify-center w-2/12">
            <Link className="flex flex-col justify-center items-center group my-9 w-full border-r border-[#ebebeb] text-center">
              <RiComputerLine className="text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase mt-2 text-[#004269] font-bold">
                <FormattedMessage id="intVertualQabulxona" />
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center w-2/12">
            <Link className="flex flex-col justify-center items-center group my-9 w-full border-r border-[#ebebeb] text-center">
              <GiBookshelf className="text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase mt-2 text-[#004269] font-bold">
                e-kutubxona
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center w-2/12">
            <Link className="flex flex-col justify-center items-center group my-9 w-full border-r border-[#ebebeb] text-center">
              <PiChalkboardTeacherFill className="text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase mt-2 text-[#004269] font-bold">
                Masofaviy ta'lim
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center w-2/12">
            <Link className="flex flex-col justify-center items-center group my-9 w-full border-r border-[#ebebeb] text-center">
              <MdOutlineLiveTv className="text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase mt-2 text-[#004269] font-bold">
                Video maruzalar
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center w-2/12">
            <Link className="flex flex-col justify-center items-center group my-9 w-full border-r border-[#ebebeb] text-center">
              <RiComputerLine className="text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase mt-2 text-[#004269] font-bold">
                Qabul-2024
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center w-2/12">
            <Link className="flex flex-col justify-center items-center group my-9 w-full text-center">
              <RiComputerLine className="text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase mt-2 text-[#004269] font-bold">
                Imtixonlarni kuzatish
              </h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Interactive;
