import React from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../../redux/auth';

import style from './TestPage.module.css';

const TestPage = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Test Page</h1>
      <button className={style.btn} type="button" onClick={() => authOperations.logout(dispatch)}>
        Logout
      </button>
    </div>
  );
};

export default TestPage;
