import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  LayerGroup,
  Circle,
  FeatureGroup,
  useMap,
  Popup,
} from "react-leaflet";

const ContactUs = () => {
  const center = [51.505, -0.09];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { fillColor: "red" };
  const greenOptions = { color: "green", fillColor: "green" };
  const purpleOptions = { color: "purple" };

  return (
    <div className="p-5 lg:p-10 flex justify-center">
      <div className="w-[1000px]">
        <h2 className=" text-xl md:text-2xl lg:text-3xl tracking-tight font-extrabold text-center text-[#004269] dark:text-white">
          Biz bilan bog'lanish
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-900">
            <div className="py-2 lg:py-6 px-4 mx-auto max-w-screen-md">
              <h2 className="py-2 text-lg font-bold lg:mb-16 text-center text-[#004269] dark:text-gray-400 sm:text-xl">
                Aloqa va joylashuv
              </h2>
              <div>
                <div className="flex items-center mb-5 md:mb-10">
                  <FaMapLocationDot className="w-[40px] md:w-[60px] h-auto mr-4" />
                  <p className="text-[#004269]">
                    Qo'qon shaxri, Turon ko'chasi, 23-uy
                  </p>
                </div>
                <div className="flex items-center mb-5 md:mb-10">
                  <FaSquarePhone className="w-[40px] md:w-[60px] h-auto mr-4" />
                  <p className="text-[#004269]">
                    <Link href="tel:+998735423838">+998 73 542 38 38</Link>
                  </p>
                </div>
                <div className="flex items-center">
                  <MdMarkEmailUnread className="w-[40px] md:w-[60px] h-auto mr-4" />
                  <p className="text-[#004269]">
                    <Link href="mailto:kspi_info@edu.uz">kspi_info@edu.uz</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
              <Circle
                center={center}
                pathOptions={fillBlueOptions}
                radius={200}
              />
              <Circle
                center={center}
                pathOptions={fillRedOptions}
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  pathOptions={greenOptions}
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
            <FeatureGroup pathOptions={purpleOptions}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
            </FeatureGroup>
          </MapContainer>
          {/* <section className="bg-white dark:bg-gray-900">
                        <div className="py-2 lg:py-6 px-4 mx-auto max-w-screen-md">
                            <h2 className="py-2 text-lg font-bold lg:mb-16 text-center text-[#004269] dark:text-gray-400 sm:text-xl">Taklif va shikoyatlaringizni yuboring</h2>
                            <form action="#" className="space-y-8">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300">Email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-[#004269] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300">Mavzu</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-[#004269] bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Qanday mavzuda xabar qoldiryapsiz" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-400">Xabar</label>
                                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-[#004269] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Batafsil..."></textarea>
                                </div>
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-center btn xl:justify-between bg-[#004269] text-white rounded-bl-lg sm:w-fit hover:bg-[#004369ce] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Yuborish</button>
                            </form>
                        </div>
                    </section> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
