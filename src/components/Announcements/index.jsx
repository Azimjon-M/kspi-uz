import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIElon from "../../services/elon";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await APIElon.get();
        setAnnouncements(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="max-w-7xl mx-auto pb-20">
      <h1 className="text-xl md:text-4xl font-bold text-center text-[#004269]">
        Kelgusi voqealar
      </h1>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 px-5 md:px-10 lg:px-5 xl:px-0 gap-6 py-20">
        {announcements &&
          announcements.slice(0, 4).map((announcement) => {
            const { id, rasm, field, title, boshlanish_vaqti } = announcement;

            let day;

            switch (boshlanish_vaqti.slice(5, 7)) {
              case "01":
                day = "Yanvar";
                break;
              case "02":
                day = "Fevral";
                break;
              case "03":
                day = "Mart";
                break;
              case "04":
                day = "Aprel";
                break;
              case "05":
                day = "May";
                break;
              case "06":
                day = "Iyun";
                break;
              case "07":
                day = "Iyul";
                break;
              case "08":
                day = "Avgust";
                break;
              case "09":
                day = "Sentyabr";
                break;
              case "10":
                day = "Oktyabr";
                break;
              case "11":
                day = "Noyabr";
                break;
              case "12":
                day = "Dekabr";
                break;
              default:
                day = "Noma'lum";
                break;
            }

            return (
              <a
                key={id}
                href="qwdqwqddwq"
                className="flex md:block md:h-[580px] shadow-md hover:shadow-xl group overflow-hidden rounded-lg"
              >
                <div className="h-1/2 hidden md:block">
                  <img
                    src={rasm}
                    className="h-full w-full object-caver object-center group-hover:scale-105 duration-300"
                    alt=""
                  />
                </div>
                <div className="flex items-center bg-slate-600 md:bg-inherit">
                  <div className="md:inline-block bg-slate-600 px-2 md:px-4 py-2 text-slate-100 text-center uppercase relative md:-top-9 md:ml-6">
                    <p className="text-base">{day}</p>
                    <p className="text-2xl font-bold">
                      {boshlanish_vaqti.slice(8, 10)}
                    </p>
                  </div>
                </div>
                <div className="px-3 py-3 md:px-6 md:py-0">
                  <span className="text-base uppercase font-semibold text-red-800">
                    {field}
                  </span>
                  <h2 className="text-lg md:text-xl font-bold text-slate-600 line-clamp-4 md:my-2 group-hover:text-blue-500">
                    {title}
                  </h2>
                  <span className="text-lg font-extralight mt-5">
                    {boshlanish_vaqti.slice(11, 16)}
                  </span>
                </div>
              </a>
            );
          })}
      </div>
      <div className="text-center">
        <Link
          to="/barchaElonlar"
          className="text-lg md:text-2xl bg-slate-100 text-cyan-900 font-bold active:border border-slate-100 px-10 md:px-28 py-2 md:py-4 rounded-xl"
        >
          Barcha elonlar
        </Link>
      </div>
    </div>
  );
}

export default Announcements;
