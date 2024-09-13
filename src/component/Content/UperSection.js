import React from "react";
import Vcard from "../VideoCard/Video_card.js";
import CodeBlock from "../Code_block/CodeBlock.js";
import Gradient from "../Gradient/Gradient.js";
import "./Content.css";

const UperSection = ({ heading, text1 }) => {
  return (
    <>
      <div className="d-flex flex-column  p-5 " id="main">
        <div className="d-flex flex-column m-3 px-5">
          <div className="h1 fs-1 fw-semibold padding" id="heading">
            {heading}
          </div>
          <div className="text font-weight-light padding" id="content">
            {text1}
          </div>
        </div>
      </div>
    </>
  );
};

export default UperSection;
