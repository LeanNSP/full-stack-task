import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../../redux/auth';

import style from './RegisterForm.module.css';

const RegisterForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  // development mode: watch input value by passing the name of it
  //   console.log(watch('email'));
  //   console.log(watch('password'));
  //   console.log(watch('password2'));

  const dispatch = useDispatch();

  const onSubmit = async ({ email, password }, e) => {
    e.preventDefault();

    const data = await authOperations.register({ email, password }, dispatch);

    if (data) {
      await authOperations.login({ email, password }, dispatch);
    }

    e.target.reset();
  };

  const validatePassword = value => value === watch('password'); // value is from password2 and watch will return value from password

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
          ref={register({ required: true, min: 6, max: 16 })}
        />
        {errors.password && console.dir(errors)}
      </label>
      <label className={style.label}>
        <span>Confirm password*</span>

        <input
          name="password2"
          type="password"
          placeholder="Confirm password"
          ref={register({ validate: validatePassword })}
        />
        {errors.password2 && alert('Password mismatch')}
      </label>
      <button className={style.btn} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
