import React, { useState } from "react";

const Gallery = () => {
  const [id, setId] = useState(false);

  const handleClick = (id) => {
    setId(id);
  };

  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className="flex justify-start">
        <h2 className="text-5xl text-[#004269] font-bold border-r-4 border-[#004269] pr-10 mr-20">
          Institut <br /> galeriyasi
        </h2>
        <div className="italic text-xl">
          QDPI sizga cheksiz imkoniyatlar eshigini <br /> ochadi va
          hayotingizdagi eng yorqin lahzalarni <br /> taqdim etadi
        </div>
      </div>
      <div className="mt-10 grid grid-cols-3">
        <ul className="col-span-1">
          <li onClick={() => handleClick(1)}>Institut</li>
          <li onClick={() => handleClick(2)}>Tadbirlar</li>
          <li onClick={() => handleClick(3)}>Seminarlar</li>
        </ul>
        <div className="col-span-2">
          <div className={`${id === 1 ? "" : "hidden"} grid grid-cols-3`}>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p>
          </div>
          <div className={`${id === 2 ? "" : "hidden"} grid grid-cols-3`}>
            22222
          </div>
          <div className={`${id === 3 ? "" : "hidden"} grid grid-cols-3`}>
            33333
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
