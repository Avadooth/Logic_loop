import React from "react";
import Button from "./Button";

function About_card() {
  return (
    <>
      <div>
        <div className="about-Card mx-auto" >
          <img
            src="/img/About-img-1.png"
            alt="Batch Starts Icon"
            className="about-img left-center"
          />
          <div className="about-card-info">
            <div>
              <span className="uppercase-text font-normal text-2xl">about</span><br/>
              <span className="text-4xl font-bold about-info-blue mt-4">Universal High School</span>
            </div>
            <p className="text-base font-normal mt-5">
              Universal High School, Dahisar equips every student with the right
              attitude and skills to help them find their unique place in the
              world by providing a wholesome and ever-evolving learning
              environment. So that they can fearlessly pursue a better tomorrow.
              In line with this mission, Universal is launching the best IIT
              JEE/ NEET test prep program powered by PACE IIT & MEDICAL. PACE
              IIT & Medical is India’s best IIT JEE/ NEET test prep program and
              has helped more than xxx+ students prepare for IIT JEE and xxx
              students in NEET for the last few years.
            </p>
            <div className="mt-6">
              <Button/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_card;
