import React from "react";
import logo from "../../asset/logo.png";
import Modal from "../Modal/Modal";
import "./Header.css";
import mininav from "../../asset/mini-nav.png";

const Header = () => {
  return (
    <div>
      <div className="mini-nav">
        <img src={mininav} alt="" />
      </div>
      <nav class="header navbar ">
        <div class="container d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="Bootstrap" />
          </a>
          <form class="d-flex " role="search">
            <input
              class="form-control me-2 search-opt"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <ul>
            <p
              className="modal-text"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Create account.<span className="modal-span">It's free!</span>
            </p>
            <Modal></Modal>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
