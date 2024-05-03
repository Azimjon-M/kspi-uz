import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TextTranslate from "../TextTranslate";
import Breadcrumb from "../Breadcrumb";
import fizika from "../../assets/images/fak_fizika.jpg";
import boshlan from "../../assets/images/fak_boshlan.jpg";
import uzbek from "../../assets/images/fak_uzbek.jpg";
import ped from "../../assets/images/fak_ped.jpg";
import jismon from "../../assets/images/fak_jismoniy.jpg";
import maktab from "../../assets/images/fak_maktabgacha.jpg";
import milliy from "../../assets/images/kafedra/kaf_texnologik_talim.jpg";
import xorijiy from "../../assets/images/fak_xorijiy.jpg";
import tabiiy from "../../assets/images/fak_tabiiy.jpg";
import rus from "../../assets/images/fak-rus.jpg";
import tarix from "../../assets/images/fak_tarix.jpg";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const FakultetlarCom = () => {
  const data = useMemo(
    () => [
      {
        label: <TextTranslate id="fakultetlarFizika" />,
        value: "fizika-matematika",
        lavozim: <TextTranslate id="fakultetlarFizikaDekan" />,
        ism: <TextTranslate id="fakultetlarFizikaIsm" />,
        tel: " +998 97 725 75 63",
        mutahasisligi: <TextTranslate id="fakultetlarFizikaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: fizika,
      },
      {
        label: <TextTranslate id="fakultetlarBoshlan" />,
        value: "boshlangich",
        lavozim: <TextTranslate id="fakultetlarBoshlanDekan" />,
        ism: <TextTranslate id="fakultetlarBoshlanIsm" />,
        tel: "+998 90 556 55 81",
        mutahasisligi: <TextTranslate id="fakultetlarBoshlanMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi.",
        img: boshlan,
      },
      {
        label: <TextTranslate id="fakultetlarUzbek" />,
        value: "ozbek-tili",
        lavozim: <TextTranslate id="fakultetlarUzbekDekan" />,
        ism: <TextTranslate id="fakultetlarUzbekIsm" />,
        tel: "+998 91 202 44 40",
        mutahasisligi: <TextTranslate id="fakultetlarUzbekMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: uzbek,
      },
      {
        label: <TextTranslate id="fakultetlarPedagog" />,
        value: "pedagogika-psixologiya",
        lavozim: <TextTranslate id="fakultetlarPedagogDekan" />,
        ism: <TextTranslate id="fakultetlarPedagogIsm" />,
        tel: "+998 91 140 67 69",
        mutahasisligi: <TextTranslate id="fakultetlarPedagogMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: ped,
      },
      {
        label: <TextTranslate id="fakultetlarJismoniy" />,
        value: "jismoniy-madaniyat",
        lavozim: <TextTranslate id="fakultetlarJismoniyDekan" />,
        ism: <TextTranslate id="fakultetlarJismoniyIsm" />,
        tel: "+998 90 556 91 32",
        mutahasisligi: <TextTranslate id="fakultetlarJismoniyMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: jismon,
      },
      {
        label: <TextTranslate id="fakultetlarMaktabDekan" />,
        value: "MaktabgachaTalim",
        lavozim: <TextTranslate id="fakultetlarMaktabDekan" />,
        ism: <TextTranslate id="fakultetlarMaktabIsm" />,
        tel: "+998 91 143 29 81",
        mutahasisligi: <TextTranslate id="fakultetlarMaktabMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat",
        img: maktab,
      },
      {
        label: <TextTranslate id="fakultetlarMilliy" />,
        value: "MilliyHunarmand",
        lavozim: <TextTranslate id="fakultetlarMilliyDekan" />,
        ism: <TextTranslate id="fakultetlarMilliyIsm" />,
        tel: "+998 91 156 21 28",
        mutahasisligi: <TextTranslate id="fakultetlarMilliyMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: milliy,
      },
      {
        label: <TextTranslate id="fakultetlarXorijiy" />,
        value: "XorijiyTillar",
        lavozim: <TextTranslate id="fakultetlarXorijiyDekan" />,
        ism: <TextTranslate id="fakultetlarXorijiyIsm" />,
        tel: "+998 91 145 99 00",
        mutahasisligi: <TextTranslate id="fakultetlarXorijiyMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xorijiy,
      },
      {
        label: <TextTranslate id="fakultetlarTabiy" />,
        value: "TabiiyFanlar",
        lavozim: <TextTranslate id="fakultetlarTabiyDekan" />,
        ism: <TextTranslate id="fakultetlarTabiyIsm" />,
        tel: "+998 91 141 87 00",
        mutahasisligi: <TextTranslate id="fakultetlarTabiyMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: tabiiy,
      },
      {
        label: <TextTranslate id="fakultetlarRus" />,
        value: "RusTili",
        lavozim: <TextTranslate id="fakultetlarRusDekan" />,
        ism: <TextTranslate id="fakultetlarRusIsm" />,
        tel: "+998 91 202 40 33",
        mutahasisligi: <TextTranslate id="fakultetlarRusMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat la",
        img: rus,
      },
      {
        label: <TextTranslate id="fakultetlarTarix" />,
        value: "Tarix",
        lavozim: <TextTranslate id="fakultetlarTarixDekan" />,
        ism: <TextTranslate id="fakultetlarTarixIsm" />,
        tel: "+998 91 688 65 00",
        mutahasisligi: <TextTranslate id="fakultetlarTarixMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: tarix,
      },
    ],
    []
  );

  const [filteredData, setFilteredData] = useState(data);

  const links = useMemo(
    () => [
      {
        value: "fizika-matematika",
        link: "/fakultetlar/fizika-matematika",
      },
      {
        value: "boshlangich",
        link: "/fakultetlar/boshlangich",
      },
      {
        value: "ozbek-tili",
        link: "/fakultetlar/ozbek-tili",
      },
      {
        value: "pedagogika-psixologiya",
        link: "/fakultetlar/pedagogika-psixologiya",
      },
      {
        value: "jismoniy-madaniyat",
        link: "/fakultetlar/jismoniy-madaniyat",
      },
      {
        value: "MaktabgachaTalim",
        link: "/fakultetlar/maktabgacha-talim",
      },
      {
        value: "MilliyHunarmand",
        link: "/fakultetlar/milliy-hunarmandchilik",
      },
      {
        value: "XorijiyTillar",
        link: "/fakultetlar/xorijiy-tillar",
      },
      {
        value: "TabiiyFanlar",
        link: "/fakultetlar/tabiiy-fanlar",
      },
      {
        value: "RusTili",
        link: "/fakultetlar/rus-tili",
      },
      {
        value: "Tarix",
        link: "/fakultetlar/tarix",
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
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="fakultetlar" /> },
          ]}
        />
      </div>
      <h2 className="text-xl md:text-3xl font-bold my-5 text-[#004269] text-center">
        <TextTranslate id="fakultetlar" />
      </h2>
      <div className="max-w-7xl mx-auto">
        <Tabs
          className="flex flex-col md:flex-row lg:justify-evenly"
          value="html"
          orientation="vertical"
        >
          <div className="overflow-hidden p-1 border-2 border-[#004269] rounded-lg max-h-[440px]">
            <TabsHeader className="w-full md:max-w-80 lg:w-96 overflow-y-scroll max-h-[320px] md:max-h-[430px] lg:max-h-[320px] p-5">
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
                    <div className="bg-white shadow-md bg-clip-border rounded-xl px-3">
                      <div className="relative flex flex-col lg:flex-row mt-6 lg:mt-0 text-gray-700 max-w-96 lg:max-w-full py-3">
                        <div className="relative -mt-6 px-3 lg:px-0 md:h-56 lg:h-auto lg:my-auto lg:overflow-hidden rounded-xl md:mb-3 lg:mb-0">
                          <img
                            src={img}
                            alt={lavozim}
                            className="w-full mb-3 lg:mb-0 h-56 lg:w-[240px] lg:h-[270px] xl:w-[250px] xl:h-[280px] object-cover rounded"
                          />
                        </div>
                        <div className="flex flex-col justify-between lg:justify-center xl:py-5 xl:mr-5">
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

export default FakultetlarCom;
