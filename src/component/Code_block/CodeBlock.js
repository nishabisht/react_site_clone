import React from "react";
import "./Code.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ heading, text }) => {
  return (
    <div className="d-flex flex-md-col justify-content-start card text-start shadow rounded-4">
      <section className="  ">
        <div className="h7 text-secondary border-bottom p-2 px-2">
          {heading}
        </div>
        <div className="">
          <SyntaxHighlighter
            language="javascript"
            style={docco}
            className="bg-white"
          >
            {text}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
};

export default CodeBlock;
