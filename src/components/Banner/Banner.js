import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../utils/routes";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";

const Banner = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setContent(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="banner"
      style={{
        background: `url("https://image.tmdb.org/t/p/original/${content?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h2 className="banner__title">
          {content?.title || content?.name || content?.original_name}
        </h2>

        <p className="banner__description">
          {truncate(content?.overview, 150)}
        </p>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>

          <Link to={ROUTES.FAVORITE}>
            <button className="banner__button">My List</button>
          </Link>
        </div>
      </div>

      {/* <div className="banner--fadeBottom"></div> */}
    </div>
  );
};

export default Banner;
