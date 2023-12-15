import React from "react";
import { Link } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineLiveTv } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FormattedMessage } from "react-intl";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function Interactive() {
  return (
    <div>
      <div className="max-w-xs md:max-w-7xl mx-auto relative -top-5 z-40 py-2 mb-20 bg-white rounded-lg shadow-md">
        <ul className="xs:flex xs:flex-col md:flex">
          <li className=" flex justify-center md:w-2/12">
            <Link className="flex flex-col justify-center items-center group md:my-9 my-3 w-full md:border-r border-[#ebebeb] text-center">
              <RiComputerLine className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                <FormattedMessage id="intVertualQabulxona" />
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center md:w-2/12 xs:w-full">
            <Link className="flex flex-col justify-center items-center group md:my-9 my-3 w-full md:border-r border-[#ebebeb] text-center">
              <GiBookshelf className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                <FormattedMessage id="intEKutubxona" />
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center md:w-2/12 xs:w-full">
            <Link className="flex flex-col justify-center items-center group md:my-9 my-3 w-full md:border-r border-[#ebebeb] text-center">
              <PiChalkboardTeacherFill className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                <FormattedMessage id="intMasofaviyTalim" />
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center md:w-2/12 xs:w-full">
            <Link className="flex flex-col justify-center items-center group md:my-9 my-3 w-full md:border-r border-[#ebebeb] text-center">
              <MdOutlineLiveTv className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                <FormattedMessage id="intVideoMaruzalar" />
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center md:w-2/12 xs:w-full">
            <Link className="flex flex-col justify-center items-center group md:my-9 my-3 w-full md:border-r border-[#ebebeb] text-center">
              <FaRegCalendarCheck className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                <FormattedMessage id="intQabul" />
              </h2>
            </Link>
          </li>
          <li className=" flex justify-center md:w-2/12 xs:w-full">
            <Link className="flex flex-col justify-center items-center group md:my-9 my-3 w-full text-center">
              <FaRegEye className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-75 ease-in-out" />
              <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                <FormattedMessage id="intImtixonlarniKuzatish" />
              </h2>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Statistika
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Biz osmonlarni zabt etamiz . . .
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Talabalar
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  15k
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  phd
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  171
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  O'qituvchilar
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  517
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Fan doktorlar
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  10
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interactive;
