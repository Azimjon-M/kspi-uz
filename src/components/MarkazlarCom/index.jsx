import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Breadcrumb from "../Breadcrumb";
import raqamliImg from "../../assets/images/raqamli.JPG";
import axborot from "../../assets/images/arm.jpg";
import muhandis from "../../assets/images/muhandis.jpg";
import energetik from "../../assets/images/energetik/boshliq.JPG";
import yordamchi from "../../assets/images/xalqaro.jpg";
import yuriskonsolt from "../../assets/images/yurist/boshliq.JPG";
import matbuot from "../../assets/images/xalqaro.jpg";
import auditor from "../../assets/images/auditor/boshliq.JPG";
// import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const MarkazlarCom = () => {
  const data = useMemo(
    () => [
      {
        label: "Raqamli ta'lim texnalogiyalari markazi",
        value: "raqamli",
        lavozim: "Raqamli ta'lim texnalogiyalari markazi boshlig'i",
        ism: "Ubaydullayev Muhammadjon Abdusamad o'g'li",
        tel: "+998 99 998 00 57",
        img: raqamliImg,
      },
      {
        label: "Axborot resurs markazi",
        value: "axborot",
        lavozim: "Axborot resurs markazi boshlig'i",
        ism: "Meliqo'ziyev Dadaqo'zi Jo'raqo'zi o'g'li",
        tel: "+998 91 323 04 77",
        img: axborot,
      },
      {
        label: "Bosh muhandis",
        value: "muhandis",
        lavozim: "Bosh muhandis",
        ism: "",
        tel: "+998 9",
        img: muhandis,
      },
      {
        label: "Bosh energetik",
        value: "energetik",
        lavozim: "Bosh energetik",
        ism: "Ikromov Aziz",
        tel: "+998 94 495 00 93",
        img: energetik,
      },
      {
        label: "Rektor yordamchisi",
        value: "rekYordamchi",
        lavozim: "Rektor yordamchisi",
        ism: "Hoshimov Murodjon Solijonovich",
        tel: "+998 91 695 15 15",
        img: yordamchi,
      },
      {
        label: "Matbuot kotibi",
        value: "kotib",
        lavozim: "Matbuot kotibi",
        ism: "Begmatov Oybek Rustamovich",
        tel: "+998 90 556 30 01",
        img: matbuot,
      },
      {
        label: "Yuriskonsolt",
        value: "yuriskonsolt",
        lavozim: "Yuriskonsolt",
        ism: "Hazratqulov Hayrullo",
        tel: "+998 91 201 98 73",
        img: yuriskonsolt,
      },
      {
        label: "Bosh auditor",
        value: "auditor",
        lavozim: "Bosh auditor",
        ism: "Alimov Elyor Akramovich",
        tel: "+998 94 440 83 31",
        img: auditor,
      },
    ],
    []
  );

  const [filteredData, setFilteredData] = useState(data);

  const links = useMemo(
    () => [
      {
        value: "raqamli",
        link: "/markazlar/raqamli-talim",
      },
      {
        value: "axborot",
        link: "/markazlar/axborot",
      },
      {
        value: "muhandis",
        link: "/markazlar/muhandis",
      },
      {
        value: "energetik",
        link: "/markazlar/energetik",
      },
      {
        value: "rekYordamchi",
        link: "/markazlar/rektor-yordamchisi",
      },
      {
        value: "kotib",
        link: "/markazlar/matbuot-kotib",
      },
      {
        value: "yuriskonsolt",
        link: "/markazlar/yuriskonsolt",
      },
      {
        value: "auditor",
        link: "/markazlar/auditor",
      },
    ],
    []
  );

  useEffect(() => {
    const allData = data.map((item) => {
      const link = links.find((linkItem) => linkItem.value === item.value);
      return { ...item, link: link ? link.link : "" };
    });
    setFilteredData(allData);
  }, [links, data]);

  useEffect(() => {
    const a = document.getElementById("0");
    a.click();
  }, []);

  return (
    <div className="px-5 py-3 md:px-10 mb-3 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[{ text: "Bosh sahifa", link: "/" }, { text: "Markazlar" }]}
        />
      </div>
      <h2 className="text-xl md:text-3xl font-bold my-5 text-[#004269] text-center">
        Markazlar
      </h2>
      <div className="max-w-7xl mx-auto">
        <Tabs
          className="flex flex-col md:flex-row lg:justify-evenly"
          value="html"
          orientation="vertical"
        >
          <div>
            <TabsHeader className="max-w-96 md:max-w-80 lg:w-96 border-2 border-[#004269] p-5 mb-5">
              {filteredData.map(({ label, value }, idx) => (
                <Tab
                  className="flex flex-col items-start text-start font-semibold"
                  key={value}
                  value={value}
                  id={idx}
                >
                  <div className="flex items-center">
                    <div className="text-[#004269] mr-3">
                      <IoIosArrowForward />
                    </div>
                    {label}
                  </div>
                </Tab>
              ))}
            </TabsHeader>
          </div>

          <div className="lg:w-[600px] xl:w-[800px]">
            <TabsBody className="p-0 mb-3">
              {filteredData.map(
                ({
                  value,
                  lavozim,
                  img = "",
                  ism,
                  tel,
                  link,
                  qabul,
                  mutahasisligi,
                  vazifasi,
                }) => (
                  <TabPanel key={value} value={value} className="py-0">
                    <div className="bg-white shadow-md bg-clip-border rounded-xl px-3">
                      <div className="relative flex flex-col lg:flex-row mt-6 lg:mt-0 text-gray-700 max-w-96 lg:max-w-full border-b-2 border-[#004269] py-3">
                        <div className="relative -mt-6 px-3 lg:px-0 md:h-56 lg:h-auto lg:my-auto lg:overflow-hidden rounded-xl md:mb-3 lg:mb-0">
                          <img
                            src={img}
                            alt={lavozim}
                            className="w-full mb-3 lg:mb-0 h-56 lg:w-[240px] lg:h-[270px] xl:w-[250px] xl:h-[280px] object-cover rounded"
                          />
                        </div>
                        <div className="flex flex-col justify-between xl:py-5 xl:mr-5">
                          <div className="px-3">
                            <h3 className="block mb-2 font-sans text-lg xl:text-2xl antialiased font-semibold leading-snug tracking-normal text-[#004269] text-center lg:text-start">
                              {lavozim}
                            </h3>
                            <h4 className="block mb-2 font-sans text-lg xl:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center lg:text-start">
                              {ism}
                            </h4>
                            <h4 className="block mb-2 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              {mutahasisligi}
                            </h4>
                            <h4 className="block mb-2 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              Qabul kunlari: {qabul}
                            </h4>
                            <h4 className="block mb-2 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              Telefon: {tel}
                            </h4>
                          </div>
                          {/* <div className="p-3 pt-0 lg:place-items-end text-center lg:text-start">
                            <Link
                              to={link}
                              className="btn align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#004269] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:bg-[#004269]/90 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            >
                              Batafsil ...
                            </Link>
                          </div> */}
                        </div>
                      </div>
                      <div className="m-3 max-w-96 lg:max-w-full">
                        <div>
                          <b>{lavozim} vazifasi: </b>
                          <span>{vazifasi}</span>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                )
              )}
            </TabsBody>
          </div>
        </Tabs>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#004269]">
          Bizning jamoa
        </h2>
        <div className="mt-10 flex flex-wrap justify-center -m-4">
          {/* ITEM */}
          <div className="m-4 max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 w-48 h-48 rounded-full overflow-hidden mx-auto">
                <img
                  src="https://i.pinimg.com/736x/cf/43/ae/cf43ae96ec7f5badf1113a09f71ce3d3.jpg"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">
                Palonchiyeva Pistonchi
              </p>
              <p className="text-sm text-blue-500">Katta o'qituvchi</p>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://t.me/nodirjon0927"
                  target="blank"
                  className="mr-2"
                >
                  <FaTelegramPlane />
                </a>
                <a href="tel:+998992226660" target="blank" className="mr-2">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:nodirbek0927@mail.ru" target="blank">
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>
          {/* ITEM */}
          <div className="m-4 max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 w-48 h-48 rounded-full overflow-hidden mx-auto">
                <img
                  src="https://i.pinimg.com/736x/cf/43/ae/cf43ae96ec7f5badf1113a09f71ce3d3.jpg"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">
                Palonchiyeva Pistonchi
              </p>
              <p className="text-sm text-blue-500">Katta o'qituvchi</p>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://t.me/nodirjon0927"
                  target="blank"
                  className="mr-2"
                >
                  <FaTelegramPlane />
                </a>
                <a href="tel:+998992226660" target="blank" className="mr-2">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:nodirbek0927@mail.ru" target="blank">
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>
          {/* ITEM */}
          <div className="m-4 max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 w-48 h-48 rounded-full overflow-hidden mx-auto ">
                <img
                  src="https://i.pinimg.com/736x/cf/43/ae/cf43ae96ec7f5badf1113a09f71ce3d3.jpg"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">
                Palonchiyeva Pistonchi
              </p>
              <p className="text-sm text-blue-500">Katta o'qituvchi</p>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://t.me/nodirjon0927"
                  target="blank"
                  className="mr-2"
                >
                  <FaTelegramPlane />
                </a>
                <a href="tel:+998992226660" target="blank" className="mr-2">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:nodirbek0927@mail.ru" target="blank">
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>
          {/* ITEM */}
          <div className="m-4 max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 w-48 h-48 rounded-full overflow-hidden mx-auto">
                <img
                  src="https://i.pinimg.com/736x/cf/43/ae/cf43ae96ec7f5badf1113a09f71ce3d3.jpg"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">
                Palonchiyeva Pistonchi
              </p>
              <p className="text-sm text-blue-500">Katta o'qituvchi</p>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://t.me/nodirjon0927"
                  target="blank"
                  className="mr-2"
                >
                  <FaTelegramPlane />
                </a>
                <a href="tel:+998992226660" target="blank" className="mr-2">
                  <BsTelephoneFill />
                </a>
                <a href="mailto:nodirbek0927@mail.ru" target="blank">
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for other instructors */}
        </div>
      </div>
    </div>
  );
};

export default MarkazlarCom;
