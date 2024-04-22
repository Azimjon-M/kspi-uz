import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TextTranslate from "../TextTranslate"
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
        label: <TextTranslate id="bolimlarRejaMoliya"/>,
        value: "RejaMoliya",
        lavozim: <TextTranslate id="bolimlarRejaMoliyaBolimBoshligi"/>,
        ism: <TextTranslate id="bolimlarRejaMoliyaBolimBoshligiIsmi"/>,
        tel: "+998 93 971 00 86",
        mutahasisligi: <TextTranslate id="bolimlarRejaMoliyaBolimUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: reja,
      },
      {
        label: <TextTranslate id="bolimlarOquvUslubiyBoshqarma"/>,
        value: "OquvUslubiy",
        lavozim: <TextTranslate id="bolimlarOquvUslubiyBoshqarmaBoshligi"/>,
        ism: <TextTranslate id="bolimlarOquvUslubiyBoshqarmaIsmi"/>,
        tel: "+998 97 966 00 14",
        mutahasisligi: <TextTranslate id="bolimlarOquvUslubiyBoshqarmaUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi.",
        img: oquv,
      },
      {
        label: <TextTranslate id="bolimlarKorrupsiyagaQarshiKurashish"/>,
        value: "KorrupsiyagaQarshi",
        lavozim: <TextTranslate id="bolimlarKorrupsiyagaQarshiKurashishBoshligi"/>,
        ism: <TextTranslate id="bolimlarKorrupsiyagaQarshiKurashishIsmi"/>,
        tel: "+998 90 426 17 78",
        mutahasisligi: <TextTranslate id="bolimlarKorrupsiyagaQarshiKurashishUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: korrupsiya,
      },
      {
        label: <TextTranslate id="bolimlarTalimSifatiniNazoratQilish"/>,
        value: "TalimSifati",
        lavozim: <TextTranslate id="bolimlarTalimSifatiniNazoratQilishBoshligi"/>,
        ism: <TextTranslate id="bolimlarTalimSifatiniNazoratQilishIsmi"/>,
        tel: "+998 94 495 00 93",
        mutahasisligi: <TextTranslate id="bolimlarTalimSifatiniNazoratQilishUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        // img: talimSifat,
      },
      {
        label:<TextTranslate id="bolimlarJismoniyVaYuridikShaxslarningMurojaatlariBilanIshlashNazoratVaQonitoringQilish"/>,
        value: "JismoniyYuridikqilishKafedrasi",
        lavozim:<TextTranslate id="bolimlarJismoniyVaYuridikShaxslarningMurojaatlariBilanIshlashNazoratVaQonitoringQilishBoshligi"/>,
        ism: <TextTranslate id="bolimlarJismoniyVaYuridikShaxslarningMurojaatlariBilanIshlashNazoratVaQonitoringQilishIsmi"/>,
        tel: "+998 91 202 30 22",
        mutahasisligi: <TextTranslate id="bolimlarJismoniyVaYuridikShaxslarningMurojaatlariBilanIshlashNazoratVaQonitoringQilishUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: nazorat,
      },
      {
        label: <TextTranslate id="bolimlarXodimlarBolimi"/>,
        value: "Xodimlar",
        lavozim: <TextTranslate id="bolimlarXodimlarBolimiBoshligi"/>,
        ism: <TextTranslate id="bolimlarXodimlarBolimiIsmi"/>,
        mutahasisligi: <TextTranslate id="bolimlarXodimlarBolimiUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat",
        img: xodimlar,
      },
      {
        label: <TextTranslate id="bolimlarXalqaroHamkorlik"/>,
        value: "XalqaroHamkorlik",
        lavozim: <TextTranslate id="bolimlarXalqaroHamkorlikBoshligi"/>,
        ism: <TextTranslate id="bolimlarXalqaroHamkorlikIsmi"/>,
        tel: "+998 90 627 70 08",
        mutahasisligi: <TextTranslate id="bolimlarXalqaroHamkorlikUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: xalqaro,
      },
      {
        label: <TextTranslate id="bolimlarMarketingVaTalabalarAmaliyoti"/>,
        value: "MarketingTalabalar",
        lavozim: <TextTranslate id="bolimlarMarketingVaTalabalarAmaliyotiBoshligi"/>,
        ism: <TextTranslate id="bolimlarMarketingVaTalabalarAmaliyotiIsmi"/>,
        tel: "+998 94 440 83 31",
        mutahasisligi: <TextTranslate id="bolimlarMarketingVaTalabalarAmaliyotiUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: talabaAmaliyot,
      },
      {
        label: <TextTranslate id="bolimlarSirtqiBolimi"/>,
        value: "Sirtqi",
        lavozim: <TextTranslate id="bolimlarSirtqiBolimiBoshligi"/>,
        ism: <TextTranslate id="bolimlarSirtqiBolimiIsmi"/>,
        tel: "+998 99 696 33 77",
        mutahasisligi: <TextTranslate id="bolimlarSirtqiBolimiUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti!",
        img: sirtqi,
      },
      {
        label: <TextTranslate id="bolimlarYoshlarBilanIshlashManaviyatVaMarifat"/>,
        value: "YoshlarBilan",
        lavozim:<TextTranslate id="bolimlarYoshlarBilanIshlashManaviyatVaMarifatBoshligi"/>,
        ism: <TextTranslate id="bolimlarYoshlarBilanIshlashManaviyatVaMarifatIsmi"/>,
        tel: "+998 94 440 83 31",
        mutahasisligi: <TextTranslate id="bolimlarYoshlarBilanIshlashManaviyatVaMarifatUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat la",
        img: yoshlarBilan,
      },
      {
        label:<TextTranslate id="bolimlarIlmiyTadqiqotlarInnovatsiyalarVaIlmiyPedagogikKadrlarniTayyorlash"/>,
        value: "ilmiy-tadqiqot",
        lavozim:<TextTranslate id="bolimlarIlmiyTadqiqotlarInnovatsiyalarVaIlmiyPedagogikKadrlarniTayyorlashBoshligi"/>,
        ism: <TextTranslate id="bolimlarIlmiyTadqiqotlarInnovatsiyalarVaIlmiyPedagogikKadrlarniTayyorlashIsmi"/>,
        tel: "+998 90 155 50 00",
        mutahasisligi: <TextTranslate id="bolimlarIlmiyTadqiqotlarInnovatsiyalarVaIlmiyPedagogikKadrlarniTayyorlashUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: ilmiyTadqiqot,
      },
      {
        label: <TextTranslate id="bolimlarIlmiyInnovatsionIshlanmalarniTijoratlashtirish"/>,
        value: "IlmiyInnovatsion",
        lavozim:<TextTranslate id="bolimlarIlmiyInnovatsionIshlanmalarniTijoratlashtirishBoshligi"/>,
        ism: <TextTranslate id="bolimlarIlmiyInnovatsionIshlanmalarniTijoratlashtirishIsmi"/>,
        tel: "+998 90 121 76 81",
        mutahasisligi: <TextTranslate id="bolimlarIlmiyInnovatsionIshlanmalarniTijoratlashtirishUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: ilmiyInnovatsion,
      },
      {
        label:<TextTranslate id="bolimlarIqtidorliTalabalarningIlmiyTadqiqotFaoliyatiniTashkilEtish"/>,
        value: "Iqtidorli",
        lavozim:<TextTranslate id="bolimlarIqtidorliTalabalarningIlmiyTadqiqotFaoliyatiniTashkilEtishBoshligi"/>,
        ism: <TextTranslate id="bolimlarIqtidorliTalabalarningIlmiyTadqiqotFaoliyatiniTashkilEtishIsmi"/>,
        tel: "+998 90 507 60 36",
        mutahasisligi: <TextTranslate id="bolimlarIqtidorliTalabalarningIlmiyTadqiqotFaoliyatiniTashkilEtishUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: iqtidorliTalabalar,
      },
      {
        label: <TextTranslate id="bolimlarMagistratura"/>,
        value: "Magistratura",
        lavozim: <TextTranslate id="bolimlarMagistraturaBoshligi"/>,
        ism: <TextTranslate id="bolimlarMagistraturaIsmi"/>,
        tel: "+998 90 974 17 65",
        mutahasisligi: <TextTranslate id="bolimlarMagistraturaUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: magistratura,
      },
      {
        label: <TextTranslate id="bolimlarQoshmaTalimDasturlariniMuvofiqlashtirish"/>,
        value: "QoshmaTalim",
        lavozim:<TextTranslate id="bolimlarQoshmaTalimDasturlariniMuvofiqlashtirishBoshligi"/>,
        ism: <TextTranslate id="bolimlarQoshmaTalimDasturlariniMuvofiqlashtirishIsmi"/>,
        tel: "+998 91 694 01 55",
        mutahasisligi: <TextTranslate id="bolimlarQoshmaTalimDasturlariniMuvofiqlashtirishUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: QoshmaTalim,
      },
      {
        label: <TextTranslate id="bolimlarBuxgalteriya"/>,
        value: "Buxgalteriya",
        lavozim: <TextTranslate id="bolimlarBuxgalteriyaBoshligi"/>,
        ism: <TextTranslate id="bolimlarBuxgalteriyaIsmi"/>,
        tel: "+998 93 972 44 01",
        mutahasisligi: <TextTranslate id="bolimlarBuxgalteriyaUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: buxgalteriya,
      },
      {
        label: <TextTranslate id="bolimlarTexnikFoydalanishVaXojalik"/>,
        value: "TexnikFoydalanish",
        lavozim: <TextTranslate id="bolimlarTexnikFoydalanishVaXojalikBoshligi"/>,
        ism: <TextTranslate id="bolimlarTexnikFoydalanishVaXojalikIsmi"/>,
        tel: "+998 91 154 30 03",
        mutahasisligi: <TextTranslate id="bolimlarTexnikFoydalanishVaXojalikUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: texnikFoydalanish,
      },
      {
        label: <TextTranslate id="bolimlarFuqaroVaMehnatMuhofazasi"/>,
        value: "FuqaroMehnat",
        lavozim: <TextTranslate id="bolimlarFuqaroVaMehnatMuhofazasiBoshligi"/>,
        ism: <TextTranslate id="bolimlarFuqaroVaMehnatMuhofazasiIsmi"/>,
        tel: "+998 91 141 26 14",
        mutahasisligi: <TextTranslate id="bolimlarFuqaroVaMehnatMuhofazasiUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: fuqaroMehnat,
      },
      {
        label: <TextTranslate id="bolimlarDevonxonaVaArxiv"/>,
        value: "Devonxona",
        lavozim: <TextTranslate id="bolimlarDevonxonaVaArxivBoshligi"/>,
        ism: <TextTranslate id="bolimlarDevonxonaVaArxivIsmi"/>,
        tel: "+998 94 557 20 79",
        mutahasisligi: <TextTranslate id="bolimlarDevonxonaVaArxivUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
        vazifasi:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur earum labore dolorum? Quo, facilis. Unde a accusantium dignissimos mollitia, blanditiis eveniet modi deleniti! Obcaecati vel quia perferendis possimus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat tenetur. Architecto labore officia reprehenderit quaerat laborum, dolorum veritatis animi repudiandae sint cupiditate enim minus modi quo? Iure, maxime earum",
        img: devonxona,
      },
      {
        label:<TextTranslate id="bolimlarTalabalarniTurarJoyBilanTaminlashIshlariniMuvofiqlashtirish"/>,
        value: "TurarJoy",
        lavozim: <TextTranslate id="bolimlarTalabalarniTurarJoyBilanTaminlashIshlariniMuvofiqlashtirishBoshligi"/>,
        ism: <TextTranslate id="bolimlarTalabalarniTurarJoyBilanTaminlashIshlariniMuvofiqlashtirishIsmi"/>,
        tel: "+998 94 448 23 03",
        mutahasisligi: <TextTranslate id="bolimlarTalabalarniTurarJoyBilanTaminlashIshlariniMuvofiqlashtirishUnvoni"/>,
        qabul: <TextTranslate id="qabulKunlari"/>,
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
        <TextTranslate id="bolimlarTitle"/>
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
                              <TextTranslate id="qabul"/>: {qabul}
                            </h4>
                            <h4 className="block mb-2 text-center lg:text-start font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              <TextTranslate id="telefon"/>: {tel}
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
