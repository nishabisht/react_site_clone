import React from "react";
import Nav from "../Nav/Nav";
import UperSection from "../Content/UperSection";

const Learn = () => {
  const heading = "Quick Start(Learn)";
  const text1 =
    "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.";
  return (
    <>
      <Nav />
      <div className="mt-3">
        <UperSection heading={heading} text1={text1} />
      </div>
    </>
  );
};

export default Learn;
