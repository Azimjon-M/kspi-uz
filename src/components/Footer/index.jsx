import React from "react";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import Logo from "../../assets/icons/logo_kspi.png";

const Footer = () => {
  return (
    <footer className="w-full h-auto relative flex flex-col text-white pt-3">
      <div className="absolute top-0 left-0 w-full h-full">
        <ul className="background-footer w-full h-full bottom-0 absolute -z-10 overflow-hidden">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* Biz bilan bog'lanish */}
      <div className="flex justify-center md:justify-end mb-3 md:pr-10 z-0">
        <Link
          target="blank"
          to={"https://t.me/kspi_official"}
          className="mr-4 group"
        >
          <FaTelegram className="h-6 lg:h-7 w-auto group-hover:bg-[#0088cc] rounded-full" />
        </Link>
        <Link
          target="blank"
          to={"https://www.instagram.com/kspi_uz/"}
          className="mr-4 group"
        >
          <FaSquareInstagram className="h-6 lg:h-7 w-auto group-hover:bg-[#690000] rounded-[3px]" />
        </Link>
        <Link
          target="blank"
          to={"https://www.youtube.com/@qoqondpi296"}
          className="mr-4 group"
        >
          <PiYoutubeLogoFill className="h-6 lg:h-7 w-auto group-hover:text-[#FF0000] rounded-[15px]" />
        </Link>
        <Link
          target="blank"
          to={"https://www.facebook.com/kspi.uz.56"}
          className="mr-4 group"
        >
          <FaSquareFacebook className="h-6 lg:h-7 w-auto group-hover:bg-[#316FF6]" />
        </Link>
      </div>
      <div className="md:grid md:grid-cols-2 lg:flex lg:justify-evenly lg:items-start px-5 z-0">
        {/* Asosiy */}
        <div className="flex items-center mb-3">
          {/* about */}
          <div className="mb-3">
            <div className="flex items-end mb-3">
              <img className="w-10 mr-3" src={Logo} alt="" />
              <h1 className="font-bold">
                Qo'qon davlat <br /> pedagogika instituti
              </h1>
            </div>
            <p className="md:w-[250px] lg:w-[350px] xl:w-[450px]">
              Qo'qon davlat pedagogika instituti 1931-yil yanvar oyida kechki
              pedagogika instituti sifatida tashkil etilgan. Institut 1939-1940
              o'quv yilidan boshlab kunduzgi davlat o'qituvchilar institutiga
              aylantirilgan.
            </p>
          </div>
        </div>

        {/* Manzil */}
        <div className="mb-3">
          <h1 className="font-bold mb-3">Manzil va aloqa</h1>
          <p>Qo'qon shaxri, Turon ko'chasi, 23-uy</p>
          <ul>
            <li>
              <Link
                to="mailto:kspi_info@edu.uz"
                className="transform hover:translate-x-2 transition duration-300 ease-in-out"
              >
                kspi_info@edu.uz
              </Link>
            </li>
            <li>
              <Link
                to="tel:+998 73 542 38 38"
                className="transform hover:translate-x-2 transition duration-300 ease-in-out"
              >
                +998 73 542 38 38
              </Link>
            </li>
          </ul>
        </div>

        {/* Foydali */}
        <div className="mb-3">
          <h1 className="font-bold mb-3">Foydali linklar</h1>
          <ul>
            <li>
              <Link to="yangiliklar">Yangiliklar</Link>
            </li>
            <li>
              <Link to="qabulxona">Virtual qabulxona</Link>
            </li>
            <li>
              <Link>RSS</Link>
            </li>
          </ul>
        </div>

        {/* Saytga tashrif */}
        <div className="mb-3">
          <h1 className="font-bold mb-3">Saytga tashriflar soni</h1>
          <p className="lg:text-center font-bold text-3xl">5k+</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#113246] text-center md:flex md:justify-center px-2 py-2">
        <p className="mr-3">QDPI ©2024</p>
        <p>
          Sayt ishlab chiquvchisi: <b>QDPI IT Park</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
