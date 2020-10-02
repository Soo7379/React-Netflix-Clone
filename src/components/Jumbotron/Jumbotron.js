import React from "react";
import jumboData from "../../fixtures/jumbo.json";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      {jumboData.map((item) => (
        <div key={item.id} className="jumbotron__item">
          <div
            className={`jumbotron__inner ${
              item.direction === "row-reverse"
                ? "jumbotron__inner--rowReverse"
                : ""
            }`}
          >
            <div className="jumbotron__pane">
              <h1 className="jumbotron__title">{item.title}</h1>
              <h2 className="jumbotron__subtitle">{item.subTitle}</h2>
            </div>

            <div className="jumbotron__pane">
              <img
                src={item.image}
                alt={item.alt}
                className="jumbotron__image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jumbotron;
