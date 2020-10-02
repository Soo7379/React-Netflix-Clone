import React from "react";
import homeBackground from "../../images/home-bg.jpg";
import NavBar from "../NavBar/NavBar";
import OptForm from "../OptForm/OptForm";
import "./Header.css";

const Header = () => {
  return (
    <>
      <NavBar notMain />
      <div
        className="header"
        style={{
          background: `url(${homeBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <h2 className="header__title">
          Unlimited films, TV programmes and more.
        </h2>

        <h3 className="header__subtitle">
          Watch anywhere. Cancel at any time.
        </h3>

        <OptForm />
      </div>
    </>
  );
};

export default Header;
