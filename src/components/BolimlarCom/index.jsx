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
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Bolimlar = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const data = useMemo(
    () => [
      {
        label: "Reja-moliya",
        value: "RejaMoliya",
        lavozim: "Reja moliya bo'limi boshlig'i",
        ism: "Xoliqov Nodir Abbasovich",
        tel: "+998 93 971 00 86",
        mutahasisligi: "Filologiya fanlar nomzodi, dotsent.",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: raqamliImg,
      },
      {
        label: "O'quv uslubiy boshqarma",
        value: "OquvUslubiy",
        lavozim: "O'quv uslubiy boshqarma boshlig'i",
        ism: "Baratboyev Bekzod Batirovich",
        tel: "+998 97 966 00 14",
        mutahasisligi:
          "Falsafa fanlari bo'yicha falsafa doktori (PhD), dotsent",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi.",
        img: oquv,
      },
      {
        label: "Korrupsiyaga qarshi kurashish",
        value: "KorrupsiyagaQarshi",
        lavozim: "Korrupsiyaga qarshi kurashish bo'lim boshlig'i",
        ism: "Abdullayev Alibek Qodiraliyevich",
        tel: "+998 90 426 17 78",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: muhandis,
      },
      {
        label: "Ta'lim sifatini nazorat qilish ",
        value: "TalimSifati",
        lavozim: "Ta'lim sifatini nazorat qilish bo'limi boshlig'i",
        ism: "Abdunazirov Lutfillo Mamanovich",
        tel: "+998 94 495 00 93",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: energetik,
      },
      {
        label:
          "Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring qilish",
        value: "JismoniyYuridikqilishKafedrasi",
        lavozim:
          "Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring qilish bo'limi boshlig'i",
        ism: "Turg'unov Azizjon Mamasoliyevich",
        tel: "+998 91 202 30 22",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: xalqaro,
      },
      {
        label: "Xodimlar bo'limi",
        value: "Xodimlar",
        lavozim: "Xodimlar bo'limi boshlig'i",
        ism: "Axmedova Yekaterina Nikolayevna",
        tel: "+998 73 542 38 38",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat",
        img: xalqaro,
      },
      {
        label: "Xalqaro hamkorlik",
        value: "XalqaroHamkorlik",
        lavozim: "Xalqaro hamkorlik bo'limi boshlig'i",
        ism: "Najmeddinov Axmad Rahmatovich",
        tel: "+998 90 627 70 08",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Marketing va talabalar amaliyoti",
        value: "MarketingTalabalar",
        lavozim: "Marketing va talabalar amaliyoti bo'limi boshlig'i",
        ism: "Mahkamova Dilafruz Aliyevna",
        tel: "+998 94 440 83 31",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Sirtqi",
        value: "Sirtqi",
        lavozim: "Sirtqi bo'limi boshlig'i",
        ism: "Abdurasulov Abdullajon Abdukarimovich",
        tel: "+998 99 696 33 77",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: xalqaro,
      },
      {
        label: "Yoshlar bilan ishlash, ma'naviyat va marifat",
        value: "YoshlarBilan",
        lavozim:
          "Yoshlar bilan ishlash, ma'naviyat va marifat bo'limi boshlig'i",
        ism: "Ibragimov Farhod Bozorboyevich",
        tel: "+998 94 440 83 31",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat la",
        img: xalqaro,
      },
      {
        label: "Biologiya",
        value: "Biologiya",
        lavozim: "Biologiya kafedirasi mudiri",
        ism: "Madumarov Maqsadjon Jumanovich",
        tel: "+998 94 440 83 31",
        mutahasisligi: "Biyalogiya fanlari bo’yicha falsafa doctori (PhD)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Amaliy psixologiya",
        value: "AmaliyPsixologiya",
        lavozim: "Amaliy psixologiya kafedrasi mudiri",
        ism: "Saliyeva Dilorom Abdullayevna",
        tel: "+998 90 292 35 47",
        mutahasisligi: "Psixologiya fanlar nomzodi, dosent",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Kimyo",
        value: "Kimyo",
        lavozim: "Kimyo kafedirasi mudiri",
        ism: "Ochilov G’olibjon Mamayunusovich",
        tel: "+998 90 292 35 47",
        mutahasisligi: "Kimyo fanlari doktori, professor.",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Jismoniy madaniyat metodikasi",
        value: "JismoniyMadaniyat",
        lavozim: "Jismoniy madaniyat metodikasi kafedrasi mudiri",
        ism: "Arabboyev Qaxramon Toxirovich",
        tel: "+998 90 292 35 47",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Sport va harakatli o'yinlar",
        value: "sportVaHarakatli",
        lavozim: "Sport va harakatli o'yinlar kafedrasi mudiri",
        ism: "Arabboyev Qaxramon Toxirovich",
        tel: "+998 90 292 35 47",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Maktab menejmenti",
        value: "MaktabMenejmenti",
        lavozim: "Maktab menejmenti kafedirasi mudiri",
        ism: "Ustadjalilova Xurshida Aliyevna",
        tel: "+998 97 555 52 52",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Matematika",
        value: "Matematika",
        lavozim: "Matematika kafedirasi mudiri",
        ism: "Aroyev Dilshod Davronovich",
        tel: "+998 97 555 52 52",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Pedagogika",
        value: "Pedagogika",
        lavozim: "Pedagogika kafedirasi mudiri",
        ism: "Xolmatova Ziroat Anvarovna",
        tel: "+998 97 555 52 52",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Ingliz tili va adabiyoti",
        value: "InglizTiliVaAdabiyoti",
        lavozim: "Ingliz tili va adabiyoti kafedrasi mudiri",
        ism: "Bektoshev Otabek Qodiraliyevich",
        tel: "+998 97 555 52 52",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: "Maktabgacha va boshlang’ich ta’limda ingiliz tili",
        value: "MaktabgachaVaBoshlangich",
        lavozim:
          "Maktabgacha va boshlang’ich ta’limda ingiliz tili kafedrasi mudiri",
        ism: "Ergashev Muhammadjon Rahmonovich",
        tel: "+998 99 991 60 83",
        mutahasisligi: "(PHD) Filologiya fanlar bo’yicha falsafa doktori",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
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
        value: "ozbek-adabiyoti",
        link: "/bolimlar/ozbek-adabiyoti",
      },
      {
        value: "ozbek-tili",
        link: "/bolimlar/ozbek-tili",
      },
      {
        value: "informatika",
        link: "/bolimlar/informatika",
      },
      {
        value: "geografiyaIqtisodAsoslari",
        link: "/bolimlar/geografiyaIqtisodAsoslari",
      },
      {
        value: "tarixKafedrasi",
        link: "/bolimlar/tarixKafedrasi",
      },
      {
        value: "MilliyGoyaMvaH",
        link: "/bolimlar/MilliyGoyaMvaH",
      },
      {
        value: "fizikaVaAstronomiya",
        link: "/bolimlar/fizikaVaAstronomiya",
      },
      {
        value: "MaxsusPedagogika",
        link: "/bolimlar/MaxsusPedagogika",
      },
      {
        value: "Boshlang’ichTalimKafedra",
        link: "/bolimlar/Boshlang’ichTalimKafedra",
      },
      {
        value: "fakultetlararo",
        link: "/bolimlar/fakultetlararo",
      },
      {
        value: "Biologiya",
        link: "/bolimlar/biologiya",
      },
      {
        value: "AmaliyPsixologiya",
        link: "/bolimlar/AmaliyPsixologiya",
      },
      {
        value: "Kimyo",
        link: "/bolimlar/Kimyo",
      },
      {
        value: "sportVaHarakatli",
        link: "/bolimlar/sportVaHarakatli",
      },
      {
        value: "Maktabgacha",
        link: "/bolimlar/Maktabgacha",
      },
      {
        value: "MaktabMenejmenti",
        link: "/bolimlar/MaktabMenejmenti",
      },
      {
        value: "Matematika",
        link: "/bolimlar/Matematika",
      },
      {
        value: "Pedagogika",
        link: "/bolimlar/Pedagogika",
      },
      {
        value: "InglizTiliVaAdabiyoti",
        link: "/bolimlar/InglizTiliVaAdabiyoti",
      },
      {
        value: "MaktabgachaVaBoshlangich",
        link: "/bolimlar/MaktabgachaVaBoshlangich",
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
          steps={[{ text: "Bosh sahifa", link: "/" }, { text: "Bo'limlar " }]}
        />
      </div>
      <h2 className="text-xl md:text-3xl font-bold my-5 text-[#004269] text-center">
        Bo'limlar
      </h2>
      <div className="max-w-7xl mx-auto">
        <Tabs
          className="flex flex-col md:flex-row lg:justify-evenly"
          value="html"
          orientation="vertical"
        >
          <div>
            <TabsHeader className="max-w-96 md:max-w-80 lg:w-96 border-2 border-[#004269] p-5 mb-5">
              {filteredData
                .slice(0, showAll ? filteredData.length : 8)
                .map(({ label, value }, idx) => (
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
              <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-semibold">Bo'limlar</h2>
                <button
                  onClick={toggleShowAll}
                  className="text-[#004269] focus:outline-none"
                >
                  {!showAll ? <FaAngleDown /> : <FaAngleUp />}
                </button>
              </div>
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
    </div>
  );
};

export default Bolimlar;
