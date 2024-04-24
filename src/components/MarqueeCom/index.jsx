import React from "react";
import Marquee from "react-fast-marquee";
import TextTranslate from "../TextTranslate/index";

const MarqueeCom = () => {
  return (
    <div>
      <Marquee
        velocity={25}
        className="mx-auto text-red-600 font-semibold italic w-full bg-slate-300"
      >
        <div className="text-lg text-center">
          <TextTranslate id="saytTestRejimida" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCom;
