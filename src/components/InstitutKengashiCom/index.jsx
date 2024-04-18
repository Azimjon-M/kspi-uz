import React from "react";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import kotib from "../../assets/images/kotib.jpg";
import TextTranslate from "../TextTranslate";

const InstitutKengashiCom = () => {
  return (
    <div className="px-5 py-3 md:px-10 mb-3 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Institut kengashi" },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto mb-3">
        {/* News heading */}
        <div className="my-1 md:my-5">
          <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
            <TextTranslate id="kengash" />
          </h2>
        </div>
        <div className="card sm:card-side bg-base-100 shadow-xl w-full mx-auto mb-5">
          <figure className="w-full sm:w-1/2 lg:w-1/3">
            <img className="w-full" src={kotib} alt="kotib" />
          </figure>
          <div className="card-body xl:ml-10">
            <h2 className="card-title text-xl md:text-xl xl:text-2xl"><TextTranslate id="kengashKotib" /></h2>
            <p className="flex flex-col justify-center">
              <p className="font-semibold text-lg md:text-2xl xl:text-3xl"><TextTranslate id="kengashKotibIsm" /></p>
              <p className="card-info">
                <p className="font-semibold md:text-lg xl:text-xl"><TextTranslate id="kengashKotibBoglanish" /> </p>
                <Link className="md:text-lg xl:text-xl" to="tel:+998 91 684 49 73"><b><TextTranslate id="kengashKotibTelefon" />: </b>+998 91 684 49 73</Link><br />
                <Link className="md:text-lg xl:text-xl" to="mailto:example@mail.ru"><b><TextTranslate id="kengashKotibEmail" />: </b>example@mail.ru</Link>
              </p>
            </p>
          </div>
        </div>
        <h2 className="text-center font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3">
        <TextTranslate id="kengashKotibMaqsad" />
        </h2>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-5">
        <TextTranslate id="kengashKotibMaqsadTavsif" />
        </p>
        <h2 className="text-center font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3">
        <TextTranslate id="kengashKotibKengash" />
        </h2>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - Kadrlar tayyorlash milliy dasturiga muvofiq davlat ta’lim
          standartlari, o‘quv rejalari va dasturlarining qat’iy bajarilishini
          o‘rganib chiqadi hamda ustivor masalalar bo‘yicha tavsiya va
          topshiriqlar belgilaydi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - fakultetlarning o‘quv, ilmiy tadqiqot va ma’naviy-ma’rifiy ishlari
          to‘g‘risidagi, akademik litseylar, oliy ta’lim muassasasi qoshidagi
          ilmiy jamiyatlarning faoliyati to‘g‘risidagi, qabul komissiyasining
          qabul natijalari to‘g‘risidagi, shuningdek, marketing xizmatining xalq
          xo‘jaligining bitiruvchi mutaxassislarga bo‘lgan ehtiyoji, buyurtmachi
          tashkilotlar bilan hamkorlik aloqalari to‘g‘risidagi hisobotlarini
          eshitadi hamda tegishli qarorlar qabul qiladi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - Ilmiy tadqiqot, ma’naviy-ma’rifiy ishlar rejalarining ijrosi,
          professor-o‘qituvchilar tarkibining malaka oshirish va qayta
          tayyorlash masalalarini muhokama qiladi hamda tegishli qarorlarni
          qabul qiladi;
        </p>

        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - institut rivojlanishining yillik va istiqboliy rejalarini
          tasdiqlaydi, moddiy-texnik ta’minot va moliyaviy-xo‘jalik faoliyati
          natijalarini muhokama qiladi hamda tegishli qarorlarni qabul qiladi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - fakultet va kafedralarni ochish, tugatish, o‘zgartirish, shuningdek,
          marketing xizmati takliflarini hisobga olgan holda yangi bakalavriat
          yo‘nalishlari va magistratura mutaxassisliklari bo‘yicha kadrlar
          tayyorlashni yo‘lga qo‘yish yoki to‘xtatish bilan bog‘liq masalalar
          bo‘yicha qaror qabul qiladi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - “Oliy ta’lim muassasalariga pedagog-xodimlarni tanlov asosida ishga
          qabul qilish tartibi to‘g‘risida”gi Nizomga muvofiq
          professor-o‘qituvchilar lavozimlarini egallashi uchun tanlovlar
          o‘tkazadi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - professor, dotsent ilmiy unvonini olishga intilayotgan
          izlanuvchilarning hujjatlarini ko‘rib chiqadi va belgilangan tartibda
          ilmiy unvonga tasdiqlashga taqdim etadi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - ta’lim muassasasi bitiruvchilari hamda professor-o‘qituvchilarining
          ingliz tilini bilishlarini ta’minlash va komputer texnologiyalari,
          internetdan foydalana olishlari bo‘yicha tayanch ko‘nikmalarni
          shakllantirish masalalarini muhokama qiladi va chora-tadbirlarini
          belgilaydi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - ta’lim jarayonining o‘quv adabiyotlari bilan ta’minlanganligi, yangi
          avlod darsliklari, shuningdek innovatsion ta’lim texnologiyalarini
          qo‘llashga asoslangan o‘quv-uslubiy majmualarni tayyorlash va nashr
          etish masalalarini muhokama qiladi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - mustaqil-tadqiqotchi-izlanuvchi va katta ilmiy xodim-izlanuvchi
          institutlariga nomzodlarni tavsiya etadi, ularning shaxsiy rejalari va
          dissertatsiyalari mavzularini tasdiqlaydi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - iqtidorli talabalar va professor-o‘qituvchilarni “Iste’dod”
          jamg‘armasi orqali xorijiy oliy ta’lim muassasalarida stajirovka
          o‘tishga tavsiya etadi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - institutning iqtidorli talabalari va tadqiqotchi-izlanuvchilaridan
          munosiblarini O‘zbekiston Respublikasi Prezidenti Davlat stipendiyasi
          va boshqa nomdor davlat stependiyalar tanlovida ishtirok etishga
          nomzodlarni tavsiya etadi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - “Sog‘lom avlod uchun” jamg‘armasi bilan hamkorlikda talabalarning
          jismoniy tarbiyasi va ularning sog‘liqlarini yanada yaxshilash
          bo‘yicha tadbirlar ishlab chiqadi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - asosiy buyurtmachi tashkilot, korxona va muassasalar bilan
          korporativ hamkorlikni rivojlantirish, moddiy-texnik bazani
          mustahkamlash hamda talabalarning malakaviy amaliyoti samaradorligini
          oshirish masalalarini muhokama qiladi va ularni yaxshilash bo‘yicha
          tavsiyalar ishlab chiqadi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - xorijiy mamlakatlarning oliy ta’lim muassasalari bilan hamkorlik
          aloqalarini o‘rnatish bo‘yicha qarorlar qabul qiladi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - Ta’lim xizmatlari bilan shug‘ullanuvchi kichik korxonalar, firma va
          kurslar faoliyati haqida rahbarlarning hisobotlarini eshitadi hamda
          tegishli qaror qabul qiladi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          - Institut talabalari va xodimlarining texnika xavfsizligi va mehnat
          muhofazasini takomillashtirish bo‘yicha tadbirlarni belgilaydi;
        </p>
        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">- institut faoliyatiga oid boshqa vazifalarni hal qiladi.</p>

        <p className="text-md md:text-lg lg:text-xl xl:text-lg mb-3">
          Kengash tarkibi institut rektori, prorektorlari, dekanlari, kafedra
          mudirlari, bo‘lim boshliqlari, shuningdek institut Kasaba uyushmasi
          qo‘mitasi raisi, institut Xotin-qizlar qo‘mitasi Kengashi raisi hamda
          «Kamolot» YoIH IBT raisidan iborat.
        </p>
      </div>
    </div>
  );
};

export default InstitutKengashiCom;
