import React from "react";
import "./Bigbutton";
import { FaRegHeart } from "react-icons/fa";

const Bigbutton = ({ btnText }) => {
  return (
    <>
      <button
        type="button"
        class="btn btn-primarybtn btn-light btn-lg btn-block fw-bold border rounded-pill mb-5"
      >
        {btnText}
      </button>
    </>
  );
};

export default Bigbutton;
