import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { PublicRoute, PrivateRoute } from './Routes';

import routes from '../routes';

const App = () => {
  return (
    <Suspense>
      <Switch>
        {routes.map(route =>
          route.private ? (
            <PrivateRoute key={route.path} {...route} />
          ) : (
            <PublicRoute key={route.path} {...route} />
          ),
        )}
      </Switch>
    </Suspense>
  );
};

export default App;
