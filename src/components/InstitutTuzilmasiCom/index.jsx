import React from "react";
import Breadcrumb from "../Breadcrumb";
import insTuz1 from "../../assets/images/insTuz1.png";
import insTuz2 from "../../assets/images/insTuz2.png";
import { Link } from "react-router-dom";
import insTuzilmasi from "../../assets/pdf/insTuzilmasi.pdf";

const InstitutTuzilmasiCom = () => {
  return (
    <div className="px-5 py-3 md:px-10 mb-3">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Institut tuzilmasi" },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto mb-3">
          {/* News heading */}
          <div className="my-1 md:my-3">
            <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
              Institut tuzilmasi
            </h2>
          </div>
        <div className="mb-3">
          <img
            className="w-full"
            src={insTuz1}
            alt="Institut tuzilmasi rasmi"
          />
          <img
            className="w-full"
            src={insTuz2}
            alt="Institut tuzilmasi rasmi"
          />
        </div>
        <div className="border-2 border-[#004269] flex items-center justify-between rounded p-2">
          <div className="font-semibold md:text-lg lg:text-xl">
            Institut tuzilmasining pdf shakli
          </div>
          <Link
            to={insTuzilmasi}
            target="blank"
            className="btn bg-[#004269] hover:bg-white hover:border-[#004269] hover:text-[#004269] text-white"
          >
            Yuklab olish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstitutTuzilmasiCom;
