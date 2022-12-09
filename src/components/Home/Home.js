import React from "react";
import banner from "../../asset/banner Image.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img className="banner-img" src={banner} alt="" />

      <p className="banner-text1">Computer Engineering</p>
      <p className="banner-text2">142,765 Computer Engineers follow this</p>
    </div>
  );
};

export default Home;
