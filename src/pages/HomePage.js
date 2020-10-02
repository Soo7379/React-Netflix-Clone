import React from "react";
import Header from "../components/Header/Header";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Accordion />
      <Footer />
    </div>
  );
};

export default HomePage;
