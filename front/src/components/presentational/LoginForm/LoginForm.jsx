import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../../redux/auth';

import style from './LoginForm.module.css';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm(); // development mode: add const { watch } = useForm();

  // development mode: watch input value by passing the name of it
  //   console.log(watch('email'));
  //   console.log(watch('password'));

  const dispatch = useDispatch();

  const onSubmit = (credentials, e) => {
    e.target.reset();
    authOperations.login(credentials, dispatch);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={style.label}>
        <span>Email*</span>

        <input
          name="email"
          type="email"
          placeholder="Enter email"
          ref={register({ required: true })}
        />
        {errors.firstName && 'First name is required'}
      </label>
      <label className={style.label}>
        <span>Password*</span>

        <input
          name="password"
          type="password"
          placeholder="Enter password"
          ref={register({ required: true, min: 6, max: 16 })}
        />
        {errors.lastName && 'Last name is required'}
      </label>
      <button className={style.btn} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
