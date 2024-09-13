import React from "react";
import "./Video.css";

const VideoCardSection = ({ vcardData, vHeading, code_block }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-4 my-3">
        <Gradient />
        <div className="">
          <CodeBlock text={code_block.codeText} heading={code_block.heading} />
        </div>
        <div
          className="d-flex flex-column card border shadow bg-body-light rounded-4"
          id="video_card"
        >
          <h5 className="align-self-start px-3 p-2">{vHeading}</h5>
          {vcardData.map((iteam, index) => (
            <Vcard
              key={index}
              name={iteam.name}
              description={iteam.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCardSection;
