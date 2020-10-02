import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../../lib/firebase";
import * as ROUTES from "../../utils/routes";

import "./Form.css";

const Form = ({ signup }) => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";

  const handleSignUp = (e) => {
    e.preventDefault();

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    return auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return signup ? (
    <div className="form">
      <div className="form__inner">
        <h1 className="form__title">Sign Up</h1>
        {error && <div className="form__error">{error}</div>}

        <form className="form__base" method="POST" onSubmit={handleSignUp}>
          <input
            type="text"
            className="form__input"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="form__input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="form__submit" disabled={isInvalid}>
            Sign Up
          </button>
        </form>

        <p className="form__text">
          Already a user?{" "}
          <Link to="/signin" className="form__link">
            Sign in now.
          </Link>
        </p>

        <p className="form__textSmall">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </div>
    </div>
  ) : (
    <div className="form">
      <div className="form__inner">
        <h1 className="form__title">Sign In</h1>
        {error && <div className="form__error">{error}</div>}

        <form className="form__base" method="POST">
          <input
            type="text"
            className="form__input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignIn}
            type="submit"
            className="form__submit"
            disabled={isInvalid}
          >
            Sign In
          </button>
        </form>

        <p className="form__text">
          New to Netflix?{" "}
          <Link to="/signup" className="form__link">
            Sign up now.
          </Link>
        </p>

        <p className="form__textSmall">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </div>
    </div>
  );
};

export default Form;
