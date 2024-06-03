import React from "react";
import Button from "./Button";

function Addmission() {
  return (
    <>
      <div className="Content">
        <div className=" ">
          <span className="kickstart uppercase-text">Kickstart Your</span>
          <br />
          <span className="Test-prep">IIT JEE/NEET Test Prep,</span>
        </div>

        <div className=" poweredBy flex items-center content-center mb-7">
          <span className="text-lg font-bold font-color-blue">Powered by</span>
          <img src="/img/pace_logo.png" alt="PACE" />
        </div>

        <div className=" flex items-center gap-4">
          <div className=" flex items-center gap-4">
            <span className="text-lg font-bold font-24 mr-6">
              ADMISSIONS OPEN
            </span>
            <Button />
          </div>
        </div>
        <div className="batch-gap">
          <div className="details">
            <div className="batch flex items-center">
              <img
                src="/img/logo-1.png"
                alt="Batch Starts Icon"
                className="logo-size"
              />
              <div className="flex-col ml-3 text-lg font-bold">
                <p>BATCH STARTS FROM</p>
                <p>3rd APRIL '24</p>
              </div>
            </div>
            <div className="scholarship flex mt-4 items-center">
              <img
                src="/img/logo-2.png"
                alt="Scholarship Test Icon"
                className="logo-size"
              />
              <div className="flex-col ml-3 text-lg font-bold">
                <p>SCHOLARSHIP TEST</p>
                <p>23rd MARCH '24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addmission;
