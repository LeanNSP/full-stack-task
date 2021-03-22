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
    e.preventDefault();

    authOperations.login(credentials, dispatch);

    e.target.reset();
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
        {errors.email && alert('Email is required')}
      </label>
      <label className={style.label}>
        <span>Password*</span>

        <input
          name="password"
          type="password"
          placeholder="Enter password"
          ref={register({ required: true })}
        />
        {errors.password && alert('Password is required')}
      </label>
      <button className={style.btn} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
