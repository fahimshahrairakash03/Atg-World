import React from "react";
import "./ArticleCard.css";
import card1 from "../../asset/card1.png";
import card2 from "../../asset/card2.png";
import card3 from "../../asset/card3.png";
import article from "../../asset/✍️ Article.png";
import img1 from "../../asset/sharthak.png";
import img2 from "../../asset/sarah.png";
import img3 from "../../asset/ronal (2).png";
import img4 from "../../asset/joseph.png";
import view from "../../asset/view.png";
import share from "../../asset/share.png";
import time from "../../asset/Group 53.png";
import btn from "../../asset/btn.png";
import dot from "../../asset/3 dot.png";
import cardMenu from "../../asset/card3Menu.png";
import job from "../../asset/job.png";
import card4details from "../../asset/card4details.png";
import card4btn from "../../asset/card4btn.png";
import circle from "../../asset/circle.png";

const ArticleCard = () => {
  return (
    <div className="card-collection">
      <div>
        <div class="card mb-3">
          <img src={card1} class="card-img-top" alt="..." />
          <div class="card-body">
            <img className="mb-3" src={article} alt="" />
            <h5 className="mb-3 card-heading" class="card-title">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </h5>
            <p className="card-details" class="card-text">
              I've worked in UX for the better part of a decade. From now on I
              plan to ...
            </p>
            <div className="user-details d-flex justify-content-between card-user-profile  align-items-center">
              <div className="d-flex align-items-center ">
                <img className="card-img" src={img1} alt="" />
                <p className="card-user">Sharthak Karma </p>
              </div>
              <div>
                <img className="me-5" src={view} alt="" />
                <img src={share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card mb-3">
          <img src={card2} class="card-img-top" alt="..." />
          <div class="card-body">
            <img className="mb-3" src={article} alt="" />
            <h5 className="mb-3 card-heading" class="card-title">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </h5>
            <p className="card-details" class="card-text">
              I've worked in UX for the better part of a decade. From now on I
              plan to ...
            </p>
            <div className="user-details d-flex justify-content-between card-user-profile card-user-profile  align-items-center">
              <div className="d-flex align-items-center ">
                <img className="card-img" src={img2} alt="" />
                <p className="card-user">Sarah West</p>
              </div>
              <div>
                <img className="me-5" src={view} alt="" />
                <img src={share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card mb-3">
          <img src={card3} class="card-img-top" alt="..." />
          <div class="card-body">
            <img className="mb-3" src={article} alt="" />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-3 card-heading" class="card-title">
                Finance & Investment Elite Social Mixer @Lujiazui
              </h5>
              <img src={dot} alt="" />
            </div>
            <img className="cardmenu" src={cardMenu} alt="" />

            <img className="card3-time" src={time} alt="" />
            <br />
            <img className="btn-img" src={btn} alt="" />

            <div className="user-details d-flex justify-content-between card-user-profile  align-items-center">
              <div className="d-flex align-items-center">
                <img className="card-img" src={img3} alt="" />
                <p className="card-user">Ronal Jones</p>
              </div>
              <div>
                <img className="me-5" src={view} alt="" />
                <img src={share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card mb-3">
          <div class="card-body">
            <img src={job} alt="" />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="my-3 card-heading" class="card-title">
                Software Developer{" "}
              </h5>
              <img src={dot} alt="" />
            </div>
            <div>
              <img className="company" src={card4details} alt="" />
            </div>
            <img className="btn-img2 mt-3" src={card4btn} alt="" />

            <div className="user-details d-flex justify-content-between card-user-profile  align-items-center">
              <div className="d-flex align-items-center ">
                <img className="card-img" src={img4} alt="" />
                <p className="card-user">Joseph Gray</p>
              </div>
              <div>
                <img className="me-5" src={view} alt="" />
                <img src={share} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
