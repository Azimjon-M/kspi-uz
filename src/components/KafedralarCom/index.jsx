import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import uzbekTili from "../../assets/images/kafedra/kaf_uzbek_tili.jpg";
import uzbekTiliAdabiyot from "../../assets/images/kafedra/kaf_uzbek_adabiyoti.jpg";
import informatika from "../../assets/images/kafedra/kaf_informatika.jpg";
import geografiya from "../../assets/images/kafedra/kaf_geografiya.jpg";
import tarix from "../../assets/images/kafedra/kaf_tarix.jpg";
import milliy from "../../assets/images/kafedra/kaf_milliy_goya.jpg";
import fizika from "../../assets/images/kafedra/kaf_fizika.jpg";
import maxsusPed from "../../assets/images/kafedra/kaf_maxsus_pedagogika.jpg";
import boshMetodika from "../../assets/images/kafedra/kaf_boshlangich.jpg";
import boshNazariya from "../../assets/images/kafedra/kaf_boshlangich_nazariya.jpg";
import fakPed from "../../assets/images/kafedra/kaf_fakultetlararo_pedagogika.jpg";
import biologiya from "../../assets/images/kafedra/kaf_biologiya.jpg";
import kimyo from "../../assets/images/kafedra/kaf_kimyo.jpg";
import amaliyPsix from "../../assets/images/kafedra/kaf_amaliy_psixologiya.jpg";
import jismoniyMad from "../../assets/images/kafedra/kaf_jismoniy.jpg";
import sport from "../../assets/images/kafedra/kaf_sport_harakatli.jpg";
import menejment from "../../assets/images/kafedra/kaf_maktab_menejmenti.jpg";
import matematika from "../../assets/images/kafedra/kaf_matematika.jpg";
import pedagogika from "../../assets/images/kafedra/kaf_pedagogika.jpg";
import ingliz from "../../assets/images/kafedra/kaf_ingliz.jpg";
import maktabgachaIngliz from "../../assets/images/kafedra/kaf_maktabgacha_ingliz.jpg";
import rus from "../../assets/images/kafedra/kaf_rus_tili.jpg";
import fakultetlararoTillar from "../../assets/images/kafedra/kaf_fakultetlararo_tillar.jpg";
import tasviriy from "../../assets/images/kafedra/kaf_tasviriy_sanat.jpg";
import musiqa from "../../assets/images/kafedra/kaf_musiqiy_talim.jpg";
import texnologik from "../../assets/images/kafedra/kaf_texnologik_talim.jpg";
import maktabgachaTalim from "../../assets/images/kafedra/kaf_maktabgacha.jpg";
import inklyuziv from "../../assets/images/kafedra/kaf_inklyuziv.jpg";
import maktabgachaTPP from "../../assets/images/kafedra/kaf_maktabgacha_tpp.jpg";

