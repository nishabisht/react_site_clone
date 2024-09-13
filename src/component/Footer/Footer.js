import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Import brand icons
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row text-start">
          <ul class="list-group col-sm">
            <li class="list-group-item no-border fw-semibold fs-6">
              Meta Open Source
            </li>
            <li class="list-group-item no-border">@2024</li>
            <li class="list-group-item no-border">uwu?</li>
          </ul>
          <ul class="list-group border-white col-sm">
            <li class="list-group-item no-border fw-semibold fs-6">
              Learn React
            </li>
            <li class="list-group-item no-border">Quick Start</li>
            <li class="list-group-item no-border">Installation</li>
            <li class="list-group-item no-border">Describing the UI</li>
            <li class="list-group-item no-border">Adding Interactivity</li>
            <li class="list-group-item no-border">Managing State</li>
            <li class="list-group-item no-border">Escape Hatches</li>
          </ul>
          <ul class="list-group border-white col-sm">
            <li class="list-group-item no-border fw-semibold fs-6">
              API Reference
            </li>
            <li class="list-group-item no-border">React APIs</li>
            <li class="list-group-item no-border">React DOM APIs</li>
          </ul>
          <ul class="list-group border-white col-sm">
            <li class="list-group-item no-border fw-semibold fs-6">
              Community
            </li>
            <li class="list-group-item no-border">Code of Conduct</li>
            <li class="list-group-item no-border">Meet the Team</li>
            <li class="list-group-item no-border">Docs Contributors</li>
            <li class="list-group-item no-border">Acknowledgements</li>
          </ul>
          <ul class="list-group border-white col-sm">
            <li class="list-group-item no-border fw-semibold fs-6">More</li>
            <li class="list-group-item no-border">Blog</li>
            <li class="list-group-item no-border">React Native</li>
            <li class="list-group-item no-border">Privacy</li>
            <li class="list-group-item no-border">Terms</li>
            <li class="list-group-item no-border">
              <FontAwesomeIcon icon={faGithub} size="6px" className=" p-2" />
              <FontAwesomeIcon
                icon={faAddressBook}
                size="6px"
                className="p-2"
              />
              <FontAwesomeIcon icon={faGithub} size="6px" className=" p-2" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
