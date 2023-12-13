import React from "react";
import { Link } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";

function Interactive() {
  return (
    <div>
      <div className="max-w-6xl mx-auto border">
        <ul className="flex">
          <li className=" flex justify-center w-2/12">
            <Link className="my-9 block w-full border-r border-gray-800 text-center">
              <RiComputerLine className="text-[50px] text-[#a3a1a2] hover:scale-125 hover:text-[#004269]" />
              <h2 className="uppercase mt-2 text-[#004269] font-bold">
                Virtual qabulxona
              </h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Interactive;
