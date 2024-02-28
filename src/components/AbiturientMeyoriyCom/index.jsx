import React from "react";
import Breadcrumb from "../Breadcrumb";

const AbiturientMeyoriyCom = () => {
  return (
    <div className="px-5 xl:px-10">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Me'yoriy-huquqiy hujjatlar" },
          ]}
        />
      </div>
      <h1 className="text-center text-xl md:text-3xl font-semibold py-5">
        Me'yoriy-huquqiy hujjatlar
      </h1>
      <div className="max-w-7xl"></div>
    </div>
  );
};

export default AbiturientMeyoriyCom;
