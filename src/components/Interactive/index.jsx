import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineLiveTv } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import TextTranslate from "../TextTranslate";
import { FaRegCalendarCheck, FaRegEye } from "react-icons/fa";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Interactive() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative -top-5 z-2 py-2 mb-20 bg-white rounded-lg shadow-md">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <li className="w-full">
              <Link
                to="/qabulxona"
                className="flex flex-col justify-center items-center group md:my-9 my-3 sm:border-r border-[#ebebeb] text-center"
              >
                <RiComputerLine className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                  <TextTranslate id="intVertualQabulxona" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to={"https://unilibrary.uz/"}
                target="blank"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full md:border-r border-[#ebebeb] text-center"
              >
                <GiBookshelf className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                  <TextTranslate id="intEKutubxona" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="http://moodle.kspi.uz/doc/page/login.asp?_1707299150792"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full sm:border-r border-[#ebebeb] text-center"
              >
                <PiChalkboardTeacherFill className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                  <TextTranslate id="intMasofaviyTalim" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/videomaruza"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full md:border-r border-[#ebebeb] text-center"
              >
                <MdOutlineLiveTv className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                  <TextTranslate id="intVideoMaruzalar" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/qabul"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full sm:border-r border-[#ebebeb] text-center"
              >
                <FaRegCalendarCheck className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                  <TextTranslate id="intQabul" />
                </h2>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/kuzatish"
                className="flex flex-col justify-center items-center group md:my-9 my-3 w-full text-center"
              >
                <FaRegEye className="text-[40px] md:text-[50px] text-[#a3a1a2] group-hover:scale-125 group-hover:text-[#004269] transition-all duration-200 ease-linear" />
                <h2 className="uppercase text-xs md:text-base mt-2 text-[#004269] font-bold">
                  <TextTranslate id="intImtixonlarniKuzatish" />
                </h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <VisibilitySensor onChange={handleVisibilityChange}>
        <div className="bg-slate-100 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-[#004269] sm:text-4xl">
                  <TextTranslate id="intStatistika" />
                </h2>
                <p className="text-lg md:text-xl leading-8 text-gray-600">
                  <TextTranslate id="intStatisTaytil" />
                </p>
              </div>
              <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col bg-slate-400 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    <TextTranslate id="intStatisTalabalar" />
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {isVisible && <CountUp end={100} duration={3} />}
                  </dd>
                </div>
                <div className="flex flex-col bg-slate-400 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    <TextTranslate id="intStatisPhd" />
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {isVisible && <CountUp end={171} duration={3} />}
                  </dd>
                </div>
                <div className="flex flex-col bg-slate-400 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    <TextTranslate id="intStatisOqituvchilar" />
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {isVisible && <CountUp end={517} duration={3} />}
                  </dd>
                </div>
                <div className="flex flex-col bg-slate-400 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    <TextTranslate id="intStatisFanDoktorlar" />
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {isVisible && <CountUp end={10} duration={3} />}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
}

export default Interactive;
