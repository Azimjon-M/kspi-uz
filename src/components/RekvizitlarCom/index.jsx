import React from "react";
import Breadcrumb from "../Breadcrumb";

const RekvizitlarCom = () => {
  return (
    <div className="px-5 py-3 md:px-10 mt-10">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[{ text: "Bosh sahifa", link: "/" }, { text: "Rekvizitlar" }]}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between my-1 md:my-3">
          <h2 className="text-xl md:text-3xl font-bold my-2">Rekvizitlar</h2>
        </div>
        <table border="1" className="table mx-auto" cols="true">
          <thead>
            <tr className="bg-[#ddd] text-center text-xl">
              <th colSpan="2">Qo’qon davlat pedagogika instuti</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="md:text-lg font-semibold">INN:</td>
              <td className="md:text-lg font-semibold">200131171</td>
            </tr>
            <tr>
              <td className="md:text-lg font-semibold">OKONX:</td>
              <td className="md:text-lg font-semibold">92110</td>
            </tr>
            <tr>
              <td className="md:text-lg font-semibold">Shxr:</td>
              <td className="md:text-lg font-semibold">
                100010860304057094100079001
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <p className="md:text-lg font-semibold">
                  Ro’yxatdan o’tkazilgan sana: 01.01.1931-yil
                </p>
                <p className="md:text-lg font-semibold">
                  Manzil: Farg’ona viloyati, Qo’qon shahar, Turon ko’chasi 23
                  uy.
                </p>
                <p className="md:text-lg font-semibold">Tel: 73-542-38-38</p>
                <p className="md:text-lg font-semibold">Fax: 73-542-02-57</p>
              </td>
            </tr>
            <tr className="bg-[#ddd] text-center text-xl">
              <th colSpan="2">Bank rekvizitlari</th>
            </tr>
            <tr>
              <td colSpan="2">
                <p className="md:text-lg font-semibold">
                  O’zR Moliya vazirligi G’aznachiligi
                </p>
                <p className="md:text-lg font-semibold">
                  h/r 23402000300100001010
                </p>
                <p className="md:text-lg font-semibold">INN: 201122919</p>
                <p className="md:text-lg font-semibold">
                  Markaziy bank HKKM Toshkent shaxar boshqarmasi
                </p>
                <p className="md:text-lg font-semibold">MFO 00014</p>
                <p className="md:text-lg font-semibold">
                  Qo’qon davlat pedagogika instituti
                </p>
                <p className="md:text-lg font-semibold">
                  INN: 200131171 IFUT: 85420
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RekvizitlarCom;
