import React from "react";
import "./Content.css";

const LowerSection = ({ text2 }) => {
  return (
    <>
      <div className="d-flex flex-column m-3">
        <div className="text text-black font-weight-light px-5 " id="content">
          {text2}
        </div>
      </div>
    </>
  );
};

export default LowerSection;
