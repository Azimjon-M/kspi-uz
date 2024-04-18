import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Breadcrumb from "../Breadcrumb";
import reja from "../../assets/images/rejaMoliya/boshliq.JPG"
import oquv from "../../assets/images/oquvBolimi/boshliq.JPG"
import korrupsiya from "../../assets/images/korrupsiya/boshliq.JPG"
// import talimSifat from "../../assets/images/nazorat"
import nazorat from "../../assets/images/ichkiNazorat/boshliq.JPG"
import xodimlar from "../../assets/images/xodimlar/boshliq.jpg"
import xalqaro from "../../assets/images/xalqaroHamkorlik/boshliq.JPG"
import talabaAmaliyot from "../../assets/images/marketingTalabaAmaliyot/boshliq.JPG"
import sirtqi from "../../assets/images/sirtqi/boshliq.JPG"
import yoshlarBilan from "../../assets/images/yoshlarBilanIshlash/boshliq.JPG"
import ilmiyTadqiqot from "../../assets/images/ilmiyTadqiqotlar/boshliq.JPG"
import ilmiyInnovatsion from "../../assets/images/tijoratlashtirish/boshliq.JPG"
import iqtidorliTalabalar from "../../assets/images/iqtidorliTalabalar/boshliq.JPG"
import magistratura from "../../assets/images/magistratura/boshliq.JPG"
import QoshmaTalim from "../../assets/images/qoshma/boshliq.JPG"
import buxgalteriya from "../../assets/images/buxgalter.jpg"
import texnikFoydalanish from "../../assets/images/xojalik/boshliq.JPG"
import fuqaroMehnat from "../../assets/images/mehnatMuhofazasi/boshliq.JPG"
import devonxona from "../../assets/images/devonxona/boshliq.JPG"
import turarJoy from "../../assets/images/turarJoy/boshliq.JPG"
import { useEffect, useMemo } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Bolimlar = () => {

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
        img: reja,
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
        img: korrupsiya,
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
        // img: talimSifat,
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
        img: nazorat,
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
        img: xodimlar,
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
        img: talabaAmaliyot,
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
        img: sirtqi,
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
        img: yoshlarBilan,
      },
      {
        label:
          "Ilmiy-tadqiqotlar, innovatsiyalar va ilmiy pedagogik kadrlarni tayyorlash",
        value: "ilmiy-tadqiqot",
        lavozim:
          "Ilmiy-tadqiqotlar, innovatsiyalar va ilmiy pedagogik kadrlarni tayyorlash bo'limi boshlig'i",
        ism: "Rasulov Inomjon Mo'ydinovich",
        tel: "+998 90 155 50 00",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: ilmiyTadqiqot,
      },
      {
        label: "Ilmiy - innovatsion ishlanmalarni tijoratlashtirish",
        value: "IlmiyInnovatsion",
        lavozim:
          "Ilmiy - innovatsion ishlanmalarni tijoratlashtirish bo'limi boshlig'i",
        ism: "Xo'jamberdiyev Sherzod Mirziyodovich",
        tel: "+998 90 121 76 81",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: ilmiyInnovatsion,
      },
      {
        label:
          "Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish",
        value: "Iqtidorli",
        lavozim:
          "Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish bo'limi boshlig'i",
        ism: "Jo'rayev Muhammadrizo Mamurovich",
        tel: "+998 90 507 60 36",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: iqtidorliTalabalar,
      },
      {
        label: "Magistratura",
        value: "Magistratura",
        lavozim: "Magistratura bo'limi boshlig'i",
        ism: "Bazarov Otabek Odilovich",
        tel: "+998 90 974 17 65",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: magistratura,
      },
      {
        label: "Qo'shma ta'lim dasturlarini muvofiqlashtirish",
        value: "QoshmaTalim",
        lavozim:
          "Qo'shma ta'lim dasturlarini muvofiqlashtirish bo'limi boshlig'i",
        ism: "Qarshiyeva Shaxnoza Valiyevna",
        tel: "+998 91 694 01 55",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: QoshmaTalim,
      },
      {
        label: "Buxgalteriya",
        value: "Buxgalteriya",
        lavozim: "Buxgalteriya bo’limi bo'limi boshlig'i",
        ism: "Abduraximov Abdurashid Abdumalikovich",
        tel: "+998 93 972 44 01",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: buxgalteriya,
      },
      {
        label: "Texnik foydalanish va xo'jalik",
        value: "TexnikFoydalanish",
        lavozim: "Texnik foydalanish va xo'jalik bo'limi boshlig'i",
        ism: "Hamidov Mansurxon",
        tel: "+998 91 154 30 03",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: texnikFoydalanish,
      },
      {
        label: "Fuqaro va mehnat muhofazasi",
        value: "FuqaroMehnat",
        lavozim: "Fuqaro va mehnat muhofazasi bo'limi boshlig'i",
        ism: "Ayubjonov Inomjon Alijonovich",
        tel: "+998 91 141 26 14",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: fuqaroMehnat,
      },
      {
        label: "Devonxona va arxiv",
        value: "Devonxona",
        lavozim: "Devonxona va arxiv bo'limi boshlig'i",
        ism: "Ahmadaliyev Bahrom Alisherovich",
        tel: "+998 94 557 20 79",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: devonxona,
      },
      {
        label:
          "Talabalarni turar joy bilan ta'minlash ishlarini muvofiqlashtirish",
        value: "TurarJoy",
        lavozim:
          "Talabalarni turar joy bilan ta'minlash ishlarini muvofiqlashtirish bo'limi boshlig'i",
        ism: "Ergashev Muhammadjon Rahmonovich",
        tel: "+998 94 448 23 03",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: turarJoy,
      },
    ],
    []
  );

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
          <div className="overflow-hidden p-1 border-2 border-[#004269] rounded-lg max-h-[440px]">
            <TabsHeader className="w-full md:max-w-80 lg:w-96 overflow-y-scroll max-h-[320px] md:max-h-[430px] lg:max-h-[320px] p-5">
              {data
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
            </TabsHeader>
          </div>

          <div className="lg:w-[600px] xl:w-[800px]">
            <TabsBody className="p-0 mb-3">
              {data.map(
                ({
                  value,
                  lavozim,
                  img = "",
                  ism,
                  tel,
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
                            <h3 className="block mb-2 lg:mb-5 font-sans text-lg xl:text-2xl antialiased font-semibold leading-snug tracking-normal text-[#004269] text-center lg:text-start max-w-[400px]">
                              {lavozim}
                            </h3>
                            <h4 className="block mb-2 lg:mb-4 font-sans text-lg xl:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center lg:text-start">
                              {ism}
                            </h4>
                            <h4 className="block mb-2 lg:mb-3 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              {mutahasisligi}
                            </h4>
                            <h4 className="block mb-2 lg:mb-3 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              Qabul kunlari: {qabul}
                            </h4>
                            <h4 className="block mb-2 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              Telefon: {tel}
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

export default Bolimlar;
