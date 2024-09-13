import React from "react";
import Gradient from "../Gradient/Gradient";
import CodeBlock from "../Code_block/CodeBlock";
import Vcard from "../VideoCard/Video_card";
import "./Content.css";

const MiddleSection = ({ vcardData, vHeading, code_block }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-4 my-3">
        <Gradient />
        <div>
          <CodeBlock text={code_block.codeText} heading={code_block.heading} />
        </div>
        <div
          className="d-flex flex-column card border border-color bg-body-light rounded-4"
          id="video_card"
        >
          <h5 className="align-self-start fs-7 px-3 p-2">{vHeading}</h5>
          {vcardData.map((item, index) => (
            <Vcard
              key={index}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
