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
import Chat from "../../components/Chat";

function Main() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Interactive />
      <NewsHome />
      <StudentOpinion />
      <Curriculum />
      <Partners />
      <ContactUs />
      <Footer />
      <Chat />
    </div>
  );
}

export default Main;
