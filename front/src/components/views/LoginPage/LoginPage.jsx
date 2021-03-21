import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginForm from '../../presentational/LoginForm/LoginForm';

import style from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Authorize, please!</h1>
      <LoginForm />
      <NavLink className={style.link} to={'/register'}>
        Register{' >>'}
      </NavLink>
    </div>
  );
};

export default LoginPage;
