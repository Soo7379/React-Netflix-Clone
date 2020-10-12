import React, { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { useStateValue } from '../contexts/StateProvider';
import { Banner, Loading, NavBar, Profile, Row } from '../components';
import requests from '../utils/requests';

const BrowsePage = () => {
  const user = auth.currentUser || {};

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const [{ category }] = useStateValue();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? (
        <Loading user={user} />
      ) : (
        <div>
          <NavBar />

          <Banner />

          {category === 'series' ? (
            <>
              <Row
                title='Action & Adventure'
                fetchUrl={requests.fetchActionSeries}
              />
              <Row title='Comedy' fetchUrl={requests.fetchComedySeries} />
              <Row title='Crime' fetchUrl={requests.fetchCrimeSeries} />
              <Row
                title='Sci-Fi & Fantasy'
                fetchUrl={requests.fetchSifiSeries}
              />
              <Row
                title='Documentary'
                fetchUrl={requests.fetchDocumentarySeries}
              />
            </>
          ) : (
            <>
              <Row title='Action' fetchUrl={requests.fetchActionMovies} />
              <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
              <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
              <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
              <Row title='Documentary' fetchUrl={requests.fetchDocumentaries} />
            </>
          )}
        </div>
      )}
    </>
  ) : (
    <Profile user={user} setProfile={setProfile} />
  );
};

export default BrowsePage;
