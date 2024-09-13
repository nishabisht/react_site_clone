import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import {
  Welcome,
  UserInterface,
  ReactCommunity,
  Interactivity,
  Framework,
  Platform,
  CodeSection,
} from "../Welcome/Welcome";

const Home = () => {
  return (
    <>
      <div className="App">
        <Nav />
        <Welcome />
        <UserInterface />
        <CodeSection />
        <Interactivity />
        <Framework />
        <Platform />
        <ReactCommunity />
        <Footer />
      </div>
    </>
  );
};

export default Home;
