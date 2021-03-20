import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...routeProps }) {
  // TODO:get isAuth from state
  const isAuth = false;

  return (
    <Route
      {...routeProps}
      render={props => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
}
