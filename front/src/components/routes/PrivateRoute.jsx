import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

export default function PrivateRoute({ component: Component, ...routeProps }) {
  const isAuth = useSelector(authSelectors.isAuth);

  return (
    <Route
      {...routeProps}
      render={props => (isAuth ? <Component {...props} /> : <Redirect to={routes[0].path} />)}
    />
  );
}
