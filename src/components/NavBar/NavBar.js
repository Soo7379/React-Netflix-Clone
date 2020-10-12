import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../contexts/StateProvider';
import { actionTypes } from '../../contexts/reducer';
import { auth } from '../../lib/firebase';
import * as ROUTES from '../../utils/routes';
import logo from '../../images/logo.svg';

import './NavBar.css';

const NavBar = ({ notMain }) => {
  const [{ category }, dispatch] = useStateValue();

  const [show, setShow] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const user = auth.currentUser || {};

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        console.log('');
      });
    };
  }, []);

  const handleSeries = () => {
    dispatch({
      type: actionTypes.SET_CATEGORY,
      category: 'series',
    });
  };

  const handleFilms = () => {
    dispatch({
      type: actionTypes.SET_CATEGORY,
      category: 'films',
    });
  };

  return notMain ? (
    <div className={`nav ${show && 'nav__black'}`}>
      <Link to={ROUTES.HOME}>
        <img src={logo} alt='Netflix Logo' className='nav__logo' />
      </Link>

      <Link to={ROUTES.SIGN_IN}>
        <button className='nav__signIn'>Sign In</button>
      </Link>
    </div>
  ) : (
    <div className={`nav ${show && 'nav__black'} nav__main`}>
      <Link to={ROUTES.HOME}>
        <img src={logo} alt='Netflix Logo' className='nav__logo' />
      </Link>

      <div className='nav__categories'>
        <button
          className={`nav__category ${category === 'series' && 'nav__choosen'}`}
          onClick={() => handleSeries()}
        >
          Series
        </button>
        <button
          className={`nav__category ${category === 'films' && 'nav__choosen'}`}
          onClick={() => handleFilms()}
        >
          Films
        </button>
      </div>

      <div className='nav__group'>
        <div className='nav__search'>
          <img
            src='/images/icons/search.png'
            alt='Search'
            onClick={() => setSearchActive((searchActive) => !searchActive)}
            className='nav__searchIcon'
          />

          <input
            type='text'
            className={`${
              !searchActive ? 'nav__searchInput' : 'nav__searchInput--active'
            }`}
            placeholder='Search films and series'
          />
        </div>

        <div className='nav__profile'>
          <button
            className='nav__picture'
            style={{
              background: `url(/images/users/${user.photoURL}.png)`,
            }}
          ></button>

          <div className='nav__dropDown'>
            <div className='nav__group'>
              <button
                className='nav__picture'
                style={{
                  background: `url(/images/users/${user.photoURL}.png)`,
                }}
              ></button>

              <p className='nav__text'>{user.displayName}</p>
            </div>

            <div className='nav__group'>
              <p className='nav__text' onClick={() => auth.signOut()}>
                Sign Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
