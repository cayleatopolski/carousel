import React from 'react';
import styles from './slide.module.css';

const Slide = ({ content, imgAlt, isActive }) => (
  <img
    className={`${styles.image} ${isActive ? styles.active : styles.inactive}`}
    src={content}
    alt={imgAlt}
  />
);

export default Slide;
