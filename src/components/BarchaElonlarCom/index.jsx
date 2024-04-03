import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIElon from "../../services/elon";

import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function BarchaElonlarCom() {
  const Lang = useSelector((state) => state.reducerLang.isLang);
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    await APIElon.get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="bg-[#f4f4f4]">
      <div className="max-w-5xl mx-auto md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)] py-20">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[#004269]">
          Barcha elonlar
        </h1>
        <div className="grid gap-5 md:mt-10 px-5">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="flex p-4 md:p-5 shadow-md bg-white hover:-translate-y-2 duration-150 hover:shadow-2xl"
              >
                <div className="w-60 h-52 hidden md:block">
                  <img
                    src={item.rasm}
                    className="w-full h-52 object-center"
                    alt=""
                  />
                </div>
                <div className="md:pl-5">
                  <h3 className="text-base uppercase font-semibold text-red-800">
                    {item && item[`field_${Lang}`]}
                  </h3>
                  <Link
                    to="/elonBatafsil"
                    className="text-lg md:text-2xl font-bold text-slate-600 line-clamp-2 md:my-2 hover:text-red-700 hover:underline"
                  >
                    {item && item[`title_${Lang}`]}
                  </Link>
                  <p className="flex  text-base md:text-lg md:items-center mt-2">
                    <FaRegCalendarAlt />
                    <span className="pl-2">
                      {/* {day}, {year}-yil {theDate}-{month}, {startTime} dan{" "}
                        {endTime} */}
                    </span>
                  </p>
                  <p className="flex text-base md:text-lg md:items-center mt-2">
                    <IoLocationSharp />
                    <span className="pl-2 text-blue-500">{item.adress}</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BarchaElonlarCom;

{
  /* <div>
  <p>
    <b>Title: </b>
    {item && item[`title_${Lang}`]}
  </p>
  <p>
    <b>Detail: </b>
    {item && item[`detail_${Lang}`]}
  </p>
  <p>
    <b>Field: </b>
    {item && item[`field_${Lang}`]}
  </p>
  <p>
    <b>Adress: </b>
    {item && item[`adress_${Lang}`]}
  </p>
</div> */
}
