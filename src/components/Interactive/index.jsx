import React from "react";
import { Link } from "react-router-dom";
import { GiComputerFan } from "react-icons/gi";

function Interactive() {
  return (
    <div>
      <div className="max-w-6xl mx-auto border">
        <ul className="flex">
          <li className="border border-gray-800">
            <Link className="inline-block my-9 text-center">
              {/* <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="60"
                width=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"></path>
                </g>
              </svg> */}
              <GiComputerFan className="text-[80px] text-[green] hover:scale-125 hover:text-[black]" />
              <h2 className="uppercase text-[#004269] font-bold">
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
