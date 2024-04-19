import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TextTranslate from "../TextTranslate";
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
        label: <TextTranslate id="rektoratRektor" />,
        value: "rektor",
        lavozim: <TextTranslate id="rektoratRektor" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        ism: <TextTranslate id="rektoratRektorIsm" />,
        tel: "+998 73 542 38 38",
        mutahasisligi: <TextTranslate id="rektoratRektorMutaxasis" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: rektor,
      },
      {
        label: <TextTranslate id="rektoratOquv" />,
        value: "oquv",
        lavozim: <TextTranslate id="rektoratOquv" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        ism: <TextTranslate id="rektoratOquvIsm" />,
        tel: "+998 91 323 04 77",
        mutahasisligi: "",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: oquv,
      },
      {
        label: <TextTranslate id="rektoratIlmiy" />,
        value: "ilmiy",
        lavozim: <TextTranslate id="rektoratIlmiy" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        ism: <TextTranslate id="rektoratIlmiyIsm" />,
        tel: "+998 88 941 28 28",
        mutahasisligi: "",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: ilmiy,
      },
      {
        label: <TextTranslate id="rektoratMoliya" />,
        value: "moliya",
        lavozim: <TextTranslate id="rektoratMoliya" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        ism: <TextTranslate id="rektoratMoliyaIsm" />,
        tel: "+998 90 588 61 27",
        mutahasisligi: "",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: moliya,
      },
      {
        label:
          <TextTranslate id="rektoratYoshlar" />,
        value: "yoshlar",
        lavozim:
          <TextTranslate id="rektoratYoshlar" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        ism: <TextTranslate id="rektoratYoshlarIsm" />,
        tel: "+998 90 317 82 10",
        mutahasisligi: "",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: yoshlar,
      },
      {
        label: <TextTranslate id="rektoratXalqaro" />,
        value: "xalqaro",
        lavozim: <TextTranslate id="rektoratXalqaro" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        ism: <TextTranslate id="rektoratXalqaroIsm" />,
        tel: "+998 97 309 86 68",
        mutahasisligi: "",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
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
          steps={[{ text: <TextTranslate id="boshSahifa" />, link: "/" }, { text: <TextTranslate id="rektorat" /> }]}
        />
      </div>
      <h2 className="text-xl md:text-3xl font-bold my-5 text-[#004269] text-center">
      <TextTranslate id="rektorat" />
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
                    <div className="bg-white shadow-md bg-clip-border rounded-xl px-1">
                      <div className="relative flex flex-col lg:flex-row mt-6 lg:mt-0 text-gray-700 max-w-96 lg:max-w-full py-3">
                        <div className="relative -mt-6 px-3 lg:px-0 md:h-56 lg:h-auto lg:my-auto lg:overflow-hidden rounded-xl md:mb-3 lg:mb-0">
                          <img
                            src={img}
                            alt={lavozim}
                            className="w-full mb-3 lg:mb-0 h-56 lg:w-[240px] lg:h-[270px] xl:w-[250px] xl:h-[280px] object-cover rounded"
                          />
                        </div>
                        <div className="flex flex-col justify-between lg:justify-evenly xl:py-5 xl:mr-5">
                          <div className="px-3">
                            <h3 className="block mb-2 lg:mb-5 font-sans text-lg xl:text-2xl antialiased font-semibold leading-snug tracking-normal text-[#004269] text-center lg:text-start max-w-[450px]">
                              {lavozim}
                            </h3>
                            <h4 className="block mb-2 lg:mb-4 font-sans text-lg xl:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center lg:text-start">
                              {ism}
                            </h4>
                            <h4 className="block mb-2 lg:mb-3 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              {mutahasisligi}
                            </h4>
                            <h4 className="block mb-2 lg:mb-3 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            <TextTranslate id="qabul" />: {qabul}
                            </h4>
                            <h4 className="block mb-2 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            <TextTranslate id="telefon" />: {tel}
                            </h4>
                          </div>
                          <div className={`${value === "rektor" ? "block" : "hidden"} p-3 pt-0 lg:place-items-end text-center lg:text-start`}>
                            <Link
                              to="/qabulxona"
                              className="btn align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#004269] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:bg-[#004269]/90 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            >
                              <TextTranslate id="rektoratMurojaat" />
                            </Link>
                          </div>
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
