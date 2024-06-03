import React from "react";
import Footer_maps from "../Comp/Footer_maps";
import Button from "./Button";
import Button_yellow from "./Button_yellow";

function Footer() {
  return (
    <>
      <footer className="footer-div">
        <div>
          <div className="footer-info mx auto">
            <div className="footer-info-d mx-auto flex justify-between">
              <div className="footer-info-d-1">
                <div>
                  <span className="text-2xl font-normal uppercase text-white">
                    dahisar
                  </span>
                  <br />
                  <span className="text-4xl font-bold uppercase footer-yellow">
                    universal high school
                  </span>
                </div>

                <div className="footer-address flex mt-4 items-center">
                  <img
                    src="/img/footer-add.png"
                    alt="Scholarship Test Icon"
                    className="logo-size"
                  />
                  <div className="flex-col ml-3  ">
                    <p className="font-bold text-lg text-white">ADDRESS</p>
                    <p className="text-base font-normal text-white">
                      Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai - 400
                      068
                    </p>
                  </div>
                </div>
                <div className="footer-admission flex mt-7 items-center">
                  <img
                    src="/img/footer-phone.png"
                    alt="Scholarship Test Icon"
                    className="logo-size"
                  />
                  <div className="flex-col ml-3 text-lg font-bold">
                    <p className="font-bold text-lg text-white uppercase">
                      Admissions Enquiry
                    </p>
                    <div className="flex items-center">
                      <span className="text-base font-normal text-white mr-4">
                        +91 224 194 7733
                      </span>
                      <span className="footer-admission-divider"></span>
                      <span className="text-base font-normal text-white ml-4">
                        admissions.dahisar@universal.edu.in
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button_yellow title="Get In Touch"/>
                </div>
              </div>
              <div className="map-container">
                <Footer_maps />
              </div>
            </div>
          </div>
          <div className="footer-copyright text-white text-center h-screen flex justify-center items-center">
            <div className="flex justify-center items-center ">
              Copyright © 2024 Universal Academy. All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
