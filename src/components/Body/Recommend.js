import React from "react";
import pin from "../../asset/pin.png";
import pen from "../../asset/pen.png";
import "./Recommend.css";
import excuse from "../../asset/excuse.png";

const Recommend = () => {
  return (
    <div>
      <div className="d-flex ">
        <div>
          <img src={pin} alt="" />
          <span>Noida, India</span>
        </div>
        <div>
          <img className="pen" src={pen} alt="" />
        </div>
      </div>
      <hr />
      <div
        style={{ "margin-top": "30px" }}
        className=" d-flex align-items-start"
      >
        <img className="excuse" src={excuse} alt="" />
        <span>
          Our location will help us serve betterand extend a personalised
          experience
        </span>
      </div>
    </div>
  );
};

export default Recommend;
