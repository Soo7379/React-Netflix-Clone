import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../utils/routes";
import logo from "../../images/logo.svg";

import "./Profile.css";

const Profile = ({ user, setProfile }) => {
  return (
    <div className="profile">
      <Link to={ROUTES.HOME}>
        <img src={logo} alt="logo" className="profile__logo" />
      </Link>

      <div className="profile__container">
        <h1 className="profile__title">Who's watching?</h1>

        <div className="profile__list">
          <li
            className="profile__user"
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <img
              src={`/images/users/${user.photoURL}-big.png`}
              alt=""
              className="profile__picture"
            />

            <p className="profile__name">{user.displayName}</p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Profile;
