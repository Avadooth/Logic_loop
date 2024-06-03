import React from "react";
import Header from "../Comp/Header";
import LearningApproch from "../Comp/LearningApproch";
import About_info from "../Comp/About_info";
import Our_program from "../Comp/our_program";
import SuccessStories from "../Comp/SuccessStories";
import Campusimage from "../Comp/Campusimage";
import OurCampus from "../Comp/OurCampus";
import Footer from "../Comp/Footer";

function landingpage() {
  return (
    <>
      <Header />
      <About_info />
      <Our_program />
      <SuccessStories />
      {/* <Campusimage /> */}
      <OurCampus />
      <Footer />
    </>
  );
}

export default landingpage;
