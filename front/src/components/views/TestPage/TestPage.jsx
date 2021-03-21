import React from 'react';

import style from './TestPage.module.css';

const TestPage = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Test Page</h1>
      <button className={style.btn}>Logout</button>
    </div>
  );
};

export default TestPage;
