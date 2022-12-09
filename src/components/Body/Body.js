import React from "react";
import ArticleCard from "./ArticleCard";
import Recommend from "./Recommend";

const Body = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <ArticleCard></ArticleCard>
        <Recommend></Recommend>
      </div>
    </div>
  );
};

export default Body;
