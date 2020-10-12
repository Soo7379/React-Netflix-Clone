import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './utils/routes';
import { Browse, Favorite, Home, SignIn, SignUp } from './pages';
import './App.css';

function App({ initialState }) {
  const { user } = useAuthListener();

  return (
    <Router>
      <div className='App'>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
          >
            <SignIn />
          </IsUserRedirect>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <SignUp />
          </IsUserRedirect>

          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>

          <ProtectedRoute user={user} path={ROUTES.FAVORITE}>
            <Favorite />
          </ProtectedRoute>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
            exact
          >
            <Home />
          </IsUserRedirect>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
