import React from "react";
import Arrow from "../SVG/Arrow.svg";

function Button() {
  return (
    <div className="flex">
      <button className="Enquire-Now text-white bg-blue-700    font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
        Enquire Now <img src={Arrow} alt="Arrow" className="arrow-ml" />
      </button>
    </div>
  );
}

export default Button;
