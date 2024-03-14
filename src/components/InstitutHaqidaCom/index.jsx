import React from "react";
import institutImage from "../../assets/images/institutImage.jpg";
import qoshmaTalim from "../../assets/images/institutHaqidaCom/QoshmaTalim.jpg";
import Talabalar from "../../assets/images/institutHaqidaCom/RivojlanayotganTalabalar.jpg";

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
                ovqat bilan to'liq ta'minlanadi. Stenfordda bakalavr darajasini
                olganlarning 80 foizdan ortig'i qarzsiz bitiradi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
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
              ovqat bilan to'liq ta'minlanadi. Stenfordda bakalavr darajasini
              olganlarning 80 foizdan ortig'i qarzsiz bitiradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutHaqidaCom;

/* <p className="mb-3">
  Muqimiy nomidagi Qo’qon davlat pedagogika instituti 1931-yil
  yanvar oyida kechki pedagogika oliy bilimgohi sifatida pedagogika
  texnikumi binosida o’z faoliyatini boshlagan. O’zbekiston Xalq
  Maorif Komissarligining 1938-yildagi 866-son buyrug’i bilan Qo’qon
  kechki pedagogika oliy bilimgohi kechki o’qituvchilar institutiga
  aylantirilgan. O’zbekiston Xalq Maorif Komissarligining 1938-yil
  27-noyabrdagi buyrug’i bilan institut qoshida sirtqi konsultatsiya
  punkti ochildi. 1939-1940 o’quv yilidan boshlab kunduzgi Davlat
  o’qituvchilar institutiga aylantirilgan. 1943- yildan Xotin-qiz
  o’qituvchilar instituti, 1954-yildan Xotin-qizlar Davlat
  pedagogika institutiga aylantirilgan. 1943-yil oktyabr oyida
  institutga shoir Muqimiy nomi berilgan. O’zbekiston Respublikasi
  Prezidentining 2017-yil 26-sentyabrdagi PQ-3289-son qarori asosida
  Qo’qon davlat pedagogika instituti O’zbekiston Respublikasi Oliy
  va o’rta maxsus ta’lim vazirligining tashkiliy tuzilmasiga kiradi.
  O’tgan davr mobaynida Qo’qon davlat pedagogika instituti kichik
  bir ta’lim maskanidan yirik oliy ta’lim muassasasigacha bo’lgan
  yo’lni bosib o’tdi.
</p>
<p className="mb-3">
  Qo‘qon davlat pedagogika institutida oliy ta’limda amalga
  oshiralayotgan tub islohotlar sharoitida sezilarli ijobiy
  o‘zgarishlar ro‘y bermoqda. Oliygohning qiyofasi o‘zgarib,
  moddiy-texnika bazasi yaxshilanyapti, ilmiy ishlanmalarni
  moliyalashtirish va ijtimoiy qo‘llab-quvvatlash kuchaytirilmoqda,
  jumladan, professor-o‘qituvchilarning daromadlari ham ortyapti.
  Oliy ta’lim — ilm-fan — ishlab chiqarish o‘rtasida uzviylik
  yaratilib, oliy o‘quv yurtida ham yangi bo‘linmalar ochildi.
  Bularning barchasi oliy ta’limga bo‘lgan yondashuvni o‘zgartirib,
  uning sifati hamda darajasini ko‘tarishga xizmat qilmoqda.
</p>
<p className="mb-3">
  Prezidentimizning pedagog kadrlar tayyorlovchi oliy ta’lim
  muassasalari faoliyatini takomillashtirishga qaratilgan
  takliflari, qabul qilingan qarorlar bizni yangi marralar sari
  chorlagani sir emas. Hozirda institutimizda 27 ta bakalavriat va
  16 ta magistratura mutaxassisliklari bo‘yicha jami 15000 nafardan
  ortiq talabalar tahsil olib kelmoqda.
</p>
<p className="mb-3">
  Bugungi kunda Qo‘qon davlat pedagogika instituti zamonaviy
  pedagogik kadrlarni tayyorlovchi respublikamizdagi yirik
  pedagogika muassasalaridan biri hisoblanadi. Institut o‘zining
  zamonaviy moddiy-texnika bazasiga ega bo‘lib, 269 ta o‘quv
  xonalari, bugungi kun talablari bilan jihozlangan 21 ta o‘quv
  laboratoriya xonalari, bitta stadion, 4 ta basketbol va voleybol
  maydonlari, 3 ta yopiq sport zali, zamonaviy ARM (umumiy kitob
  fondi 70377 nomda 265274 nusxani tashkil qiladi), fakultetlarda
  zamonaviy kompyuter xonalari, 3 ta binodan iborat barcha
  qulayliklarga ega bo‘lgan talabalar turar-joylari, 250 o‘rinli
  oshxona talabalarga xizmat ko‘rsatmoqda.
</p>
<p className="mb-3">
  Institutida 4 ta xorijiy oliy ta’lim muassalalari bilan
  hamkorlikda bakalavriat va magistratura mutaxassisliklari bo‘yicha
  qo‘shma ta’lim dasturlari asosida o‘qitish ham yo‘lga qo‘yilgan.
  Rossiyaning Akmulla nomli Boshqird davlat pedagogika universiteti
  (BDPU), Rossiya davlat kasb-hunar pedagogika universiteti
  (RDKXPU), Qozon federal universiteti va Belarusning Yanka kupala
  nomidagi Grodno davlat universitetilari (GrDU) bilan jami 168
  nafar talaba qo‘shma ta’lim dasturlari asosida o‘qitilmoqda.
</p>
<p className="mb-3">
  Qo‘shma ta’lim dasturida talabalar bakalavriyat bosqichida 1 va 2
  bosqichlarni Qo‘qon davlat pedagogika institutida 3 va 4
  bosqichlarni esa Rossiyaning M. Akmulla nomidagi Boshqird davlat
  pedagogika universiteti (Ufa shahrida), Belorus davlati Yanko
  Kupalo nomidagi Grodno davlat universitetida hamda magistratura
  bosqichida 2 bosqichni Qozon (Volgabo‘yi) federal universitetida
  o‘qishlari ko‘zda tutilgan. Dasturni muvaffaqiyatli yakunlagan
  talabalarga ikki tomonlama diplom beriladi.
</p>
<p className="mb-3">
  Bugungi kunda institutda jami 517 nafar malakali
  professor-o‘qituvchilar talabalarga ta’lim berib kelmoqda.
  Ularning 10 nafarini fan doktori, professorlar, 170 dan ortig‘i
  fan nomzodi (PhD), dotsentlardir.
</p>
<p className="mb-3">
  O‘zbekiston Respublikasi Prezidenti rahbarligida 2021 yil 16 iyun
  kuni “Oliy ta’lim sohasidagi islohotlar natijadorligi hamda yangi
  o‘quv yiliga tayyorgarlik” mavzusida o‘tkazilgan videoselektor
  yig‘ilishida belgilangan vazifalar ijrosini ta’minlash maqsadida
  professor-o‘qituvchilarning xorijdagi oliy ta’lim hamda
  ilmiy-tadqiqot maskanlarida malaka oshirishi va stajirovka
  o‘tashini ta’minlaydigan mexanizm yaratildi. Natijada istitutidan
  ko‘plab professor-o‘qituvchilar xorijiy mamlakatlarning yetakchi
  oliygohlariga ilmiy stajirovkaga, talabalar o‘quv amaliyotiga
  yuborildi.
</p>
<p className="mb-3">
  Ilmiy tadqiqotlar borasida ham erishilyotgan natijalar
  quvonarlidir. Institutda mavjud “Qo‘qon DPI. Ilmiy xabarlar” ilmiy
  jurnali O‘zR VM huzuridagi OAK Rayosatining qarori bilan kimyo,
  biologiya, tarix, filologiya fan tarmoqlari bo‘yicha ilmiy
  nashrlar ro‘yxatiga kiritildi.
</p>
<p className="mb-3">
  O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Oliy
  attestasiya komissiya Rayosatining “Malakaviy imtihon o‘tkazish
  to‘g‘risidagi nizomni tasdiqlash haqida”gi qaroriga asosan,
  institutda chet tili fani bo‘yicha hamda qo‘shimcha fanlardan
  malakaviy imtihon olishga ruxsat berildi.
</p>
<p className="mb-3">
  O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Oliy
  attestasiya komissiyasining qarori bilan Qo‘qon davlat pedagogika
  institutda O‘zbek tili, Til nazariyasi. Amaliy va kompyuter
  lingvistikasi ixtisosliklari bo‘yicha ilmiy kengash ochildi hamda
  institut tarixidagi ilk dissertasiya himoyasi o‘tkazildi.
</p>
<p className="mb-3">
  Davlatimiz rahbarining 2021 yil 9 sentyabrdagi “Respublika oliy
  ta’lim muassasalarida tahsil olayotgan, ilmiy-tadqiqot faoliyati
  bilan shug‘ullanayotgan iqtidorli yoshlarni yanada
  qo‘llab-quvvatlash to‘g‘risida”gi farmoni iqtidorli talabalarni
  qo‘llab-quvvatlashda muhim qadam bo‘ldi. Bu yil institutimizda ham
  davlat stipendiyalariga loyiq deb topilgan talabalar safi yanada
  kengaydi. Shu yilning o‘zidayoq 10 nafar talabaning O‘zbekiston
  Respublikasi Prezidenti va nomli davlat stipendiyalariga sazovor
  bo‘lganligi, o‘ylaymizki, uchinchi renesans davrini bunyodkori
  bo‘lmish yoshlarni yangi marralar sari undashi shubhasiz.
</p>
<p className="mb-3">
  Institutda davlatimiz rahbari tomonidan ilgari surilgan besh muhim
  tashabbus doirasida yoshlarning san’at, adabiyot va madaniyatga,
  axborot texnologiyalariga bo‘lgan iqtidori hamda qiziqishlarini
  qo‘llab-quvvatlash, qobiliyatlarini namoyon qilish uchun munosib
  sharoitlar yaratilmoqda. “Tarona” badiiy havaskorlik raqs
  ansambli, “Ohangrabo” yosh maqomchilar ansambli,
  talaba-yoshlarining “Parvoz” teatr studiyasi faoliyati yo‘lga
  qo‘yilgan.
</p>
<p className="mb-3">
  Institut talabalari Osiyo va jahon maydonlarida mamlakatimiz
  sharafini munosib himoya qilib g‘olib hamda sovrindorlar qatoridan
  joy olmoqda. Ayniqsa, Yaponiyaning Tokio shahrida bo‘lib o‘tgan
  yozgi Paralimpiya o‘yinlarida Jismoniy madaniyat fakulteti
  talabasi Mohigul Hamdamovaning oltin medalni qo‘lga kiritishi
  institut tarixida unitilmas voqea bo‘ldi. Respublikamiz ichki
  iste’mol bozorini oziq-ovqat mahsulotlari bilan to‘ldirish,
  mahsulot turlarini kengaytirish, yangi ish o‘rinlari yaratish
  maqsadida Qo‘qon davlat pedagogika instituti ishlab chiqarish
  bilan bog‘liq qator ijobiy ishlar amalga oshirib kelinmoqda.
</p>
<p className="mb-3">
  Jumladan, bu yil institutda Xitoy texnologiyasi asosida yaratilgan
  zamonaviy asbob-uskunalar yordamida qolipli non va non
  mahsulotlari ishlab chiqarish syexi ishga tushirildi. Ma’lumot
  o‘rnida aytish kerakki, zanglamaydigan materialdan maxsus
  ishlangan qoliplarda bir kunda 1500 dona qolipli non ishlab
  chiqarish quvvatiga ega ushbu syex 6 nafar talabani ish bilan
  ta’minlabgina qolmay, sifatli va arzon nonlarni iste’molchilarga
  yetkazib bermoqda.
</p>
<p className="mb-3">
  O‘zbekiston Respublikasi Prezidenti tomonidan yoshlar bilan
  ishlashda yangicha tizimni joriy etish borasida ilgari surilgan
  Besh tashabbusning ijrosi ta’minlash, shuningdek talabalarning
  darsdan bo‘sh vaqtlarini mazmunli tashkil etish, ularga
  shart-sharoit yaratish va ijtimoiy himoyalash, talabalarini o‘quv
  jarayonlarini mazmunli o‘tkazish, olingan nazariy bilimlarini
  amalda mustaxkamlash, oliy ta’lim — ilm-fan — ishlab chiqarish
  o‘rtasida integrasiyani chuqurlashtirish maqsadida institut
  qoshida “Yosh hunarmandlar uyi” unitar korxonasi tashkil etildi.
  Korxona kulolchilik, mebel ishlab chiqarish, qandolatchilik, atlas
  va adras matolar to‘qish hamda tikuvchilik syexlarini o‘zida
  birlashtirgan.
</p>
<p className="mb-3">
  Bugungi kunda Xitoy, Turkiya va Italiyadan keltirilgan zamonaviy
  mebel ishlab chiqarish va presslash uskunalari yordamida ta’lim
  muassasalari uchun mo‘ljallangan mebel jixozlaridan tortib,
  oshxona va xonadon mebellarigacha tayyorlanmoqda. Mahsulotlar o‘ta
  silliqliligi, chidamliligi, suv o‘tkazmaslik xususiyatiga ega
  ekanligi, yumshoqligi, ko‘rinishi jihatidan chiroyliligi va uzoq
  vaqt davomida o‘zining shaklini o‘zgartirmasligi bilan avvalgi
  mebel mahsulotlaridan tubdan farq qiladi. Tayyorlanadigan mebellar
  o‘z rangini yo‘qotmaydi, oddiy mebellarga nisbatan bir necha
  barobar uzoq muddatga xizmat qiladi. Hozirga kelib mebel ishlab
  chiqarish syexida ta’lim muassasalari talabalar turar joyi uchun
  mo‘ljallangan 2 yarusli krovat, tumba, shkaf, stul, stol va kitob
  javonlarini tayyorlanmoqda.
</p>
<p className="mb-3">
  Mamlakatimizda tariximiz, milliy o‘zligimiz timsoli bo‘lgan
  hunarmandchilik sohasini rivojlantirishga katta e’tibor qaratib
  kelinyapti. Hunarmandlar mehnati qadrlanib, ularga imkoniyat va
  imtiyozlar yaratib berilmoqda. Mazkur soha vakillari yangi ish
  o‘rinlari yaratish, yoshlarni ijtimoiy mehnatga jalb etish,
  turizmni rivojlantirishga katta hissa qo‘shmoqda. Institutning
  Milliy hunarmandchilik va amaliy san’at fakultetida tikuvchilik
  syexi, adras va atlas ishlab chiqarish syexi, kulolchilik
  syexlarining ishga tushirilishi hunarmandchilik sohasiga bo‘lgan
  yuksak e’tibor ifodasi bo‘ldi.
</p>
<p className="mb-3">
  Rishtondagi Xalqaro kulolchilik markazi bilan oliy ma’lumotli
  kadrlar tayyorlash sifatini oshirishda o‘zaro tajriba almashish,
  markaz bilan samarali hamkorlikni yo‘lga qo‘yish maqsadida tashkil
  etilgan kulolchilik syexida talabalar tomonidan tayyorlangan
  mahsulotlar Qozog‘istonning Olmota shahridagi Davlat muzeyining
  Markaziy ko‘rgazmalar zalida “Ipak yo‘li” Markaziy Osiyo
  hunarmandchilik ko‘rgazma-yarmarkasida namoyish etildi.
</p>
<p className="mb-3">
  Eng muhimi yuqoridagi syexlar faoliyati yo‘lga qo‘yilishi bilan
  talabalar o‘qishdan bo‘sh vaqtlarida nafaqat amaliyot o‘tash,
  balki ishlash imkoniyatiga ham ega bo‘lmoqda. Korxonada ishlash
  talabalarga amaliy ko‘nikmalarni berib, olgan nazariy bilimlarini
  amaliy ko‘nikmalar bilan mustahkamlamoqdalar. Talaba yoshlarning
  bo‘sh vaqtini mazmunli o‘tkazish, ularni xar tomonlama
  rivojlantirish, xavaskorlik ijodiga jalb qilish va mazmunli xordiq
  chiqarishni uyushtirish maqsadida IT-parkda karaoke yordamida
  qo‘shiq ijro qilishga mo‘ljallangan xona tashkil etildi.
</p>
<p className="mb-3">
  Bu yerda talabalar musiqa asarlari, shu jumladan, mumtoz va
  zamonaviy janrlar, xususan, estrada bo‘yicha o‘zlarini sinovdan
  o‘tkazishlari mumkin bo‘ladi.
</p>
<p className="mb-3">
  Institutdagi zamonaviy IT-park kelajakda zamonaviy bilim va
  ko‘nikmalarga ega kadrlar tayyorlashda muhim rol o‘ynamoqda. Bu
  yerda istiqbolli startap-loyihalarni qo‘llab-quvvatlash bo‘yicha
  ishlar yo‘lga qo‘yilmoqda. Konferensiyalar zali, o‘quv xonasi,
  ovoz yozish studiyasi hamda mini oshxonani o‘z ichiga olgan park
  bir vaqtning o‘zida 50 nafar talabaga xizmat ko‘rsatish
  imkoniyatiga ega. Aytish mumkinki, bu yerda axborot
  texnologiyalari yo‘nalishida ilk loyihalar muvaffaqiyatli amalga
  oshirilishi kutilmoqda.
</p> */
