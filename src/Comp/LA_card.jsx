import React from "react";

function LA_card(props) {
  return (
    <>
      <div className="la-card">
        <img
          src={props.img}
          alt="/img/LA-logo-1.png"
          className="LA-logo-h mx-auto mb-2"
          />
        <div className="title font-bold text-xl ">{props.title}</div>
      </div>
      <span className="doted-Divider"></span>
          </>
 
  );
}

export default LA_card;
