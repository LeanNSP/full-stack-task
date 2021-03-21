import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

export default function PublicRoute({ component: Component, restricted, ...routeProps }) {
  const isAuth = useSelector(authSelectors.isAuth);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth && restricted ? <Redirect to={routes[2].path} /> : <Component {...props} />
      }
    />
  );
}
