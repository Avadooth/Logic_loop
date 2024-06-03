import React from "react";
import Arrow from "../SVG/Arrow.svg";
import LA_card from "./LA_card";
import Button_yellow from "./Button_yellow";
function LearningApproch() {
  const features = [
    {
      imgSrc: "/img/LA-logo-1.png",
      title: "Classes are conducted during school hours on school premises",
    },
    {
      imgSrc: "/img/LA-logo-1.png",
      title: "ISC curriculum is covered fully with competitive exams",
    },
    {
      imgSrc: "/img/LA-logo-1.png",
      title: "Saves precious time for self-study",
    },
    {
      imgSrc: "/img/LA-logo-1.png",
      title: "Experienced faculty powered by PACE IIT & MEDICAL",
    },
    {
      imgSrc: "/img/LA-logo-1.png",
      title: "Smaller batch size for personalized attention",
    },
  ];

  return (
    <div className="learning-approach mx-auto">
      <img src={Arrow} alt="Arrow" className="Arrow " />
      <div className="mt-4">
        <span className="font-24 font-bold">OUR</span>
        <br />
        <span className="font-bold text-4xl learning-approach-yellow ">
          LEARNING APPROACH
        </span>
      </div>

      <div className="flex flex-wrap justify-evenly la-approch">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-end items-center">
            <LA_card img={feature.imgSrc} title={feature.title} />
          </div>
        ))}
      </div>
      <Button_yellow title="Enquire Now "/>
    </div>
  );
}

export default LearningApproch;
