import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import { faMoon } from "@fortawesome/free-regular-svg-icons"; // Import the regular fa-moon icon
import { faLanguage } from "@fortawesome/free-solid-svg-icons"; // Import the faLanguage icon
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo192.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <section
      className="container-fluid bg-white fixed-top"
      style={{ width: "100vw", margin: "0px", padding: "0px 0px" }}
    >
      <nav className=" navbar navbar-expand-lg navbar-light shadow-sm p-3 px-3 bg-white bg-white">
        <div className="d-flex justify-content-start">
          <NavLink to="/">
            <img src={logo} alt="logo" style={{ width: "23%" }} />
            <a className="navbar-brand text-secondary" href="#">
              v18.3.1
            </a>
          </NavLink>
        </div>

        <form className="form flex-grow-1">
          <div class="input-group mb-3">
            <div class="input-group-prepend ">
              <span
                class="input-group-text form-control bg-Body-secondary  border p-2 rounded-start-pill"
                id="basic-addon1"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  role="Search"
                  className="fs-5 "
                />
              </span>
            </div>
            <input
              type="text"
              class="form-control bg-Body-secondary border"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend ">
              <span
                class="input-group-text form-control bg-Body-secondary p-2 rounded-end-circle"
                id="basic-addon2"
              >
                <span className="bg-white">Ctrl K</span>
              </span>
            </div>
          </div>
        </form>

        <div
          className="d-flex justify-content-evenly align-item-right collapse navbar-collapse px-3"
          id="navbarSupportedContent"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav mr-auto px-3">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/learn">
                Learn
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/reference">
                Reference
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/community">
                Community
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link">
                <FontAwesomeIcon icon={faMoon} size="2x" />
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link">
                <FontAwesomeIcon icon={faLanguage} size="lg" />
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Nav;
