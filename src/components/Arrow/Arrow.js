import React from 'react';
import styles from './arrow.module.css';

const Arrow = ({ handlePrevClick, handleNextClick }) => {
  return (
    <div className={styles.arrows}>
      <span className={styles.prevArrow} onClick={handlePrevClick}>
        &#10094;
      </span>
      <span className={styles.nextArrow} onClick={handleNextClick}>
        &#10095;
      </span>
    </div>
  );
};

export default Arrow;
