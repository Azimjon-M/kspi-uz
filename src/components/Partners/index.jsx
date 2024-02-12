import React from "react";
import hamkor3 from "../../assets/images/hamkor3.png";

function Partners() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
        <div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
          <img src={hamkor3} alt="" />
        </div>
        <div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
          <img
            src="https://kspi.uz/wp-content/uploads/2022/09/hamkor4.png"
            alt=""
          />
        </div>
        <div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
          <img
            className="object-cover"
            src="https://kspi.uz/wp-content/uploads/2022/09/hamkor1.png"
            alt=""
          />
        </div>
        <div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
          <img
            src="https://kspi.uz/wp-content/uploads/2022/09/hamkor2.jpg"
            alt=""
          />
        </div>
        <div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
          <img
            src="https://kspi.uz/wp-content/uploads/2022/09/hamkor2.jpg"
            alt=""
          />
        </div>
        <div className="h-40 w-40 flex justify-center items-center p-3 rounded-full shadow-md">
          <img
            src="https://kspi.uz/wp-content/uploads/2022/09/hamkor2.jpg"
            alt=""
          />
        </div>
        <div className="h-40 w-40 flex justify-center items-center p-5 rounded-full shadow-md">
          <img
            src="https://kspi.uz/wp-content/uploads/2022/09/hamkor2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
