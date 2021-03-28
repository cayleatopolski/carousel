import React from 'react';
import styles from './dots.module.css';

// const Dot = ({ active }) => {
//   return (
//     <div
//       className={`${styles.dot} ${active ? styles.activeDot : styles.inactive}`}
//     ></div>
//   );
// };

const Dots = ({ slides, onClick, activeSlide }) => {
  return (
    <div className={styles.dotContainer}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          index={index}
          onClick={(event) => onClick((event.target.value = index))}
          className={`${styles.dot} ${
            activeSlide === index ? styles.activeDot : styles.inactive
          }`}
        />
      ))}
    </div>
  );
};

export default Dots;
