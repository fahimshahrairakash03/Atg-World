import React from "react";
import banner from "../../asset/banner Image.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <img className="banner-img" src={banner} alt="" />
    </div>
  );
};

export default Home;
