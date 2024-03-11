import React, { useState } from "react";
import { PiStudentFill } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import DTSvaMalakaPDF from "../../assets/pdf/DTSvaMalaka2020.pdf";

const data1PDF = [
  {
    id: 1,
    sana: "07.09.2023",
    name: "Oliy ta'limning davlat ta'lim standarti 2020",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 2,
    sana: "07.09.2023",
    name: "Oliy ta'limning davlat ta'lim standarti 2021",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 3,
    sana: "07.09.2023",
    name: "60110300-Maktabgacha ta'lim psixologiyasi va pedagogikasi malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 4,
    sana: "07.09.2023",
    name: "60112000-Chaqiriqqacha harbiy ta'lim malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 5,
    sana: "07.09.2023",
    name: "60110100-Pedagogika(Qo'shimcha tarbiya fani o'qituvchisi) malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 6,
    sana: "07.09.2023",
    name: "60110200-Maktabgacha ta'lim malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 7,
    sana: "07.09.2023",
    name: "60110600-Matematika va informatika malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 8,
    sana: "07.09.2023",
    name: "60110700-Fizika va astronomiya malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 9,
    sana: "07.09.2023",
    name: "60110800-Kimyo malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 10,
    sana: "07.09.2023",
    name: "60110300-Biologiya malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 11,
    sana: "07.09.2023",
    name: "60111000-Geografiya va iqtisodiy bilim asoslari malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 12,
    sana: "07.09.2023",
    name: "60111100-Tarix malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 13,
    sana: "07.09.2023",
    name: "60111200-Tasviriy san'at va muxandislik grafikasi malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 14,
    sana: "07.09.2023",
    name: "60111300-Musiqa ta'lim malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 15,
    sana: "07.09.2023",
    name: "60111400-O'zbek tili adabiyoti malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
];

const data2PDF = [
  {
    id: 1,
    sana: "07.09.2023",
    name: "Oliy ta'limning davlat ta'lim standarti 2020",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 2,
    sana: "07.09.2023",
    name: "Oliy ta'limning davlat ta'lim standarti 2021",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 3,
    sana: "07.09.2023",
    name: "60110300-Maktabgacha ta'lim psixologiyasi va pedagogikasi malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
];

const data3PDF = [
  {
    id: 1,
    sana: "07.09.2023",
    name: "Oliy ta'limning davlat ta'lim standarti 2020",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 2,
    sana: "07.09.2023",
    name: "Oliy ta'limning davlat ta'lim standarti 2021",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 3,
    sana: "07.09.2023",
    name: "60110300-Maktabgacha ta'lim psixologiyasi va pedagogikasi malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 4,
    sana: "07.09.2023",
    name: "60110300-Maktabgacha ta'lim psixologiyasi va pedagogikasi malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
  {
    id: 5,
    sana: "07.09.2023",
    name: "60110300-Maktabgacha ta'lim psixologiyasi va pedagogikasi malaka talablari",
    pdf: "../../assets/pdf/DTSvaMalaka2020.pdf",
  },
];

function FanDasturlariCom() {
  const [showContent, setShowContent] = useState(1);

  const handleClick = (idx) => {
    setShowContent(idx);
  };

  return (
    <div className="max-w-7xl xl:mx-auto py-10 mx-4 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <h1 className="text-md text-4xl font-bold text-[#004269] text-center">
        Fan dasturlari
      </h1>
      <div className="md:flex mt-4 md:mt-8">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <button
              onClick={() => handleClick(1)}
              className={`${
                showContent === 1 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Pedagogika
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(2)}
              className={`${
                showContent === 2 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Maktabgacha ta'lim
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 3 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Maktabgacha TPP
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 4 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Boshlang'ich ta'lim
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 5 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Matematika va Informatika
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 6 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Fizika va Astronomiya
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 7 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Kimyo
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 8 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Biologiya
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 9 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Geografiya va IBA
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 10 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Tarix
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 11 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Tasviriy san'at va MG
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 11 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Musiqa ta'limi
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 11 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              O'zbek tili va Adabiyoti
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 12 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Родной язик
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 13 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Русский язик в ИГ
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 14 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Xorijiy til va adabiyoti
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 15 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Milliy g'oya va HA
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 16 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Jismoniy madaniyat
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 17 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Jismoniy madaniyat
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 18 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Texnologik ta'lim
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 19 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Maktab menejmenti
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 20 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Maktabgacha va BTXT
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 21 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              MP (Logopediya)
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 22 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              MP (Oligofrenopedagogika)
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 23 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              MP (Surdopedagogika)
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 24 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Amaliy psixologiya
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(3)}
              className={`${
                showContent === 25 ? "bg-blue-500 text-white" : "bg-gray-50"
              } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <PiStudentFill className="w-4 h-4 me-2" />
              Fakultetlararo
            </button>
          </li>
        </ul>
        <div>
          <div
            className={`${
              showContent === 1 ? "" : "hidden"
            } p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full`}
          >
            <div className="relative shadow-md overflow-x-auto rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="md:text-base text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="pl-2 md:pl-6 py-4">
                      №
                    </th>
                    <th scope="col" className="px-2 md:px-6 py-4">
                      Hujjat nomi
                    </th>
                    <th
                      scope="col"
                      className="px-2 md:px-6 py-4 hidden md:block"
                    >
                      Sana
                    </th>
                    <th scope="col" className="px-2 md:px-6 py-4">
                      Batafsil
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  {data1PDF &&
                    data1PDF.map((item) => {
                      const { id, sana, name } = item;
                      return (
                        <tr
                          key={id}
                          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200"
                        >
                          <th
                            scope="row"
                            className="pl-2 md:pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {id}
                          </th>
                          <td className="px-2 md:px-6 py-4">{name}</td>
                          <td className="px-2 md:px-6 py-4 hidden md:block">
                            {sana}
                          </td>
                          <td className="px-2 md:px-6 py-41">
                            <a
                              href={DTSvaMalakaPDF}
                              className="text-blue-600 dark:text-blue-500"
                              target="blank"
                            >
                              <LuDownload className="text-xl" />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className={`${
              showContent === 2 ? "" : "hidden"
            } p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full`}
          >
            <div className="relative shadow-md overflow-x-auto rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="md:text-base text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="pl-2 md:pl-6 py-4">
                      №
                    </th>
                    <th scope="col" className="px-2 md:px-6 py-4">
                      Hujjat nomi
                    </th>
                    <th
                      scope="col"
                      className="px-2 md:px-6 py-4 hidden md:block"
                    >
                      Sana
                    </th>
                    <th scope="col" className="px-2 md:px-6 py-4">
                      Batafsil
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  {data2PDF &&
                    data2PDF.map((item) => {
                      const { id, sana, name } = item;
                      return (
                        <tr
                          key={id}
                          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200"
                        >
                          <th
                            scope="row"
                            className="pl-2 md:pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {id}
                          </th>
                          <td className="px-2 md:px-6 py-4">{name}</td>
                          <td className="px-2 md:px-6 py-4 hidden md:block">
                            {sana}
                          </td>
                          <td className="px-2 md:px-6 py-41">
                            <a
                              href={DTSvaMalakaPDF}
                              className="text-blue-600 dark:text-blue-500"
                              target="blank"
                            >
                              <LuDownload className="text-xl" />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className={`${
              showContent === 3 ? "" : "hidden"
            } p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full`}
          >
            <div className="relative shadow-md overflow-x-auto rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="md:text-base text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="pl-2 md:pl-6 py-4">
                      №
                    </th>
                    <th scope="col" className="px-2 md:px-6 py-4">
                      Hujjat nomi
                    </th>
                    <th
                      scope="col"
                      className="px-2 md:px-6 py-4 hidden md:block"
                    >
                      Sana
                    </th>
                    <th scope="col" className="px-2 md:px-6 py-4">
                      Batafsil
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  {data3PDF &&
                    data3PDF.map((item) => {
                      const { id, sana, name } = item;
                      return (
                        <tr
                          key={id}
                          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200"
                        >
                          <th
                            scope="row"
                            className="pl-2 md:pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {id}
                          </th>
                          <td className="px-2 md:px-6 py-4">{name}</td>
                          <td className="px-2 md:px-6 py-4 hidden md:block">
                            {sana}
                          </td>
                          <td className="px-2 md:px-6 py-41">
                            <a
                              href={DTSvaMalakaPDF}
                              className="text-blue-600 dark:text-blue-500"
                              target="blank"
                            >
                              <LuDownload className="text-xl" />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FanDasturlariCom;
