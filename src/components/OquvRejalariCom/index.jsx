import React, { useState } from "react";
// import { PiStudentFill } from "react-icons/pi";

function OquvRejalariCom() {
  const [showContent, setShowContent] = useState(1);

  const handleClick = (idx) => {
    setShowContent(idx);
  };

  return (
    <div className="max-w-7xl xl:mx-auto py-20 mx-4">
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <button
              onClick={() => handleClick(1)}
              className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg w-full dark:bg-blue-600"
            >
              <svg
                className="w-4 h-4 me-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick(2)}
              className={`${ showContent === 2 ? "bg-orange-700" : ""} inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <svg
                className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              Dashboard
            </button>
          </li>
        </ul>
        <div>
          <div
            className={`${
              showContent === 1 ? "" : "hidden"
            } p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full`}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Profile Tab
            </h3>
            <p className="mb-2">
              This is some placeholder content the Profile tab's associated
              content, clicking another tab will toggle the visibility of this
              one for the next.
            </p>
            <p>
              The tab JavaScript swaps classes to control the content visibility
              and styling.
            </p>
          </div>
          <div
            className={`${
              showContent === 2 ? "" : "hidden"
            } p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full`}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Dashboard
            </h3>
            <p className="mb-2">
              This is some placeholder content the Profile tab's associated
              content, clicking another tab will toggle the visibility of this
              one for the next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OquvRejalariCom;
