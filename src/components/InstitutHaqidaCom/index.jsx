import React from "react";
import institutImage from "../../assets/images/institutImage.jpg";
import qoshmaTalim from "../../assets/images/institutHaqidaCom/QoshmaTalim.jpg";
import Talabalar from "../../assets/images/institutHaqidaCom/RivojlanayotganTalabalar.jpg";
import XilmaXilTalabalar from "../../assets/images/institutHaqidaCom/XilmxXilTalabalar.jpg";

const InstitutHaqidaCom = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-20">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-[#004269]">
            Biz haqimizda
          </h1>
        </div>
        <div className="px-2 md:px-10 xl:px-0">
          <p className="text-xl md:text-[2rem] font-light font_source md:leading-[3.5rem] text-center my-10">
            Muqimiy nomidagi Qo’qon davlat pedagogika instituti 1931-yil yanvar
            oyida o’z faoliyatini boshlab kelmoqda. Qo’qon davlat pedagogika
            institutida oliy ta’limda amalga oshiralayotgan tub islohotlar
            sharoitida sezilarli ijobiy o’zgarishlar ro’y bermoqda. Oliygohning
            qiyofasi o’zgarib, moddiy-texnika bazasi yaxshilanmoqda, ilmiy
            ishlanmalarni moliyalashtirish va ijtimoiy qo’llab-quvvatlash
            kuchaytirilmoqda. Oliy ta’lim ilm-fan ishlab chiqarish o’rtasida
            uzviylik yaratildi. Bularning barchasi oliy ta’limga bo’lgan
            yondashuvni o’zgartirib, uning sifati hamda darajasini ko’tarishga
            xizmat qilmoqda.
          </p>
        </div>
        <div className="px-4 xl:px-0 md:py-20">
          <img
            src={institutImage}
            className="w-full max-h-[547px] shadow-2xl rounded-xl opacity-75"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-[#004269]">
            Tadqiqot, o'qitish va murabbiylik
            <br /> sohasidagi mukammallik
          </h1>
          <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
            <div className="z-10 mx-6 md:mx-0">
              <img
                src={institutImage}
                className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
                alt=""
              />
            </div>
            <div className="bg-[#F2F2F2] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
              <h3 className="text-2xl md:text-3xl font-medium">Biz kimmiz</h3>
              <p className="text-md md:text-xl mt-3">
                Fakultetimiz, talabalarimiz va xodimlarimizni harakatga
                keltiradigan narsa bu imkoniyatlar ruhi, boshqa odamlarning
                farzandlariga foyda keltirish uchun yagona farzandi xotirasiga
                Institutimizda biz o'tmishimizdan saboq olamiz, lekin kelajakka
                e'tibor qaratamiz va doimiy ravishda dunyoni yaxshiroq joyga
                aylantirishning yangi usullarini qidiramiz. Biz oliy ta’lim
                gullab-yashnayotgan jamiyatni qo’llab-quvvatlashda muhim rol
                o’ynashiga qattiq ishonamiz. Institutimiz nafaqat talabalarni
                o'zlari tanlagan yo'lga tayyorlaydilar, balki ular fuqarolar
                rahbarlari va muammolarni hal qiluvchilarning keyingi avlodini
                yaratishga yordam beradi. Oliy ta’lim muassasalari jamiyatimizda
                faqat bilimlarni yaratish va tarqatishga bag’ishlangan o’ziga
                xos va doimiy vazifani bajaradi.
              </p>
            </div>
          </div>
          <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
            <div className="z-10 mx-6 md:mx-0 md:order-last">
              <img
                src={qoshmaTalim}
                className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
                alt=""
              />
            </div>
            <div className="bg-[#F2F2F2] p-10 md:pl-16 md:pr-28 md:py-20 -mt-6 md:mt-0 md:-mr-16">
              <h3 className="text-2xl md:text-3xl font-medium">
                Qo'shma hamkorlar
              </h3>
              <p className="text-md md:text-xl mt-3">
                Institutimizda 4 ta xorijiy oliy ta’lim muassalalari bilan
                hamkorlikda bakalavriat va magistratura mutaxassisliklari
                bo‘yicha qo‘shma ta’lim dasturlari asosida o‘qitish ham yo‘lga
                qo‘yilgan. Rossiyaning Akmulla nomli Boshqird davlat pedagogika
                universiteti (BDPU), Rossiya davlat kasb-hunar pedagogika
                universiteti (RDKXPU), Qozon federal universiteti va Belarusning
                Yanka kupala nomidagi Grodno davlat universitetilari (GrDU)
                bilan jami 168 nafar talaba qo‘shma ta’lim dasturlari asosida
                o‘qitilmoqda.
              </p>
            </div>
          </div>
          <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
            <div className="z-10 mx-6 md:mx-0">
              <img
                src={Talabalar}
                className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
                alt=""
              />
            </div>
            <div className="bg-[#F2F2F2] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
              <h3 className="text-2xl md:text-3xl font-medium">
                Rivojlanayotgan talabalik hayoti
              </h3>
              <p className="text-md md:text-xl mt-3">
                Rivojlanayotgan turar joy kampusi Institutimiz taklif qiladigan
                jahon miqyosidagi ta'lim tajribasining ajralmas qismidir.
                Institutimizda akapella qo'shiqchilaridan tortib olimpiya
                sportchilarigacha bo'lgan dunyoning turli burchaklaridan kelgan
                ijodiy va qobiliyatli odamlar hamjamiyati yashaydi. Talabalar
                600 dan ortiq talaba tashkilotlari orasidan diniy, etnik va
                madaniy guruhlardan tortib, san'at va jamoat xizmatiga,
                ijtimoiy, sport va ko'ngilochar tadbirlarga e'tibor qaratadigan
                tashkilotlarga jalb qilishlari mumkin. Institutimiz bo'ylab 36
                ta sport turlarini taklif etadi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#544948] py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-source text-center text-[#ffffff]">
            Kirish
          </h1>
          <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
            <div className="z-10 mx-6 md:mx-0">
              <img
                src={XilmaXilTalabalar}
                className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
                alt=""
              />
            </div>
            <div className="bg-[#F2F2F2] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
              <h3 className="text-2xl md:text-3xl font-medium">
                Uning barcha shakllarida xilma-xillikka chuqur hurmat
              </h3>
              <p className="text-md md:text-xl mt-3">
                QDPI tajriba, qiziqishlar va istiqboldagi xilma-xillikni
                qadrlaydi. Biz barcha talabalar bir-birining tajribasidan
                o'rganish va o'z qarashlari va tasavvurlari haqida tanqidiy fikr
                yuritish imkoniyatiga ega bo'lgan kampus muhitini yaratishga
                harakat qilmoqdamiz. Institutimiz barcha talabalarga irqiy,
                ijtimoiy-iqtisodiy, geografik va siyosiy yo'nalishlar bo'ylab
                hamjamiyat va aloqa o'rnatish uchun imkoniyat va vositalarni
                taqdim etishga intiladi, bu ko'pincha ko'proq tushunish, o'zaro
                hurmat va haqiqiy do'stlikka to'sqinlik qiladi. Ijtimoiy
                mas'uliyat va axloqni qadrlashni rivojlantirish imkoniyatlari
                Institutimiz ta'lim tajribasining ajralmas qismidir.
              </p>
            </div>
          </div>
          <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
            <div className="z-10 mx-6 md:mx-0 md:order-last">
              <img
                src={qoshmaTalim}
                className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
                alt=""
              />
            </div>
            <div className="bg-[#F2F2F2] p-10 md:pl-16 md:pr-28 md:py-20 -mt-6 md:mt-0 md:-mr-16">
              <h3 className="text-2xl md:text-3xl font-medium">
                Farq qiladigan moliyaviy yordam
              </h3>
              <p className="text-md md:text-xl mt-3">
                Biz har bir talabani QDPIda muvaffaqiyatli o'qish uchun zarur
                bo'lgan to'liq miqdorda moliyaviy yordam olishda
                qo'llab-quvvatlashga intilamiz. Moliyaviy tenglikka bo'lgan bu
                majburiyat nafaqat uni olgan talabalarning hayotini, balki ular
                bilan birga o'qiyotganlarning ta'limini ham o'zgartiradi.
                institutimiz magistrantlarining qariyb 70 foizi moliyaviy yordam
                oladi, kam ta'minlangan oilalar esa o'qish uchun to'lov, xona va
                ovqat bilan to'liq ta'minlanadi. QDPIda bakalavr darajasini
                olganlarning 80 foizdan ortig'i qarzsiz bitiradi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 px-6 my-20 md:my-32">
          <div className="z-10 mx-6 md:mx-0">
            <img
              src={institutImage}
              className="w-full lg:max-h-96 xl:h-[460px] shadow-2xl"
              alt=""
            />
          </div>
          <div className="bg-[#F2F2F2] p-10 md:pl-28 md:pr-16 md:py-20 -mt-6 md:mt-0 md:-ml-16">
            <h3 className="text-2xl md:text-3xl font-medium">
              Uning barcha shakllarida xilma-xillikka chuqur hurmat
            </h3>
            <p className="text-md md:text-xl mt-3">
              QDPI tajriba, qiziqishlar va istiqboldagi xilma-xillikni
              qadrlaydi. Biz barcha talabalar bir-birining tajribasidan
              o'rganish va o'z qarashlari va tasavvurlari haqida tanqidiy fikr
              yuritish imkoniyatiga ega bo'lgan kampus muhitini yaratishga
              harakat qilmoqdamiz. Institutimiz barcha talabalarga irqiy,
              ijtimoiy-iqtisodiy, geografik va siyosiy yo'nalishlar bo'ylab
              hamjamiyat va aloqa o'rnatish uchun imkoniyat va vositalarni
              taqdim etishga intiladi, bu ko'pincha ko'proq tushunish, o'zaro
              hurmat va haqiqiy do'stlikka to'sqinlik qiladi. Ijtimoiy
              mas'uliyat va axloqni qadrlashni rivojlantirish imkoniyatlari
              Institutimiz ta'lim tajribasining ajralmas qismidir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutHaqidaCom;
