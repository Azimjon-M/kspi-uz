import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import APIElon from "../../services/elon";
import { FaCalendarAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import rrr from "../../assets/images/call.jpg";

function ElonBatafsilCom() {
  const { id } = useParams();

  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await APIElon.getById(id);
        setAnnouncement(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncement();
  }, [id]);

  console.log(announcement);
  
  return (
    <div className="bg-[#f4f4f4]">
      <div className="bg bg-[#2F2424] text-white py-10">
        <div className="max-w-7xl mx-auto pl-[24.5%]">
          <p className="text-lg uppercase">{announcement.detail}</p>
          <h1 className="text-4xl">{announcement.title}</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        <div className="relative -top-28 shadow-xl">
          <div className="h-96 border border-white">
            <img src={rrr} className="w-full h-full" alt="" />
          </div>
          <div className="p-8 bg-white">
            <p className="flex items-start">
              <FaCalendarAlt className="text-xl text-red-800 mt-1" />
              <span className="pl-4 text-xl">
                <span className="font-bold">2024-yil 28-mart, payshanba,</span>
                <br />
                <span className="font-light">
                  {announcement.boshlanish_vaqti.slice(8, 10)} dan 14:30 gacha PT
                </span>
              </span>
            </p>
            <p className="flex items-start mt-7">
              <FaLocationDot className="text-xl text-yellow-500 mt-1" />
              <span className="pl-4 text-xl">
                <span className="font-bold">{announcement.adress}</span>
              </span>
            </p>
            <p className="flex items-start mt-7">
              <IoShareSocial className="text-xl text-cyan-700 mt-1" />
              <span className="pl-4 text-xl">
                <span className="font-light">Bizning ijtimoiy tarmoqlar</span>
                <span className="flex gap-3 mt-3 text-2xl text-sky-800">
                  <a href="https://www.instagram.com/kspi_uz/">
                    <TiSocialInstagram className="hover:rotate-[360deg] duration-500 hover:scale-150" />
                  </a>
                  <FaYoutube className="hover:rotate-[360deg] duration-500 hover:scale-150" />
                  <FaTelegramPlane className="hover:rotate-[360deg] duration-500 hover:scale-150" />
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="col-span-2 pt-7 pl-8">
          <h1 className="text-3xl font-bold">Tadbir tafsilotlari:</h1>
          <p className="text-lg">{announcement.field}</p>
        </div>
      </div>
    </div>
  );
}

export default ElonBatafsilCom;
