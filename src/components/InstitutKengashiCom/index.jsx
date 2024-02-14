import React from "react";
import Breadcrumb from "../Breadcrumb";

const InstitutKengashiCom = () => {
  return (
    <div className="px-5 py-3 md:px-10 mb-3">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Institut kengashi" },
          ]}
        />
      </div>
      <div>
      <div className="max-w-7xl mx-auto mb-3">
          {/* News heading */}
          <div className="flex items-center justify-between my-1 md:my-3">
            <h2 className="text-xl md:text-3xl font-bold my-2">
              Institut kengashi
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutKengashiCom;
