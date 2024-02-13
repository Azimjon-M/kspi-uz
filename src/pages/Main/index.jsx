import React from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Interactive from "../../components/Interactive";
import NewsHome from "../../components/NewsHomeCom";
import StudentOpinion from "../../components/StudentOpinion";
import Curriculum from "../../components/Curriculum";
import ContactUs from "../../components/Contact";
import Footer from "../../components/Footer";
import Partners from "../../components/Partners";
import WarmThoughts from "../../components/WarmThoughts";

function Main() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Interactive />
      <NewsHome />
      <StudentOpinion />
      <WarmThoughts/>
      <Curriculum />
      <Partners />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Main;
