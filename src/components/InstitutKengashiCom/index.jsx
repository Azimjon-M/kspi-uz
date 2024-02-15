import React from "react";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import kotib from "../../assets/images/kotib.jpg";

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
      <div className="max-w-7xl mx-auto mb-3">
        {/* News heading */}
        <div className="my-1 md:my-5">
          <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
            Institut kengashi
          </h2>
        </div>
        <div className="card card-side bg-base-100 shadow-xl max-w-3xl mx-auto mb-5">
          <figure>
            <img src={kotib} alt="kotib" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl">Kengash kotibi</h2>
            <p className="flex flex-col justify-center">
              <p className="font-semibold text-lg">Rahmonov Xusan Tojiyevich</p>
              <p className="card-info">
                <p className="font-semibold">Bog'lanish uchun: </p>
                <Link to="tel:+998 91 684 49 73">+998 91 684 49 73</Link>
              </p>
            </p>
          </div>
        </div>
        <p>
          Institut Kengashi oliy kollegial organ bo`lib, barcha yo‘nalishdagi
          faoliyatini muvofiqlashtirib boradi. Dolzarb vazifalarni tezkor va
          sifatli hal qilish bo`yicha qarorlar qabul qiladi. Institut rektori
          Kengash raisi sanaladi. Kengash tarkibida prorektorlar, dekanlar,
          institutning yetuk professor-o‘qituvchilari, jamoat tashklotlari
          yetakchilari faoliyat ko‘rsatadi. Qo‘qon davlat pedagogika instituti
          kengash rejasi Qo‘qon davlat pedagogika instituti kengash nizom.
        </p>
      </div>
    </div>
  );
};

export default InstitutKengashiCom;
