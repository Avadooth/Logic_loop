import React from "react";
import "../Styles/ImageSlider.css"; // Make sure to import your CSS file
import Campusimage from "./Campusimage";
import Button_yellow from "./Button_yellow";

const OurCampus = () => {
  return (
    <>
      <div className="our-campus">
        <div className="our-campus-info mx-auto">
          <div>
            <span className="font-normal text-2xl text-white">OUR</span>
            <br />
            <span className="text-4xl font-bold footer-yellow uppercase">
              campuses
            </span>
          </div>
          <Button_yellow title="Enquire Now" />
        </div>
      <Campusimage className="our-campus-slider" />
      </div>

    </>
  );
};

export default OurCampus;
