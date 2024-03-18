import React from "react";
import proba from "../../assets/images/call.jpg";
// import { Link } from "react-router-dom";

function Announcements() {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-xl md:text-4xl font-bold text-center text-[#004269]">
        Kelgusi voqealar
      </h1>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 px-10 xl:px-0 gap-6 py-20">
        <a
          href=""
          className="md:h-[580px] shadow-md hover:shadow-xl group overflow-hidden rounded-lg"
        >
          <div className="h-1/2">
            <img
              src={proba}
              className="h-full w-full object-caver object-center group-hover:scale-105 duration-300"
              alt=""
            />
          </div>
          <div>
            <div className="inline-block bg-slate-600 px-4 py-2 text-slate-100 text-center uppercase relative -top-9 ml-6">
              <p className="text-base">Mart</p>
              <p className="text-2xl font-bold">18</p>
            </div>
          </div>
          <div className="px-6">
            <span className="text-base uppercase font-semibold text-red-800">
              Maruza/taqdimot/suxbat
            </span>
            <h2 className="text-xl font-bold text-slate-600 line-clamp-4 my-2 group-hover:text-blue-500">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and types.
            </h2>
            <span className="text-lg font-extralight mt-5">16:00 PM</span>
          </div>
        </a>
      </div>
      <a className="text-lg md:text-2xl bg-slate-100 text-cyan-900 font-bold active:border border-slate-100 px-10 md:px-28 py-2 md:py-4 rounded-xl">
        Barcha elonlar
      </a>
    </div>
  );
}

export default Announcements;
