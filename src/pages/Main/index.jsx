import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Interactive from "../../components/Interactive";
import NewsHome from "../../components/NewsHomeCom";
import StudentOpinion from "../../components/StudentOpinion";
import Curriculum from "../../components/Curriculum";

function Main() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Interactive />
      <NewsHome />
      <StudentOpinion />
      <Curriculum />
    </div>
  );
}

export default Main;
