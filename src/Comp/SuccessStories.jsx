import React from "react";
import ImageSlider from "../Comp/imageslider";
import Button from "./Button";

function SuccessStories() {
  const images = [
    "/img/SuccessStories/successstories1.png",
    "/img/SuccessStories/successstories2.png",
    "/img/SuccessStories/successstories3.png",
    "/img/SuccessStories/successstories4.png",
    "/img/SuccessStories/successstories5.png",
    "/img/SuccessStories/successstories6.png",
    "/img/SuccessStories/successstories7.png",
    "/img/SuccessStories/successstories8.png",
    "/img/SuccessStories/successstories9.png",
    // Add more images as needed
  ];
  return (
    <>
      <div className="success-stories-info flex items-center mx-auto justify-between">
        <div>
          <span className="font-normal text-2xl">SUCCESS</span>
          <br />
          <span className="text-4xl font-bold">STORIES</span>
        </div>

        <Button />
      </div>
      <ImageSlider images={images} />
    </>
  );
}

export default SuccessStories;
