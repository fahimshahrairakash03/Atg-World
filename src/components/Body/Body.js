import React from "react";
import ArticleCard from "./ArticleCard";
import Recommend from "./Recommend";

const Body = () => {
  return (
    <div className="lg:container ">
      <div className="d-flex">
        <ArticleCard></ArticleCard>
        <div className="recommend">
          <Recommend></Recommend>
        </div>
      </div>
    </div>
  );
};

export default Body;
