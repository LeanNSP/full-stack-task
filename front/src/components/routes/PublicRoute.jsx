import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute({ component: Component, restricted, ...routeProps }) {
  // TODO:get isAuth from state
  const isAuth = false;

  return (
    <Route
      {...routeProps}
      render={props => (isAuth && restricted ? <Redirect to="/test" /> : <Component {...props} />)}
    />
  );
}
