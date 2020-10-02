import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./OptForm.css";

const OptForm = () => {
  return (
    <div className="optForm">
      <input
        type="text"
        className="optForm__input"
        placeholder="Email Address"
      />

      <button className="optForm__button">
        Try it Now <ChevronRightIcon fontSize="large" />
      </button>
      <div className="optForm__break"></div>

      <p className="optForm__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
    </div>
  );
};

export default OptForm;
