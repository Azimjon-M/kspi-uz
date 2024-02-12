import React from "react";
import Breadcrumb from "../Breadcrumb";

const RekvizitlarCom = () => {
  return (
    <div className="px-5 py-3 md:px-10 lg:px-20">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[{ text: "Bosh sahifa", link: "/" }, { text: "Rekvizitlar" }]}
        />
      </div>
      <table className="mx-auto border-collapse border border-slate-400 ...">
        <thead>
          <tr>
            <th colSpan={2}>Qo’qon davlat pedagogika instuti</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>INN:</td>
            <td>200131171</td>
          </tr>
          <tr>
            <td>OKONX:</td>
            <td>92110</td>
          </tr>
          <tr>
            <td>Shxr:</td>
            <td>100010860304057094100079001</td>
          </tr>
          <tr>
            <td>
              <p>Ro’yxatdan o’tkazilgan sana: 01.01.1931-yil</p>
              <p>
                Manzil: Farg’ona viloyati, Qo’qon shahar, Turon ko’chasi 23 uy.
              </p>
              <p>Tel: 73-542-38-38</p>
              <p>Fax: 73-542-02-57</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RekvizitlarCom;
