import React from "react";

const VirQabulCom = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-2 lg:py-6 px-4 mx-auto max-w-screen-md">
          <h2 className="py-2 text-lg font-bold lg:mb-16 text-center text-[#004269] dark:text-gray-400 sm:text-xl">
            Taklif va shikoyatlaringizni yuboring
          </h2>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="fish"
                className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300"
              >
                FISH
              </label>
              <input
                type="text"
                id="fish"
                className="shadow-sm bg-gray-50 border border-gray-300 text-[#004269] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Familiya Ism Sharif"
                required
              />
            </div>
            <div className="md:grid grid-cols-2 gap-4">
              <div className="mb-6 md:mb-0">
                <label
                  htmlFor="telefon"
                  className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300"
                >
                  Telefon
                </label>
                <input
                  type="text"
                  id="telefon"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-[#004269] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="+998 ** *** ** **"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-[#004269] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-300"
              >
                Mavzu
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-[#004269] bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Qanday mavzuda xabar qoldiryapsiz"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-[#004269] dark:text-gray-400"
              >
                Xabar
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-[#004269] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Batafsil..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 w-full text-sm font-medium text-center btn xl:justify-between bg-[#004269] text-white rounded-bl-lg sm:w-fit hover:bg-[#004369ce] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Yuborish
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VirQabulCom;
