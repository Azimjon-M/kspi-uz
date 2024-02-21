import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Breadcrumb from "../Breadcrumb";
import raqamliImg from "../../assets/images/raqamli.JPG";
import oquv from "../../assets/images/oquv.jpg";
import muhandis from "../../assets/images/muhandis.jpg";
import energetik from "../../assets/images/energetik.png";
import xalqaro from "../../assets/images/xalqaro.jpg";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

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
        img: oquv,
      },
      {
        label: "Bosh muhandis",
        value: "muhandis",
        lavozim: "Bosh muhandis",
        ism: "Boybekov Muhiddin Madaminovich",
        tel: "+998 97 334 25 52",
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
        ism: "Kadirova Nigora Abdurashidovna",
        tel: "+998 97 309 86 68",
        img: xalqaro,
      },
      {
        label: "Matbuot kotibi",
        value: "kotib",
        lavozim: "Matbuot kotibi",
        ism: "Kadirova Nigora Abdurashidovna",
        tel: "+998 97 309 86 68",
        img: xalqaro,
      },
      {
        label: "Yuriskonsolt",
        value: "yuriskonsolt",
        lavozim: "Yuriskonsolt",
        ism: "Hazratqulov Hayrullo",
        tel: "+998 91 201 98 73",
        img: xalqaro,
      },
      {
        label: "Bosh auditor",
        value: "auditor",
        lavozim: "Bosh auditor",
        ism: "Alimov Elyor Akramovich",
        tel: "+998 94 440 83 31",
        img: xalqaro,
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
        link: "/markazlar/energtik",
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
                >
                  <div id={idx} className="flex items-center">
                    <div className="text-[#004269] mr-3">
                      <IoIosArrowForward />
                    </div>
                    {label}
                  </div>
                </Tab>
              ))}
            </TabsHeader>
          </div>

          <div>
            <TabsBody className="p-0 lg:w-[600px] xl:w-[800px]">
              {filteredData.map(
                ({ value, lavozim, img = "", ism, qabul, tel, link }) => (
                  <TabPanel key={value} value={value} className="py-0">
                    <div className="relative flex flex-col lg:flex-row mt-6 lg:mt-0 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-96 lg:max-w-full">
                      <div className="relative h-56 lg:h-80 -mt-6 lg:my-auto lg:py-5 mx-4 overflow-hidden rounded-xl">
                        <img
                          src={img}
                          alt={lavozim}
                          className="w-full lg:w-80 xl:w-96 h-full object-cover lg:rounded"
                        />
                      </div>
                      <div className="flex flex-col justify-between py-3">
                        <div className="p-3">
                          <h3 className="block mb-2 font-sans text-lg xl:text-2xl antialiased font-semibold leading-snug tracking-normal text-[#004269] text-center lg:text-start">
                            {lavozim}
                          </h3>
                          <h4 className="block mb-2 font-sans text-lg xl:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center lg:text-start">
                            {ism}
                          </h4>
                          <h4 className="block mb-2 font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Telefon: {tel}
                          </h4>
                        </div>
                        <div className="p-3 pt-0 lg:place-items-end">
                          <Link
                            to={link}
                            className="btn align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#004269] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:bg-[#004269]/90 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                          >
                            Batafsil ...
                          </Link>
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
    </div>
  );
};

export default MarkazlarCom;
