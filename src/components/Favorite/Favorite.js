import React from 'react';
import { NavBar } from '..';

import './Favorite.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Favorite = ({ favoriteList }) => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <>
      <NavBar />

      <div className='favorite'>
        <h2 className='favorite__title'>My List</h2>

        <div className='favorite__container'>
          {favoriteList.map((item) => (
            <div key={item.id} className='favorite__item'>
              <img
                src={`${base_url}${item.data.item.backdrop_path}`}
                alt=''
                className='favorite__poster'
              />

              <div className='favorite__meta'>
                <p className='favorite__subtitle'>
                  {item.data.item.title || item.data.item.name}
                </p>
                <p className='favorite__text'>
                  {truncate(item.data.item.overview, 150)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorite;
