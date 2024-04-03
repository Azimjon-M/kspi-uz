import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
// import APIGallery from "../../services/gallery";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("institut");
  // const [data, setData] = useState(null);
  // const [dataTur, setDataTur] = useState(null);
  // console.log(dataTur);
  // console.log(data);

  // GET
  // const getTur = async () => {
  //   await APIGallery.getTur().then((res) => setDataTur(res.data));
  // };
  // const getData = async () => {
  //   await APIGallery.get().then((res) => setData(res.data));
  // };
  // useEffect(() => {
    // getTur();
    // getData();
  // });

  const pictures = [
    {
      label: "Tadbirlar",
      value: "tadbirlar",
      content: [
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
      ],
    },
    {
      label: "Institut",
      value: "institut",
      content: [
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
      ],
    },
    {
      label: "Seminarlar",
      value: "seminarlar",
      content: [
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-5 md:my-16">
      <div className="p-4 md:flex mb-5 md:justify-between">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#004269] md:text-start mb-5 md:mb-0 lg:mx-5 xl:mx-10 md:border-r-8 border-[#004269] lg:pr-44">
          Institut <br className="hidden md:block" />
          galleriyasi
        </h2>
        <div className="md:mx-5 italic lg:max-w-[700px] text-center md:text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
          laborum, quidem nostrum ex distinctio qui vero nobis aperiam
          accusantium, repellat quasi modi error magni? Obcaecati alias
          consequatur sit facere perferendis.
        </div>
      </div>
      <Tabs id="custom-animation" value={activeTab} className="-z-10 md:py-10">
        <TabsHeader className="bg-[#eaf3ffa2] mx-2">
          {pictures?.map(({ label, value }) => (
            <Tab
              className={`text-xl font-semibold text-[#004269] ${
                activeTab === value ? "bg-white rounded" : ""
              }`}
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          className="z-0"
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {pictures?.map(({ value, content }) => (
            <TabPanel
              key={value}
              value={value}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {content.slice(0, 8).map((imageUrl, index) => (
                <img
                  key={index}
                  className="block h-full w-full object-cover object-center p-2 rounded-2xl hover:scale-105 ease-linear duration-300"
                  src={imageUrl}
                  alt="gallery"
                />
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Gallery;
