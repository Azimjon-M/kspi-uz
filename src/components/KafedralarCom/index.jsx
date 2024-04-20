import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Breadcrumb from "../Breadcrumb";
import TextTranslate from "../TextTranslate";
// import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
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
  const data = useMemo(
    () => [
      {
        label: <TextTranslate id="kafedralarUzbek" />,
        value: "ozbek-tili",
        lavozim: <TextTranslate id="kafedralarUzbekMudir" />,
        ism: <TextTranslate id="kafedralarUzbekIsm" />,
        tel: "+998 ",
        mutahasisligi: <TextTranslate id="kafedralarUzbekMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: uzbekTili,
      },
      {
        label: <TextTranslate id="kafedralarUzbekAdab" />,
        value: "ozbek-adabiyoti",
        lavozim: <TextTranslate id="kafedralarUzbekAdabMudir" />,
        ism: <TextTranslate id="kafedralarUzbekAdabIsm" />,
        tel: "+998 91 323 04 77",
        mutahasisligi: <TextTranslate id="kafedralarUzbekAdabMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi.",
        img: uzbekTiliAdabiyot,
      },
      {
        label: <TextTranslate id="kafedralarInformatika" />,
        value: "informatika",
        lavozim: <TextTranslate id="kafedralarInformatikaMudir" />,
        ism: <TextTranslate id="kafedralarInformatikaIsm" />,
        tel: "+998 97 334 25 52",
        mutahasisligi: <TextTranslate id="kafedralarInformatikaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: informatika,
      },
      {
        label: <TextTranslate id="kafedralarGeografiya" />,
        value: "geografiyaIqtisodAsoslari",
        lavozim: <TextTranslate id="kafedralarGeografiyaMudir" />,
        ism: <TextTranslate id="kafedralarGeografiyaIsm" />,
        tel: "+998 94 495 00 93",
        mutahasisligi: <TextTranslate id="kafedralarGeografiyaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: geografiya,
      },
      {
        label: <TextTranslate id="kafedralarTarix" />,
        value: "tarixKafedrasi",
        lavozim: <TextTranslate id="kafedralarTarixMudir" />,
        ism: <TextTranslate id="kafedralarTarixIsm" />,
        tel: "+998 91 153 48 26",
        mutahasisligi: <TextTranslate id="kafedralarTarixMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: tarix,
      },
      {
        label: <TextTranslate id="kafedralarMilliy" />,
        value: "MilliyGoyaMvaH",
        lavozim: <TextTranslate id="kafedralarMilliyMudir" />,
        ism: <TextTranslate id="kafedralarMilliyIsm" />,
        tel: "+998 97 309 86 68",
        mutahasisligi: <TextTranslate id="kafedralarMilliyMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat",
        img: milliy,
      },
      {
        label: <TextTranslate id="kafedralarFizika" />,
        value: "fizikaVaAstronomiya",
        lavozim: <TextTranslate id="kafedralarFizikaMudir" />,
        ism: <TextTranslate id="kafedralarFizikaIsm" />,
        tel: "+998 91 685 17 90",
        mutahasisligi: <TextTranslate id="kafedralarFizikaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: fizika,
      },
      {
        label: <TextTranslate id="kafedralarMaxsus" />,
        value: "MaxsusPedagogika",
        lavozim: <TextTranslate id="kafedralarMaxsusMudir" />,
        ism: <TextTranslate id="kafedralarMaxsusIsm" />,
        tel: "+998 94 440 83 31",
        mutahasisligi: <TextTranslate id="kafedralarMaxsusMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: maxsusPed,
      },
      {
        label: <TextTranslate id="kafedralarBoshlangichMetodika" />,
        value: "Boshlang’ichTalimMetodika",
        lavozim: <TextTranslate id="kafedralarBoshlangichMetodikaMudir" />,
        ism: <TextTranslate id="kafedralarBoshlangichMetodikaIsm" />,
        tel: "+998 91 324 15 84",
        mutahasisligi: <TextTranslate id="kafedralarBoshlangichMetodikaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: boshMetodika,
      },
      {
        label: <TextTranslate id="kafedralarBoshlangichNazariya" />,
        value: "Boshlang’ichTalimNazariya",
        lavozim: <TextTranslate id="kafedralarBoshlangichNazariyaMudir" />,
        ism: <TextTranslate id="kafedralarBoshlangichNazariyaIsm" />,
        tel: "+998 90 564 19 21",
        mutahasisligi: <TextTranslate id="kafedralarBoshlangichNazariyaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: boshNazariya,
      },
      {
        label: <TextTranslate id="kafedralarFakultetlararoPedagog" />,
        value: "fakultetlararo",
        lavozim: <TextTranslate id="kafedralarFakultetlararoPedagogMudir" />,
        ism: <TextTranslate id="kafedralarFakultetlararoPedagogIsm" />,
        tel: "+998 90 550 10 26",
        mutahasisligi: <TextTranslate id="kafedralarFakultetlararoPedagogMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat la",
        img: fakPed,
      },
      {
        label: <TextTranslate id="kafedralarBiologiya" />,
        value: "Biologiya",
        lavozim: <TextTranslate id="kafedralarBiologiyaMudir" />,
        ism: <TextTranslate id="kafedralarBiologiyaIsm" />,
        tel: "+998 94 440 83 31",
        mutahasisligi: <TextTranslate id="kafedralarBiologiyaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: biologiya,
      },
      {
        label: <TextTranslate id="kafedralarAmaliyPsix" />,
        value: "AmaliyPsixologiya",
        lavozim: <TextTranslate id="kafedralarAmaliyPsixMudir" />,
        ism: <TextTranslate id="kafedralarAmaliyPsixIsm" />,
        tel: "+998 90 292 35 47",
        mutahasisligi: <TextTranslate id="kafedralarAmaliyPsixMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: amaliyPsix,
      },
      {
        label: <TextTranslate id="kafedralarKimyo" />,
        value: "Kimyo",
        lavozim: <TextTranslate id="kafedralarKimyoMudir" />,
        ism: <TextTranslate id="kafedralarKimyoIsm" />,
        tel: "+998 90 292 35 47",
        mutahasisligi: <TextTranslate id="kafedralarKimyoMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: kimyo,
      },
      {
        label: <TextTranslate id="kafedralarJismoniy" />,
        value: "JismoniyMadaniyat",
        lavozim: <TextTranslate id="kafedralarJismoniyMudir" />,
        ism: <TextTranslate id="kafedralarJismoniyIsm" />,
        tel: "+998 91 201 58 70",
        mutahasisligi: <TextTranslate id="kafedralarJismoniyMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: jismoniyMad,
      },
      {
        label: <TextTranslate id="kafedralarSport" />,
        value: "sportVaHarakatli",
        lavozim: <TextTranslate id="kafedralarSportMudir" />,
        ism: <TextTranslate id="kafedralarSportIsm" />,
        tel: "+998 90 292 35 47",
        mutahasisligi: <TextTranslate id="kafedralarSportMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: sport,
      },
      {
        label: <TextTranslate id="kafedralarMaktabMenejment" />,
        value: "MaktabMenejmenti",
        lavozim: <TextTranslate id="kafedralarMaktabMenejmentMudir" />,
        ism: <TextTranslate id="kafedralarMaktabMenejmentIsm" />,
        tel: "+998 97 555 52 52",
        mutahasisligi: <TextTranslate id="kafedralarMaktabMenejmentMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: menejment,
      },
      {
        label: <TextTranslate id="kafedralarMatematika" />,
        value: "Matematika",
        lavozim: <TextTranslate id="kafedralarMatematikaMudir" />,
        ism: <TextTranslate id="kafedralarMatematikaIsm" />,
        tel: "+998 97 555 52 52",
        mutahasisligi: <TextTranslate id="kafedralarMatematikaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: matematika,
      },
      {
        label: <TextTranslate id="kafedralarPedagogika" />,
        value: "Pedagogika",
        lavozim: <TextTranslate id="kafedralarPedagogikaMudir" />,
        ism: <TextTranslate id="kafedralarPedagogikaIsm" />,
        tel: "+998 97 555 52 52",
        mutahasisligi: <TextTranslate id="kafedralarPedagogikaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: pedagogika,
      },
      {
        label: <TextTranslate id="kafedralarIngliz" />,
        value: "InglizTiliVaAdabiyoti",
        lavozim: <TextTranslate id="kafedralarInglizMudir" />,
        ism: <TextTranslate id="kafedralarInglizIsm" />,
        tel: "+998 97 555 52 52",
        mutahasisligi: <TextTranslate id="kafedralarInglizMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: ingliz,
      },
      {
        label: <TextTranslate id="kafedralarMaktabgachaIngliz" />,
        value: "MaktabgachaVaBoshlangich",
        lavozim: <TextTranslate id="kafedralarMaktabgachaInglizMudir" />,
        ism: <TextTranslate id="kafedralarMaktabgachaInglizIsm" />,
        tel: "+998 99 991 60 83",
        mutahasisligi: <TextTranslate id="kafedralarMaktabgachaInglizMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: maktabgachaIngliz,
      },
      {
        label: <TextTranslate id="kafedralarRus" />,
        value: "RusTiliVaAdabiyoti",
        lavozim: <TextTranslate id="kafedralarRusMudir" />,
        ism: <TextTranslate id="kafedralarRusIsm" />,
        tel: "+998 99 991 60 83",
        mutahasisligi: <TextTranslate id="kafedralarRusMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: rus,
      },
      {
        label: <TextTranslate id="kafedralarFakultetlararoTillar" />,
        value: "FakultetlararoTillar",
        lavozim: <TextTranslate id="kafedralarFakultetlararoTillarMudir" />,
        ism: <TextTranslate id="kafedralarFakultetlararoTillarIsm" />,
        tel: "+998 99 991 60 83",
        mutahasisligi: <TextTranslate id="kafedralarFakultetlararoTillarMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: fakultetlararoTillar,
      },
      {
        label: <TextTranslate id="kafedralarTasviriy" />,
        value: "Tasviriy",
        lavozim: <TextTranslate id="kafedralarTasviriyMudir" />,
        ism: <TextTranslate id="kafedralarTasviriyIsm" />,
        tel: "+998 91 201 81 40",
        mutahasisligi: <TextTranslate id="kafedralarTasviriyMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: tasviriy,
      },
      {
        label: <TextTranslate id="kafedralarMusiqa" />,
        value: "Musiqa",
        lavozim: <TextTranslate id="kafedralarMusiqaMudir" />,
        ism: <TextTranslate id="kafedralarMusiqaIsm" />,
        tel: "+998 91 156 21 28",
        mutahasisligi: <TextTranslate id="kafedralarMusiqaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: musiqa,
      },
      {
        label: <TextTranslate id="kafedralarTexnologik" />,
        value: "Texnologik",
        lavozim: <TextTranslate id="kafedralarTexnologikMudir" />,
        ism: <TextTranslate id="kafedralarTexnologikIsm" />,
        tel: "+998 91 156 21 28",
        mutahasisligi: <TextTranslate id="kafedralarTexnologikMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: texnologik,
      },
      {
        label: <TextTranslate id="kafedralarMaktabgacha" />,
        value: "Maktabgacha",
        lavozim: <TextTranslate id="kafedralarMaktabgachaMudir" />,
        ism: <TextTranslate id="kafedralarMaktabgachaIsm" />,
        tel: "+998 91 156 21 28",
        mutahasisligi: <TextTranslate id="kafedralarMaktabgachaMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: maktabgachaTalim,
      },
      {
        label: <TextTranslate id="kafedralarMaktabgachaPedPsix" />,
        value: "MaktabgachaPedagogikaPsix",
        lavozim: <TextTranslate id="kafedralarMaktabgachaPedPsixMudir" />,
        ism: <TextTranslate id="kafedralarMaktabgachaPedPsixIsm" />,
        tel: "+998 90 058 25 57",
        mutahasisligi: <TextTranslate id="kafedralarMaktabgachaPedPsixMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: maktabgachaTPP,
      },
      {
        label: <TextTranslate id="kafedralarInklyuziv" />,
        value: "Inklyuziv",
        lavozim: <TextTranslate id="kafedralarInklyuzivMudir" />,
        ism: <TextTranslate id="kafedralarInklyuzivIsm" />,
        tel: "+998 91 695 82 12",
        mutahasisligi: <TextTranslate id="kafedralarInklyuzivMutahasis" />,
        qabul: <TextTranslate id="qabulKunlari" />,
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
          steps={[
            { text: <TextTranslate id="boshSahifa" />, link: "/" },
            { text: <TextTranslate id="kafedralar" /> },
          ]}
        />
      </div>
      <h2 className="text-xl md:text-3xl font-bold my-5 text-[#004269] text-center">
        <TextTranslate id="kafedralar" />
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

export default KafedralarCom;
