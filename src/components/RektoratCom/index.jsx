import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Breadcrumb from "../Breadcrumb";

const RektoratCom = () => {
  const data = [
    {
      label: "Rektor",
      value: "rektor",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
      lavozim: "Rektor",
      img: "",
    },
    {
      label: "O'quv ishlari bo'yicha prorektor",
      value: "oquv",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Ilmiy ishlar bo'yicha prorektor",
      value: "ilmiy",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      lavozim: "Prorektor",
      img: "",
    },
    {
      label: "Moliya va iqtisod bo'yicha prorektor",
      value: "moliya",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      lavozim: "Prorektor",
      img: "",
    },
    {
      label:
        "Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha prorektor",
      value: "yoshlar",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      lavozim: "Prorektor",
      img: "",
    },
    {
      label: "Xalqaro hamkorlik masalalari bo'yicha prorektor",
      value: "xalqaro",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      lavozim: "Prorektor",
      img: "",
    },
  ];
  return (
    <div className="px-5 py-3 md:px-10 mb-3 md:min-h-[calc(100vh-565px)] lg:min-h-[calc(100vh-400px)]">
      <div className="border-b-2 border-[#004269] block w-full">
        <Breadcrumb
          steps={[
            { text: "Bosh sahifa", link: "/" },
            { text: "Institut kengashi" },
          ]}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="my-1 md:my-5">
          <h2 className="text-xl md:text-3xl font-bold my-2 text-[#004269] text-center">
            Rektorat
          </h2>
        </div>
        <Tabs
          className="flex flex-col md:flex-row"
          value="html"
          orientation="vertical"
        >
          <TabsHeader className="w-96 border-2 border-[#004269] p-5 mb-5">
            {data.map(({ label, value }) => (
              <Tab
                className="flex flex-col items-start text-start font-semibold"
                key={value}
                value={value}
              >
                <div className="flex items-center">
                  <div className="w-1 h-1 rounded-full bg-[#004269] mr-3"></div>
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc, lavozim }) => (
              <TabPanel key={value} value={value} className="py-0">
                <div className="relative flex flex-col lg:flex-row mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                  <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-md bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"></div>
                  <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {lavozim}
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      {desc}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                    >
                      Batafsil ...
                    </button>
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default RektoratCom;
