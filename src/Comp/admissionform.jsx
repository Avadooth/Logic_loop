import React, { useState } from "react";
// import "../Styles/Form-admission.css"

function AdmissionForm() {
  const [ChildFirstName, setChildFirstName] = useState("");
  const [ChildLastName, setChildLastName] = useState("");
  const [ParentFirstName, setParentFirstName] = useState("");
  const [ParentLastName, setParentLastName] = useState("");
  const [Course, setCourse] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");

  const handleMobileNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    const limitedInput = input.slice(0, 10);
    setMobileNumber(limitedInput);
  };


  const handleEmailAddressChange = (event) => {
    const { value } = event.target;
    setEmailAddress(value);
    
  };

  return (
    <>
      <div className="admission-form-main">
        <div className="Enquire-form">
          <div className="Enquire-Now-form text-xl font-bold text-center">
            Enquire Now!
          </div>
        </div>
        <div className="admission-div mx-auto mt-5">
          <div className=" academic-year-form">
            <h2 className="academic-year text-sm font-normal">Academic Year</h2>
            <span className="academic-year-value text-sm font-normal ">
              2024-2026
            </span>
          </div>

          <label className="relationship-label">
            <div>
              <span className="text-sm font-normal">Your Relationship</span>
              <br /> <span className="text-sm font-normal">with the Child</span>
            </div>
            <span className="radio-father text-center text-sm font-normal">
              Father
            </span>
            <span className="radio-mother text-center text-sm font-normal">
              Mother
            </span>
          </label>
          <div className="child-name">
            <div className="text-fields">
              <label className="child-first-name-label text-sm font-normal">
                Child's First Name:
              </label>
              <input
                type="text"
                value={ChildFirstName}
                onChange={(event) => setChildFirstName(event.target.value)}
                className="text-box"
                placeholder="Type Here"
              />
            </div>
            <div className="text-fields">
              <label className="child-first-name-label text-sm font-normal">
                Child’s Last Name:
              </label>
              <input
                type="text"
                value={ChildLastName}
                onChange={(event) => setChildLastName(event.target.value)}
                className="text-box"
                placeholder="Type Here"
              />
            </div>
          </div>

          <div className="child-name">
            <div className="text-fields">
              <label className="child-first-name-label text-sm font-normal">
                Your First Name:
              </label>
              <input
                type="text"
                value={ParentFirstName}
                onChange={(event) => setParentFirstName(event.target.value)}
                className="text-box"
                placeholder="Type Here"
              />
            </div>
            <div className="text-fields">
              <label className="child-first-name-label text-sm font-normal">
                Your Last Name:
              </label>
              <input
                type="text"
                value={ParentLastName}
                onChange={(event) => setParentLastName(event.target.value)}
                className="text-box"
                placeholder="Type Here"
              />
            </div>
          </div>

          <div className="text-fields">
            <label className="course-label text-sm font-normal">
              Course Applying For:
            </label>
            <select
              value={Course}
              onChange={(event) => setCourse(event.target.value)}
              className="select-box"
            >
              <option value="">Choose Course</option>
              <option value="XI ISC + Engineering">XI ISC + Engineering</option>
              <option value="XI ISC + Medical">XI ISC + Medical</option>
            </select>
          </div>

          <div className="text-fields">
            <label className="child-first-name-label text-sm font-normal">
              Mobile Number:
            </label>
            <input
              type="number"
              value={MobileNumber}
              onChange={handleMobileNumberChange}
              className="text-box-mobile"
              placeholder="Enter your Mobile Number"
              maxLength={10}
            />
          </div>

          <div className="text-fields">
            <label className="child-first-name-label text-sm font-normal">
              Email Address:
            </label>
            <input
              type="text"
              value={EmailAddress}
              onChange={handleEmailAddressChange}
              className="text-box-mobile"
              placeholder="yourname@example.com"
            />
          </div>

          <div className="flex justify-center mt-5">
            <button className="Enquire-Now-form-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
              Enquire Now
            </button>
          </div>

          {/* <label className="mobile-number-label">
            Mobile Number:
            <input
              type="tel"
              value={MobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
            />
          </label> */}

          {/* <label className="email-address-label">
            Email Address:
            <input
              type="email"
              value={EmailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
            />
          </label> */}
        </div>
      </div>
    </>
  );
}

export default AdmissionForm;
