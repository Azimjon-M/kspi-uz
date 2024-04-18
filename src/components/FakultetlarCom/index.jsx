import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Breadcrumb from "../Breadcrumb";
import fizika from "../../assets/images/fak_fizika.jpg";
import boshlan from "../../assets/images/fak_boshlan.jpg";
import uzbek from "../../assets/images/fak_uzbek.jpg";
import ped from "../../assets/images/fak_ped.jpg";
import jismon from "../../assets/images/fak_jismoniy.jpg";
import maktab from "../../assets/images/fak_maktabgacha.jpg";
import milliy from "../../assets/images/fak_milliy.jpg";
import xorijiy from "../../assets/images/fak_xorijiy.jpg";
import tabiiy from "../../assets/images/fak_tabiiy.jpg";
import rus from "../../assets/images/fak-rus.jpg";
import tarix from "../../assets/images/fak_tarix.jpg";
// import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const FakultetlarCom = () => {
  const data = useMemo(
    () => [
      {
        label: "Fizika va matemtika",
        value: "fizika-matematika",
        lavozim: "Fizika va matemtika fakulteti dekani",
        ism: "Poʻlatov Sharifjon Yigitaliyevich",
        tel: " +998 97 725 75 63",
        mutahasisligi: "Texnika fanlari doktori, dotsent.",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: fizika,
      },
      {
        label: "Boshlang'ich ta'lim",
        value: "boshlangich",
        lavozim: "Boshlang'ich ta'lim fakulteti dekani",
        ism: "Jamoliddinova Dilnoza Mirxojiddinovna",
        tel: "+998 90 556 55 81",
        mutahasisligi: "Professor, Filoligiya fanlari doktori (DcS)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi.",
        img: boshlan,
      },
      {
        label: "O'zbek tili va adabiyoti",
        value: "ozbek-tili",
        lavozim: "O'zbek tili va adabiyoti fakulteti dekani",
        ism: "Hasanova Barnoxon Yusupovna",
        tel: "+998 91 202 44 40",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: uzbek,
      },
      {
        label: "Pedagogika va psixologiya",
        value: "pedagogika-psixologiya",
        lavozim: "Pedagogika va psixologiya fakulteti dekani",
        ism: "Erkaboyeva Nigora Shermatovna",
        tel: "+998 91 140 67 69",
        mutahasisligi: "Pedagogika fanlar doctori, Professor",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: ped,
      },
      {
        label: "Jismoniy madaniyat",
        value: "jismoniy-madaniyat",
        lavozim: "Jismoniy madaniyat fakulteti dekani",
        ism: "Talipjanov Alijon Akramovich",
        tel: "+998 90 556 91 32",
        mutahasisligi: "Pedagogika fanlar nomzodi, dotsent",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: jismon,
      },
      {
        label: "Maktabgacha ta'lim",
        value: "MaktabgachaTalim",
        lavozim: "Maktabgacha ta'lim fakulteti dekani",
        ism: "Abdullayev Oybek Qurbonovich",
        tel: "+998 91 143 29 81",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat",
        img: maktab,
      },
      {
        label: "Milliy hunarmandchilik va amaliy san'at",
        value: "MilliyHunarmand",
        lavozim: "Milliy hunarmandchilik va amaliy san'at fakulteti dekani",
        ism: "Umrzaqov Behzod Bo‘ronovich",
        tel: "+998 91 203 48 84 ",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: milliy,
      },
      {
        label: "Xorijiy tillar",
        value: "XorijiyTillar",
        lavozim: "Xorijiy tillar fakulteti dekani",
        ism: "Karimova Vasila Vahobovna",
        tel: "+998 91 145 99 00",
        mutahasisligi: "Filologiya fanlari bo‘yicha falsafa doktori (PhD)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xorijiy,
      },
      {
        label: "Tabiiy tillar",
        value: "TabiiyFanlar",
        lavozim: "Tabiiy tillar fakulteti dekani",
        ism: "Xo‘jayev Vaxobjon Umarovich",
        tel: "+998 91 141 87 00",
        mutahasisligi: "Kimyo fanlari doktori, professor.",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: tabiiy,
      },
      {
        label: "Rus tili va adabiyoti",
        value: "RusTili",
        lavozim: "Rus tili va adabiyoti fakulteti dekani",
        ism: "Rasulova Matlubaxon Xamzayevna",
        tel: "+998 99 872 05 07",
        mutahasisligi: "Filologiya fanlari nomzodi, dotsent",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat la",
        img: rus,
      },
      {
        label: "Tarix",
        value: "Tarix",
        lavozim: "Tarix fakulteti dekani",
        ism: "O‘rinboyev Davlatjon Baxtiyorovich",
        tel: "+998 91 688 65 00",
        mutahasisligi: "Falsafa fanlari bo‘yicha falsafa doktori (PhD)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
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
          steps={[{ text: "Bosh sahifa", link: "/" }, { text: "Fakultetlar" }]}
        />
      </div>
      <h2 className="text-xl md:text-3xl font-bold my-5 text-[#004269] text-center">
        Fakultetlar
      </h2>
      <div className="max-w-7xl mx-auto">
        <Tabs
          className="flex flex-col md:flex-row lg:justify-evenly"
          value="html"
          orientation="vertical"
        >
          <div className="overflow-hidden p-1 border-2 border-[#004269] rounded-lg">
            <TabsHeader className="w-full md:max-w-80 lg:w-96 overflow-y-scroll max-h-[320px] md:max-h-[500px] lg:max-h-[320px] p-5">
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
                        <div className="flex flex-col justify-between xl:py-5 xl:mr-5">
                          <div className="px-3">
                            <h3 className="block mb-2 font-sans text-lg xl:text-2xl antialiased font-semibold leading-snug tracking-normal text-[#004269] text-center lg:text-start max-w-[450px]">
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
