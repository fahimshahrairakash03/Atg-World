import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <div className="container menu-bar  d-flex justify-content-between align-items-center">
        <div className="menu d-flex">
          <p className="selected">All Posts(32)</p>
          <p className="un-select">Article</p>
          <p className="un-select">Event</p>
          <p className="un-select">Education</p>
          <p className="un-select">Job</p>
        </div>
        <div className="button">
          <button className="btn-1">Write a post</button>
          <button className="btn-2">Join Group</button>
        </div>
      </div>
      <hr className="underline" />
    </div>
  );
};

export default Menu;
