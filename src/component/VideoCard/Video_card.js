import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the faLanguage icon
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FaRegHeart } from "react-icons/fa";
import "./Video.css";
const Vcard = ({ name, description }) => {
  return (
    <div>
      <section className="d-flex align-items-center text-start code-block bg-white p-1 rounded-4">
        <div className="rounded-2 mx-2" id="video">
          <div className="text-white opacity-50">
            <FontAwesomeIcon icon={faPlayCircle} size="2x" />
          </div>
        </div>
        <div className="card-body" id="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <button class="btn btn-black-subtle bg-white me-2 fs-3">
          <FaRegHeart />
        </button>
      </section>
    </div>
  );
};

export default Vcard;
