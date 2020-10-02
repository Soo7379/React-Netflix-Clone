import React, { useState, useEffect } from "react";
import { auth, db } from "../../lib/firebase";
import axios from "../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";

import "./Row.css";
import { useStateValue } from "../../contexts/StateProvider";
import { actionTypes } from "../../contexts/reducer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const user = auth.currentUser || {};

  const [{ favorites }, dispatch] = useStateValue();

  const [contents, setContents] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [itemId, setItemId] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   const request = await axios.get(fetchUrl);
    //   setContents(request.data.results);
    //   return request;
    // }

    // fetchData();

    axios.get(fetchUrl).then((response) => setContents(response.data.results));
  }, [fetchUrl]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleFavorite = (item) => {
    if (item) {
      // db.collection("favorites")
      //   .add({
      //     user: user.displayName,
      //     item,
      //   })
      //   .then(() => {
      //     setItemId([item.id, ...itemId]);
      //     setFavorite(!favorite);
      //     console.log("item ID ==> ", itemId);
      //   })
      //   .catch((error) => console.log(error));
      // dispatch({
      //   type: actionTypes.SET_FAVORITES,
      //   favorites: itemId,
      // });
      setFavorite(!favorite);
      setItemId([item.id, ...itemId]);
    }
  };
  console.log("id ==> ", itemId);
  //console.log("from reducer ==> ", favorites);

  const handleNotFavorite = (item) => {
    if (item) {
      setFavorite(!favorite);
    }
  };

  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(item?.name || item?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <p className="row__title">{title}</p>
      <div className="row__posters">
        {contents.map((item) => (
          <div key={item.id} className="row__entities">
            <div className="row__item">
              <img
                key={item.id}
                onClick={() => handleClick(item)}
                className="row__poster"
                src={`${base_url}${item.backdrop_path}`}
                alt={item.name}
              />

              <div className="row__meta">
                <p className="row__subtitle">
                  {item.title || item.name}{" "}
                  {/* {itemId.map((id) =>
                    id === item.id ? (
                      <CheckIcon onClick={() => handleNotFavorite(item)} />
                    ) : (
                      <AddIcon onClick={() => handleFavorite(item)} />
                    )
                  )} */}
                  {!itemId ? null : (
                    <AddIcon onClick={() => handleFavorite(item)} />
                  )}
                </p>
                <p className="row__text">{truncate(item.overview, 150)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
