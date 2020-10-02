import React from "react";
import homeBackground from "../images/home-bg.jpg";
import { Footer, Form, NavBar } from "../components";

const SignInPage = () => {
  return (
    <>
      <NavBar notMain />
      <div
        style={{
          background: `url(${homeBackground})`,
          backgroundSize: "contain",
          backgroundPosition: "top center",
        }}
      >
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default SignInPage;
