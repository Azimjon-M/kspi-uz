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
import ChatIcon from "../../components/Chat";
import Gallery from "../../components/Gallery";
import Statistics from "../../components/Statistics";
import AboutUs from "../../components/AboutUs";

function Main() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Interactive />
      <AboutUs/>
      <Statistics/>
      <NewsHome />
      <StudentOpinion />
      <WarmThoughts />
      <Curriculum />
      <Gallery />
      <Partners />
      <ContactUs />
      <Footer />
      <ChatIcon />
    </div>
  );
}

export default Main;
