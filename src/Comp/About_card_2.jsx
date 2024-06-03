import React from "react";
import Button from "./Button";

function About_card_2() {
  return (
    <>
      <div>
        <div className="about-Card-2 mx-auto">
          <img
            src="/img/About-img-2.png"
            alt="Batch Starts Icon"
            className="about-img right-center"
          />
          <div className="about-card-info-2">
            <div>
              <span className="uppercase-text font-normal text-2xl">about</span>
              <br />
              <span className="text-4xl font-bold about-info-blue mt-4">
                IIT PACE
              </span>
            </div>
            <p className="text-base font-normal mt-5">
              Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT &
              Medical has embarked on a remarkable journey, transforming the
              lives of students and shaping the landscape of competitive exam
              coaching. It all began in 1999, with a humble vision to bridge the
              gap between aspirations and achievements. PACE IIT & Medical has
              become synonymous with success in competitive exams and helped xxx
              students to crack IIT and xxx students to crack NEET/ Medical
              exams.
            </p>
            <div className="mt-6">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_card_2;
