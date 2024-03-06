import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [id, setId] = useState(0);
  const [isContent, setIsContent] = useState([]);

  const data = [
    { id: 0, name: "Institut", content: [111111, 111111, 11111, 11111] },
    { id: 1, name: "Tadbirlar", content: [222222, 222222, 22222, 22222] },
    { id: 2, name: "Seminarlar", content: [333333, 333333, 33333, 33333] },
  ];

  const handleClick = (clickedId) => {
    setId(id === clickedId ? 0 : clickedId);
    const selectedItem = data.find((item) => item.id === clickedId);
    setIsContent(selectedItem && selectedItem.content);
  };

  useEffect(() => {
    const a = document.getElementById("0");
    a.click();
  }, []);

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
          {data.map((item) => (
            <li
              id={item.id}
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="col-span-2">
          <div className={`${id === null ? "hidden" : ""} grid grid-cols-3`}>
            {isContent.map((contentItem, index) => (
              <p key={index}>{contentItem}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
