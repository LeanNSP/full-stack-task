import React, { Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { PublicRoute, PrivateRoute } from './Routes';

import routes from '../routes';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map(route =>
          route.private ? (
            <PrivateRoute key={route.path} {...route} />
          ) : (
            <PublicRoute key={route.path} {...route} />
          ),
        )}
        <Redirect to={'/login'} />
      </Switch>
    </Suspense>
  );
};

export default App;
