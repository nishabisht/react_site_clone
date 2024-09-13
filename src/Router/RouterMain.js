import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../component/Home/Home";
import Learn from "../component/Learn/Learn";
import Community from "../component/Community/Community";
import Reference from "../component/Reference/Reference";
import Blog from "../component/Blog/Blog";
import InvalidPage from "../component/InvalidPage/InvalidPage";

const RouterMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/reference" element={<Reference />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<InvalidPage />}></Route>
      </Routes>
    </div>
  );
};

export default RouterMain;