const KafedralarCom = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const data = useMemo(
    () => [
      {
        label: "O'zbek tili",
        value: "ozbek-tili",
        lavozim: "O’zbek tili va adabiyoti kafedrasi mudiri",
        ism: "To'xtasinova Odinaxon Yusupovna",
        tel: "+998 ",
        mutahasisligi: "Filologiya fanlar nomzodi, dotsent.",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: uzbekTili,
      },
      {
        label: "O’zbek adabiyoti",
        value: "ozbek-adabiyoti",
        lavozim: "O‘zbek adabiyoti kafedrasi mudiri",
        ism: "Abdurahmonova Barnoxon Muxammadjonovna",
        tel: "+998 91 323 04 77",
        mutahasisligi: "Professor, Filoligiya fanlari doktori (DcS)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi.",
        img: uzbekTiliAdabiyot,
      },
      {
        label: "Informatika",
        value: "informatika",
        lavozim: "Informatika kafedrasi mudiri",
        ism: "Abdullayev Alibek Qodiraliyevich",
        tel: "+998 97 334 25 52",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: informatika,
      },
      {
        label: "Geografiya va iqtisodiy bilim asoslari ",
        value: "geografiyaIqtisodAsoslari",
        lavozim: "Geografiya va iqtisodiy bilim asoslari kafedira mudiri",
        ism: "Abdunazirov Lutfillo Mamanovich",
        tel: "+998 94 495 00 93",
        mutahasisligi: "Geografiya fanlari nomzodi, dotsent",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: geografiya,
      },
      {
        label: "Tarix",
        value: "tarixKafedrasi",
        lavozim: "Tarix kafedrasi mudiri",
        ism: "Nuriddinov Turdali Qamabarovich",
        tel: "+998 91 153 48 26",
        mutahasisligi: "Tarix fanlar bo’yicha falsafa doktori (PhD)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: tarix,
      },
      {
        label: "Milliya g’oya, ma’naviyat asoslari huquq va ta’lim",
        value: "MilliyGoyaMvaH",
        lavozim:
          "Milliy g’oya, ma’naviyat asoslari va huquq ta’limi kafedrasi mudiri",
        ism: "Boytemirova Zarina Dadajonova",
        tel: "+998 97 309 86 68",
        mutahasisligi: "Falsafa fanlari nomzodi, dotsent",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat",
        img: milliy,
      },
      {
        label: "Fizika va astranomiya",
        value: "fizikaVaAstronomiya",
        lavozim: "Fizika kafedrasi mudiri",
        ism: "Qo'chqorov Mavzurjon Xursanboyevich",
        tel: "+998 91 685 17 90",
        mutahasisligi: "Fizika-matematika fanlari nomzodi, dotsent.",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: fizika,
      },
      {
        label: "Maxsus pedagogika",
        value: "MaxsusPedagogika",
        lavozim: "Maxsus pedagogika kafedrasi mudiri",
        ism: "Xayitov Lazizbek Rustamjon o’g’li",
        tel: "+998 94 440 83 31",
        mutahasisligi: "Pedagogika fanlari bo’yicha falsafa dokroti (PhD)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: maxsusPed,
      },
      {
        label: "Boshlang’ich ta’lim metodikasi",
        value: "Boshlang’ichTalimMetodika",
        lavozim: "Boshlang’ich ta’lim metodikasi kafedrasi mudiri",
        ism: "Nizomova Shaxnoza Ubaydullayevna",
        tel: "+998 91 324 15 84",
        mutahasisligi: "Pedagogika fanlari boyicha falsafa doktori (PhD)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: boshMetodika,
      },
      {
        label: "Boshlang’ich ta’lim nazariyasi",
        value: "Boshlang’ichTalimNazariya",
        lavozim: "Boshlang’ich ta’lim nazariyasi kafedrasi mudiri",
        ism: "Xamidova Kamola Mamirovna",
        tel: "+998 90 564 19 21",
        mutahasisligi: "Pedagogika fanlari boyicha falsafa doktori (PhD)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: boshNazariya,
      },
      {
        label: "Fakultetlararo pedagogika va psixologiya",
        value: "fakultetlararo",
        lavozim: "Fakultetlararo pedagogika va psixologiya kafedrasi mudiri",
        ism: "Xaydarova Marg'uba Inomovna",
        tel: "+998 90 550 10 26",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat la",
        img: fakPed,
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
        img: biologiya,
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
        img: amaliyPsix,
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
        img: kimyo,
      },
      {
        label: "Jismoniy madaniyat metodikasi",
        value: "JismoniyMadaniyat",
        lavozim: "Jismoniy madaniyat metodikasi kafedrasi mudiri",
        ism: "Arabboyev Qaxramon Toxirovich",
        tel: "+998 91 201 58 70",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: jismoniyMad,
      },
      {
        label: "Sport va harakatli o'yinlar",
        value: "sportVaHarakatli",
        lavozim: "Sport va harakatli o'yinlar kafedrasi mudiri",
        ism: "Arabboyev Qaxramon Toxirovich",
        tel: "+998 90 292 35 47",
        mutahasisligi: "Pedagogika fanlari boʻyicha falsafa doktori(PhD)",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: sport,
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
        img: menejment,
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
        img: matematika,
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
        img: pedagogika,
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
        img: ingliz,
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
        img: maktabgachaIngliz,
      },
      {
        label: "Rus tili va adabiyoti",
        value: "RusTiliVaAdabiyoti",
        lavozim: "Rus tili va adabiyoti kafedrasi mudiri",
        ism: "-",
        tel: "+998 99 991 60 83",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: rus,
      },
      {
        label: "Fakultetlararo tillar",
        value: "FakultetlararoTillar",
        lavozim: "Fakultetlararo tillar kafedrasi mudiri",
        ism: "-",
        tel: "+998 99 991 60 83",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: fakultetlararoTillar,
      },
      {
        label: "Tasviriy san’at va muhandislik grafikasi",
        value: "Tasviriy",
        lavozim: "Tasviriy san’at va muhandislik grafikasi kafedira mudiri",
        ism: "Baratboev Botirali Mamadjanovich",
        tel: "+998 91 201 81 40",
        mutahasisligi: "Dotsent",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: tasviriy,
      },
      {
        label: "Musiqa ta'limi",
        value: "Musiqa",
        lavozim: "Musiqa ta'limi kafedira mudiri",
        ism: "Nosirov Dilmurod Tursinovich",
        tel: "+998 91 156 21 28",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: musiqa,
      },
      {
        label: "Texnologik ta'lim",
        value: "Texnologik",
        lavozim: "Texnologik ta'lim kafedira mudiri",
        ism: "Husanov Ahmadjon Joʻrayevich",
        tel: "+998 91 156 21 28",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: texnologik,
      },
      {
        label: "Maktabgacha ta'lim",
        value: "Maktabgacha",
        lavozim: "Maktabgacha ta'lim kafedira mudiri",
        ism: "Nazirova Guzal Malikovna",
        tel: "+998 91 156 21 28",
        mutahasisligi:
          "Pedagogika fanlari boʻyicha falsafa doktori(PhD), dotsent",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: maktabgachaTalim,
      },
      {
        label: "Maktabgacha ta'limda pedagogika va psixologiya",
        value: "MaktabgachaPedagogikaPsix",
        lavozim:
          "Maktabgacha ta'limda pedagogika va psixologiya kafedira mudiri",
        ism: "Xo'janazarova Nargizaxon Mirzamahmudovna",
        tel: "+998 90 058 25 57",
        mutahasisligi: "-",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: maktabgachaTPP,
      },
      {
        label: "Inklyuziv ta'lim",
        value: "Inklyuziv",
        lavozim: "Maktabgacha ta'lim kafedira mudiri",
        ism: "Raximova Xurshidaxon Sodiqovna",
        tel: "+998 91 695 82 12",
        mutahasisligi: "PhD dotsent",
        qabul: "Dushanba-shanba, 10:00 - 18:00",
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: inklyuziv,
      },
    ],
    []
  );

  const [filteredData, setFilteredData] = useState(data);

  const links = useMemo(
    () => [
      {
        value: "ozbek-adabiyoti",
        link: "/kafedralar/ozbek-adabiyoti",
      },
      {
        value: "ozbek-tili",
        link: "/kafedralar/ozbek-tili",
      },
      {
        value: "informatika",
        link: "/kafedralar/informatika",
      },
      {
        value: "geografiyaIqtisodAsoslari",
        link: "/kafedralar/geografiyaIqtisodAsoslari",
      },
      {
        value: "tarixKafedrasi",
        link: "/kafedralar/tarixKafedrasi",
      },
      {
        value: "MilliyGoyaMvaH",
        link: "/kafedralar/MilliyGoyaMvaH",
      },
      {
        value: "fizikaVaAstronomiya",
        link: "/kafedralar/fizikaVaAstronomiya",
      },
      {
        value: "MaxsusPedagogika",
        link: "/kafedralar/MaxsusPedagogika",
      },
      {
        value: "Boshlang’ichTalimKafedra",
        link: "/kafedralar/Boshlang’ichTalimKafedra",
      },
      {
        value: "fakultetlararo",
        link: "/kafedralar/fakultetlararo",
      },
      {
        value: "Biologiya",
        link: "/kafedralar/biologiya",
      },
      {
        value: "AmaliyPsixologiya",
        link: "/kafedralar/AmaliyPsixologiya",
      },
      {
        value: "Kimyo",
        link: "/kafedralar/Kimyo",
      },
      {
        value: "sportVaHarakatli",
        link: "/kafedralar/sportVaHarakatli",
      },
      {
        value: "Maktabgacha",
        link: "/kafedralar/Maktabgacha",
      },
      {
        value: "MaktabMenejmenti",
        link: "/kafedralar/MaktabMenejmenti",
      },
      {
        value: "Matematika",
        link: "/kafedralar/Matematika",
      },
      {
        value: "Pedagogika",
        link: "/kafedralar/Pedagogika",
      },
      {
        value: "InglizTiliVaAdabiyoti",
        link: "/kafedralar/InglizTiliVaAdabiyoti",
      },
      {
        value: "MaktabgachaVaBoshlangich",
        link: "/kafedralar/MaktabgachaVaBoshlangich",
      },
      {
        value: "RusTiliVaAdabiyoti",
        link: "/kafedralar/RusTiliVaAdabiyoti",
      },
      {
        value: "FakultetlararoTillar",
        link: "/kafedralar/FakultetlararoTillar",
      },
      {
        value: "Tasviriy",
        link: "/kafedralar/Tasviriy",
      },
      {
        value: "Musiqa",
        link: "/kafedralar/Musiqa",
      },
      {
        value: "Texnologik",
        link: "/kafedralar/Texnologik",
      },
      {
        value: "Maktabgacha",
        link: "/kafedralar/Maktabgacha",
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
          steps={[{ text: "Bosh sahifa", link: "/" }, { text: "Kafedralar" }]}
        />
      </div>
      <h2 className="text-xl md:text-3xl font-bold my-5 text-[#004269] text-center">
        Kafedralar
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
                <h2 className="text-xl font-semibold">Kafedralar</h2>
                <button
                  onClick={toggleShowAll}
                  className="text-[#004269] focus:outline-none"
                >
                  {!showAll ? (
                    <FaAngleDown className="border-2 border-[#004269] rounded-full" />
                  ) : (
                    <FaAngleUp className="border-2 border-[#004269] rounded-full" />
                  )}
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

export default KafedralarCom;
