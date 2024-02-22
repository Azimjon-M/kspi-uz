import React from "react";
import Root from "../root/index";

import Main from "../pages/Main";
import News from "../pages/News";
import New from "../pages/New";
import VirQabulxona from "../pages/VirQabulxona";
import VideoMaruzalar from "../pages/VideoMaruzalar";
import Qabul from "../pages/Qabul";
import OnlineKuzatish from "../pages/OnlineKuzatish";
import Rekvizitlar from "../pages/Rekvizitlar";
import InstitutTuzilmasi from "../pages/InstitutTuzilmasi";
import InstitutKengashi from "../pages/InstitutKengashi";
import InstitutHaqida from "../pages/InstitutHaqida";
import Rektorat from "../pages/Tuzilma/Rektorat";
import Rektor from "../pages/Tuzilma/Rektorat/Rektor";
import IlmiyIshlar from "../pages/Tuzilma/Rektorat/IlmiyIshlar";
import MoliyaVaIqtisod from "../pages/Tuzilma/Rektorat/MoliyaVaIqtisod";
import OquvIshlarBoyicha from "../pages/Tuzilma/Rektorat/OquvIshlarBoyicha";
import XalqaroHamkorlik from "../pages/Tuzilma/Rektorat/XalqaroHamkorlik";
import YoshlarMasalalariMvaM from "../pages/Tuzilma/Rektorat/YoshlarMasalalariMvaM";
import Kafedralar from "../pages/Tuzilma/Kafedralar";
import Markazlar from "../pages/Tuzilma/Markazlar";
import RaqamliTalim from "../pages/Tuzilma/Markazlar/RaqamliTalim";
import AxborotResurs from "../pages/Tuzilma/Markazlar/AxborotResurs";
import BoshMuhandis from "../pages/Tuzilma/Markazlar/BoshMuhandis";
import BoshEnergetik from "../pages/Tuzilma/Markazlar/BoshEnergetik";
import RektorYordamchisi from "../pages/Tuzilma/Markazlar/RektorYordamchisi";
import MatbuotKotibi from "../pages/Tuzilma/Markazlar/MatbuotKotibi";
import Yuristkonsolt from "../pages/Tuzilma/Markazlar/Yuristkonsolt";
import BoshAuditor from "../pages/Tuzilma/Markazlar/BoshAuditor";
import Fakultetlar from "../pages/Tuzilma/Fakultetlar";
import BoshlangichTalim from "../pages/Tuzilma/Fakultetlar/BoshlangichTalim";
import FizkaVaMatematika from "../pages/Tuzilma/Fakultetlar/FizkaVaMatematika";
import JismoniyMadanyat from "../pages/Tuzilma/Fakultetlar/JismoniyMadanyat";
import MaktabgachaTalim from "../pages/Tuzilma/Fakultetlar/MaktabgachaTalim";
import MilliyHunarmand from "../pages/Tuzilma/Fakultetlar/MilliyHunarmand";
import OzbekTiliAdabiyoti from "../pages/Tuzilma/Fakultetlar/OzbekTiliAdabiyoti";
import PedagogikaVaPsix from "../pages/Tuzilma/Fakultetlar/PedagogikaVaPsix";
import RusTiliVaAdabiyoti from "../pages/Tuzilma/Fakultetlar/RusTiliVaAdabiyoti";
import TabiyFanlar from "../pages/Tuzilma/Fakultetlar/TabiyFanlar";
import Tarix from "../pages/Tuzilma/Fakultetlar/Tarix";
import XorijiyTillar from "../pages/Tuzilma/Fakultetlar/XorijiyTillar";
import Bolimlar from "../pages/Tuzilma/Bolimlar";

export const routes = [
  {
    element: <Root />,
    path: "/",
    children: [
      {
        element: <Main />,
        path: "/",
      },
      {
        element: <News />,
        path: "/yangiliklar",
      },
      {
        element: <New />,
        path: "/yangiliklar/:id",
      },
      {
        element: <VirQabulxona />,
        path: "/qabulxona",
      },
      {
        element: <VideoMaruzalar />,
        path: "/videomaruza",
      },
      {
        element: <Qabul />,
        path: "/qabul",
      },
      {
        element: <OnlineKuzatish />,
        path: "/kuzatish",
      },
      {
        element: <Rekvizitlar />,
        path: "/rekvizitlar",
      },
      {
        element: <InstitutTuzilmasi />,
        path: "/institut-tuzilma",
      },
      {
        element: <InstitutKengashi />,
        path: "/institut-kengashi",
      },
      {
        element: <InstitutHaqida />,
        path: "/institut-haqida",
      },
      {
        element: <Rektorat />,
        path: "/rektorat",
      },
      {
        element: <Markazlar />,
        path: "/markazlar",
      },
      {
        element: <Kafedralar />,
        path: "/kafedralar",
      },
      {
        element: <Fakultetlar />,
        path: "/fakultetlar",
      },
      {
        element: <Bolimlar />,
        path: "/bolimlar",
      },
      {
        element: <Rektor />,
        path: "/rektorat/rektor",
      },
      {
        element: <IlmiyIshlar />,
        path: "/rektorat/ilmiy-ishlar",
      },
      {
        element: <OquvIshlarBoyicha />,
        path: "/rektorat/oquv-ishlari",
      },
      {
        element: <MoliyaVaIqtisod />,
        path: "/rektorat/moliya",
      },
      {
        element: <XalqaroHamkorlik />,
        path: "/rektorat/xalqaro",
      },
      {
        element: <YoshlarMasalalariMvaM />,
        path: "/rektorat/yoshlar-masalalari",
      },
      {
        element: <RaqamliTalim />,
        path: "/markazlar/raqamli-talim",
      },
      {
        element: <AxborotResurs />,
        path: "/markazlar/axborot",
      },
      {
        element: <BoshMuhandis />,
        path: "/markazlar/muhandis",
      },
      {
        element: <BoshEnergetik />,
        path: "/markazlar/energetik",
      },
      {
        element: <RektorYordamchisi />,
        path: "/markazlar/rektor-yordamchisi",
      },
      {
        element: <MatbuotKotibi />,
        path: "/markazlar/matbuot-kotib",
      },
      {
        element: <Yuristkonsolt />,
        path: "/markazlar/yuriskonsolt",
      },
      {
        element: <BoshAuditor />,
        path: "/markazlar/auditor",
      },
      {
        element: <FizkaVaMatematika />,
        path: "/fakultetlar/fizika-matematika",
      },
      {
        element: <BoshlangichTalim />,
        path: "/fakultetlar/boshlangich",
      },
      {
        element: <OzbekTiliAdabiyoti />,
        path: "/fakultetlar/ozbek-tili",
      },
      {
        element: <PedagogikaVaPsix />,
        path: "/fakultetlar/pedagogika-psixologiya",
      },
      {
        element: <JismoniyMadanyat />,
        path: "/fakultetlar/jismoniy-madaniyat",
      },
      {
        element: <MaktabgachaTalim />,
        path: "/fakultetlar/maktabgacha-talim",
      },
      {
        element: <MilliyHunarmand />,
        path: "/fakultetlar/milliy-hunarmandchilik",
      },
      {
        element: <XorijiyTillar />,
        path: "/fakultetlar/xorijiy-tillar",
      },
      {
        element: <TabiyFanlar />,
        path: "/fakultetlar/tabiiy-fanlar",
      },
      {
        element: <RusTiliVaAdabiyoti />,
        path: "/fakultetlar/rus-tili",
      },
      {
        element: <Tarix />,
        path: "/fakultetlar/tarix",
      },
    ],
  },
];
