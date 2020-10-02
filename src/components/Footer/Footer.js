import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__title">Questions? Contact us.</p>
      <div className="footer__break"></div>

      <div className="footer__row">
        <div className="footer__column">
          <Link to="#" className="footer__link">
            FAQ
          </Link>
          <Link to="#" className="footer__link">
            Investor Relations
          </Link>
          <Link to="#" className="footer__link">
            Ways to Watch
          </Link>
          <Link to="#" className="footer__link">
            Corporate Information
          </Link>
          <Link to="#" className="footer__link">
            Netflix Originals
          </Link>
        </div>

        <div className="footer__column">
          <Link to="#" className="footer__link">
            Help Centre
          </Link>
          <Link to="#" className="footer__link">
            Jobs
          </Link>
          <Link to="#" className="footer__link">
            Terms of Use
          </Link>
          <Link to="#" className="footer__link">
            Contact Us
          </Link>
        </div>

        <div className="footer__column">
          <Link to="#" className="footer__link">
            Account
          </Link>
          <Link to="#" className="footer__link">
            Redeem gift cards
          </Link>
          <Link to="#" className="footer__link">
            Privacy
          </Link>
          <Link to="#" className="footer__link">
            Speed Test
          </Link>
        </div>

        <div className="footer__column">
          <Link to="#" className="footer__link">
            Media Centre
          </Link>
          <Link to="#" className="footer__link">
            Buy gift cards
          </Link>
          <Link to="#" className="footer__link">
            Cookie Preferences
          </Link>
          <Link to="#" className="footer__link">
            Legal Notices
          </Link>
        </div>
      </div>

      <div className="footer__break"></div>
      <p className="footer__text">Netflix CANADA</p>
    </div>
  );
};

export default Footer;
