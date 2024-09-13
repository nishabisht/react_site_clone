import React from "react";
import CodeBlock from "../Code_block/CodeBlock";

const PlatformSection = ({ code_block, code_block1 }) => {
  return (
    <div className="d-flex flex-wrap text-wrap justify-content-center align-items-center gap-4 my-3">
      <div>
        <CodeBlock text={code_block.codeText} heading={code_block.heading} />
        <div> </div>
      </div>
      <div>
        <CodeBlock text={code_block1.codeText} heading={code_block1.heading} />
      </div>
    </div>
  );
};

export default PlatformSection;
