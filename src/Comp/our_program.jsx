import React from "react";
import Our_program_card from "../Comp/our_program_card";

function our_program() {
  const program = {
    programtitle: "ISC + NEET",
    programdiv1:
      "NEET is a national-level examination conducted by NTA. The candidates who want to get admission to medical courses must qualify for the entrance test. NEET questions only come from Physics, Chemistry, Zoology, and Botany.",
    programdiv2: "Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and NEET (and other Medical exams) within the comfort of their school premises. Our coursework is specially created for the ISC curriculum to create a synergy between Board and NEET exam preparations during school hours.",
  };

  const program2 = {
    programtitle: "ISC + IIT JEE",
    programdiv1:
      "IITs are one of the most prestigious colleges in the country. All Engineering aspirants wish to get into one of the IITs, but getting into such an institution is a challenging task. A lot of hard work andhard and dedication is required to ace JEE Main and JEE Advanced to get into IIT or some other top educational institution in the country.",
    programdiv2: "Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and IITJEE ( and other engineering exams) within the comfort of their school premises. Our coursework is specially created for the ISC curriculum to create a synergy between Board and NEET exam preparations during school hours",
  };
  return (
    <>
      <div className="our-program">
        <div className="our-program-div text-center mt-10">
          <span className="text-2xl font-bold">OUR</span>
          <br />
          <span className="font-bold text-4xl font-blue mt-3">PROGRAMS</span>
        </div>
        <div className="flex">
          <Our_program_card
            backgroundColor="#FFF9DA"
            programtitle={program.programtitle}
            programdiv1={program.programdiv1}
            programdiv2={program.programdiv2}
          />
          <Our_program_card
            backgroundColor="#6767C826"
            programtitle={program2.programtitle}
            programdiv1={program2.programdiv1}
            programdiv2={program2.programdiv2}
          />
        </div>


      </div>
    </>
  );
}

export default our_program;
