import React from 'react';

import LoginForm from '../../presentational/LoginForm/LoginForm';

import style from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Authorisation, please!</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
