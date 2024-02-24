import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import bachlorImg from "../../assets/images/bachelor.jpg";

function Bachelor() {
  return (
    <div className="md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="max-h-vh">
        <div className="absolute md:top-[25%] lg:top-[25%] xl:top-[40%]">
          <h1
            className="text-center leading- sm:text-5xl md:text-7xl font-bold text-gray-100 text-shadow"
            style={{ textShadow: "0 0 20px rgba(0,0,0, 1)" }}
          >
            Bakalavr ta'limi
          </h1>
          <p
            className="text-gray-100 text-2xl text-center hidden md:block md:px-12 lg:px-32 xl:px-44 mt-5 leading-10 text-shadaw"
            style={{ textShadow: "0 0 30px rgba(0,0,0, 1)" }}
          >
            Bakalavriat talabalaridan QDPIni nimadan ajratib turishini so'rang
            va siz 6560 xil javob olasiz. Buning sababi, hech qanday tajriba
            QDPI ta'limini aniqlamaydi. Buning o'rniga, keng ko'lamli ta'lim
            innovatsion imkoniyatlar va tajribalar bitiruvchilarni yetuk
            liderlar, mustaqil fikrlovchilar va ta'sir ko'rsatishga
            bag'ishlangan faol global fuqarolar sifatida rivojlanishiga
            tayyorlaydi.
          </p>
        </div>
        <img src={bachlorImg} className="w-full h-full" alt="" />
      </div>
      <div className="max-w-7xl mx-5 xl:mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-8 sm:-mt-10 lg:-mt-28 mb-10">
        <div className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 transition-transform">
          <div>
            <MdOutlineLibraryBooks className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              DTS va malaka talablari
            </p>
          </div>
        </div>
        <div className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 transition-transform">
          <div>
            <MdOutlineLibraryBooks className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              O'quv rejalar
            </p>
          </div>
        </div>
        <div className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 transition-transform">
          <div>
            <MdOutlineLibraryBooks className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              Fan dasturlari
            </p>
          </div>
        </div>
        <div className="shadow-xl flex justify-center items-center md:h-60 py-5 rounded-lg bg-slate-200 group hover:bg-[#2A4D64] hover:scale-105 transition-transform">
          <div>
            <MdOutlineLibraryBooks className="text-7xl md:text-8xl mx-auto group-hover:text-slate-200" />
            <p className="text-xl text-center font-bold group-hover:text-slate-200 mt-2">
              Fanlar katalogi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bachelor;
