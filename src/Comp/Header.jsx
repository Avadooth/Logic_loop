import React from "react";
import "../Style.css";
import UHD_logo from "../SVG/UHD-logo.svg";
import Addmission from "./Addmission";
import Admissionform from "./admissionform";
import LearningApproch from "./LearningApproch";
const Header = () => {
  return (
    <div className="backgound-img">
      <div className="opacity">
        <div className="header-info">
          <div className="header">
            <div className="header-content">
              <div className="logo-section">
                <img
                  src={UHD_logo}
                  alt="Universal High School"
                  className="logo"
                />
                <div className="logo-divider"></div>
                <img src="/img/pace_logo.png" alt="PACE" className="logo" />
              </div>
              <button className="get-info">Get Info</button>
            </div>
          </div>
        </div>
        <img
          src="/img/Sticky-Enquire.png"
          alt="Universal High School-1"
          className="Sticky-Enquire-img"
        />

        <div className="flex justify-around">
          <Addmission />
          <img
            src="/img/image-header.png"
            alt="Universal High School"
            className="image-header"
          />
          <Admissionform />
        </div>
        <LearningApproch />
      </div>
    </div>
  );
};

export default Header;
