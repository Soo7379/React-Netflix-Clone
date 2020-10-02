import React, { useState } from "react";
import faqsData from "../../fixtures/faqs.json";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import OptForm from "../OptForm/OptForm";

import "./Accordion.css";

const Accordion = () => {
  const [id, setId] = useState("");
  const [showToggle, setShowToggle] = useState(false);

  const handleToggle = (id) => {
    setId(id);
    setShowToggle(!showToggle);
  };

  return (
    <div className="accordion">
      <h1 className="accordion__title">Frequently Asked Questions</h1>

      <div className="accordion__frame">
        {faqsData.map((item) => (
          <div key={item.id} className="accordion__item">
            <div
              className="accordion__header"
              onClick={() => handleToggle(item.id)}
            >
              {item.header} {showToggle ? <ClearIcon /> : <AddIcon />}
            </div>

            {id === item.id && showToggle ? (
              <div className="accordion__body">{item.body}</div>
            ) : null}
          </div>
        ))}
      </div>

      <OptForm />
    </div>
  );
};

export default Accordion;
