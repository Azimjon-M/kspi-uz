import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Interactive from "../../components/Interactive";
import NewsHome from "../../components/NewsHomeCom";
import StudentOpinion from "../../components/StudentOpinion";


function Main() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Interactive />
      <NewsHome />
      <StudentOpinion />
    </div>
  );
}

export default Main;
