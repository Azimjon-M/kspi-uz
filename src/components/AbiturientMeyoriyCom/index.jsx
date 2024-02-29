import React from "react";
import Breadcrumb from "../Breadcrumb";
import { MdKeyboardArrowRight } from "react-icons/md";
import bilishDaraja from "../../assets/pdf/bilishDaraja.pdf";

const AbiturientMeyoriyCom = () => {
  return (
    <div className="px-5 xl:px-10 mb-5 lg:mb-0 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Me'yoriy-huquqiy hujjatlar" },
          ]}
        />
      </div>
      <h1 className="text-center text-xl md:text-3xl font-semibold py-5 text-[#004269]">
        Me'yoriy-huquqiy hujjatlar
      </h1>
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg md:text-xl xl:text-2xl mb-3 text-center">
          2024/2025 oʻquv yili uchun respublika oliy taʼlim muassasalariga
          abituriyent sifatida roʻyxatdan o'tish onlayn tarzda amalga oshriladi:
        </h3>
        <ul className="mb-3">
          <li className="flex items-start md:items-center">
            <MdKeyboardArrowRight className="text-xl md:text-2xl pt-1 md:pt-0" />
            <p className="md:text-lg xl:text-xl">
              Yagona interaktiv davlat xizmatlari portali orqali (
              <a className="text-blue-500 " href="https://my.gov.uz/oz">
                my.gov.uz
              </a>
              )
            </p>
          </li>
          <li className="flex items-start md:items-center">
            <MdKeyboardArrowRight className="text-xl md:text-2xl pt-1 md:pt-0" />
            <p className="md:text-lg xl:text-xl">
              Davlat test markazining rasmiy veb-sayti orqali (
              <a className="text-blue-500 " href="https://my.uzbmb.uz/">
                my.uzbmb.uz
              </a>
              )
            </p>
          </li>
        </ul>
        <div className="text-center md:flex md:justify-between md:items-center">
          <p className="text-lg md:text-xl xl:text-2xl text-center md:text-start mb-3 md:mr-5">
            Umumta'lim fanlarini bilish darajasini baholashning milliy test
            tizimini joriy etish to'g'risidagi qaror
          </p>
          <a
            className="btn bg-[#004269] text-white hover:bg-[rgba(0,66,105,0.9)]"
            href={bilishDaraja}
            target="blank"
          >
            Ko'rish
          </a>
        </div>
      </div>
    </div>
  );
};

export default AbiturientMeyoriyCom;
