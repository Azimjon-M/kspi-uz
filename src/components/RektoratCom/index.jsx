import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Breadcrumb from "../Breadcrumb";
import rektor from "../../assets/images/rektor.png";
import oquv from "../../assets/images/oquv.jpg";
import ilmiy from "../../assets/images/ilmiy.jpg";
import moliya from "../../assets/images/moliya.jpg";
import xalqaro from "../../assets/images/xalqaro.jpg";
import yoshlar from "../../assets/images/yoshlar.jpg";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const RektoratCom = () => {
  const data = useMemo(
    () => [
      {
        label: "Rektor",
        value: "rektor",
        lavozim: "Rektor",
        qabul: "Dushanba-Shanba, 10:00 - 18:00",
        ism: "Xodjayeva Dilnoza Shavkatovna",
        tel: "+998 73 542 38 38",
        img: rektor,
      },
      {
        label: "O'quv ishlari bo'yicha prorektor",
        value: "oquv",
        lavozim: "O'quv ishlari bo'yicha prorektor",
        qabul: "Dushanba-Shanba, 10:00 - 18:00",
        ism: "Nargiza Muzaffarovna Babayeva",
        tel: "+998 91 323 04 77",
        img: oquv,
      },
      {
        label: "Ilmiy ishlar bo'yicha prorektor",
        value: "ilmiy",
        lavozim: "Ilmiy ishlar bo'yicha prorektor",
        qabul: "Dushanba-Shanba, 10:00 - 18:00",
        ism: "Nurbek Jo’rayev Sa’dullayevich",
        tel: "+998 88 941 28 28",
        img: ilmiy,
      },
      {
        label: "Moliya va iqtisod bo'yicha prorektor",
        value: "moliya",
        lavozim: "Moliya va iqtisod bo'yicha prorektor",
        qabul: "Dushanba-Shanba, 10:00 - 18:00",
        ism: "Jasurbek Azamov Murodovich",
        tel: "+998 90 588 61 27",
        img: moliya,
      },
      {
        label:
          "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha prorektor",
        value: "yoshlar",
        lavozim:
          "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha prorektor",
        qabul: "Dushanba-Shanba, 10:00 - 18:00",
        ism: "Oxunov Isroiljon Islomovich",
        tel: "+998 90 317 82 10",
        img: yoshlar,
      },
      {
        label: "Xalqaro hamkorlik masalalari bo'yicha prorektor",
        value: "xalqaro",
        lavozim: "Xalqaro hamkorlik masalalari bo'yicha prorektor",
        qabul: "Dushanba-Shanba, 10:00 - 18:00",
        ism: "Kadirova Nigora Abdurashidovna",
        tel: "+998 97 309 86 68",
        img: xalqaro,
      },
    ],
    []
  );

  const [filteredData, setFilteredData] = useState(data);

  const links = useMemo(
    () => [
      {
        value: "xalqaro",
        link: "/rektorat/xalqaro",
      },
      {
        value: "yoshlar",
        link: "/rektorat/yoshlar-masalalari",
      },
      {
        value: "moliya",
        link: "/rektorat/moliya",
      },
      {
        value: "ilmiy",
        link: "/rektorat/ilmiy-ishlar",
      },
      {
        value: "oquv",
        link: "/rektorat/oquv-ishlari",
      },
      {
        value: "rektor",
        link: "/rektorat/rektor",
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
          steps={[{ text: "Bosh sahifa", link: "/" }, { text: "Rektorat" }]}
        />
      </div>
      <h2 className="text-xl md:text-3xl font-bold my-5 text-[#004269] text-center">
        Rektorat
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
                      <div className="relative -mt-6 px-3 lg:px-0 md:h-56 lg:h-auto lg:my-auto lg:overflow-hidden rounded-xl">
                        <img
                          src={img}
                          alt={lavozim}
                          className="w-full mb-3 lg:mb-0 h-56 lg:w-[320px] lg:h-[340px] xl:w-[300px] xl:h-[340px] object-cover rounded"
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
                            Qabul kunlari: {qabul}
                          </h4>
                          <h4 className="block mb-2 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Telefon: {tel}
                          </h4>
                        </div>
                        <div className="p-3 pt-0 lg:place-items-end text-center lg:text-start">
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

export default RektoratCom;
