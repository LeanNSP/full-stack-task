import React from 'react';
import { NavLink } from 'react-router-dom';

import RegisterForm from '../../presentational/RegisterForm/RegisterForm';

import style from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Register, please!</h1>
      <RegisterForm />
      <NavLink className={style.link} to={'/login'}>
        {'<< '}Back to login
      </NavLink>
    </div>
  );
};

export default RegisterPage;
