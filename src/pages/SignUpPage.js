import React from "react";
import homeBackground from "../images/home-bg.jpg";
import { Footer, Form, NavBar } from "../components";

const SignUpPage = () => {
  return (
    <>
      <NavBar notMain />
      <div
        style={{
          background: `url(${homeBackground})`,
          backgroundSize: "cover",
        }}
      >
        <Form signup />
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
