import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl }) => {
  const [contents, setContents] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setContents(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(item?.name || item?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='row'>
      <p className='row__title'>{title}</p>
      <div className='row__posters'>
        {contents.map((item) => (
          <div key={item.id} className='row__entities'>
            <div className='row__item'>
              <img
                key={item.id}
                onClick={() => handleClick(item)}
                className='row__poster'
                src={`${base_url}${item.backdrop_path}`}
                alt={item.name}
              />

              <div className='row__meta'>
                <p className='row__subtitle'>{item.title || item.name}</p>
                <p className='row__text'>{truncate(item.overview, 150)}</p>
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
