import React from "react";
// import Button from "./Button";
import Arrow from "../SVG/Arrow.svg";

function our_program_card(props) {
  return (
    <>
      <div className="our_program_card mt-9 mx-auto"  style={{ backgroundColor: props.backgroundColor }}>
        <div className="isc-div flex items-center justify-center text-2xl font-bold  text-white">
          {props.programtitle}
        </div>
        <div className="program-card-info ml-9">
          <div className="text-center mt-10">
            {props.programdiv1}
          </div>

          <div className="text-center mt-5">
          {props.programdiv2}
          </div>
        </div>
        <div className="flex program-button">
          <button className="Enquire-Now text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            Enquire Now <img src={Arrow} alt="Arrow" className="arrow-ml" />{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default our_program_card;
