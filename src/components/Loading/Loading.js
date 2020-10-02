import React from "react";

import "./Loading.css";

const Loading = ({ user }) => {
  return (
    <div className="loading">
      <img
        src={`/images/users/${user.photoURL}-big.png`}
        alt=""
        className="loading__picture"
      />
    </div>
  );
};

export default Loading;
