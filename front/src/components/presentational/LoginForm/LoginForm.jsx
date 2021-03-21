import React from 'react';
import { useForm } from 'react-hook-form';

import style from './LoginForm.module.css';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm(); // development mode: add const { watch } = useForm();
  const onSubmit = data => console.log(data);

  // development mode: watch input value by passing the name of it
  //   console.log(watch('email'));
  //   console.log(watch('password'));

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={style.label}>
        <span>Email*</span>

        <input name="email" placeholder="Enter email" ref={register({ required: true })} />
        {errors.firstName && 'First name is required'}
      </label>
      <label className={style.label}>
        <span>Password*</span>

        <input
          name="password"
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
