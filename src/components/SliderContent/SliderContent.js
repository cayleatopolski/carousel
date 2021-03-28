import React, { useEffect, useState } from 'react';
import Slide from '../Slide/Slide';
import Dots from '../Dots/Dots';
import Arrow from '../Arrow/Arrow';
import { images } from '../../images';
import styles from './slider-content.module.css';

const SliderContent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // auto advances slides, pauses on mouseenter and resumes on mouseleave

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(activeSlide === images.length - 1 ? 0 : activeSlide + 1);
    }, 10000);

    const sliderContent = document.getElementById('auto');

    // pause is working but not flipping boolean
    function pause() {
      clearInterval(interval);
      setIsPaused(!isPaused);
    }
    sliderContent.addEventListener('mouseenter', pause);

    // resume is working but not flipping boolean
    function resume() {
      setIsPaused(isPaused);
    }
    sliderContent.addEventListener('mouseleave', resume);

    return () => {
      clearInterval(interval);
      sliderContent.removeEventListener('mouseenter', pause);
      sliderContent.removeEventListener('mouseleave', resume);
    };
  }, [activeSlide]);

  //check activeSlide state and advance forward or return to initial slide
  const handleNextClick = () => {
    activeSlide === images.length - 1
      ? setActiveSlide(0)
      : setActiveSlide(activeSlide + 1);
  };

  //check activeSlide state and go back or return to initial slide
  const handlePrevClick = () => {
    activeSlide === 0
      ? setActiveSlide(images.length - 1)
      : setActiveSlide(activeSlide - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div id='auto' className={styles.sliderContent}>
        <div className={styles.slide}>
          {images.map((slide, index) => (
            <Slide
              key={slide.imgAlt}
              content={slide.imgUrl}
              imgAlt={slide.imgAlt}
              isActive={index === activeSlide}
            />
          ))}
        </div>
        <Dots
          slides={images}
          activeSlide={activeSlide}
          onClick={(activeSlide) => setActiveSlide(activeSlide)}
        />
        <Arrow
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
      </div>
    </div>
  );
};

export default SliderContent;
