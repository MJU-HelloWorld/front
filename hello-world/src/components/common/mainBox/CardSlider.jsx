import React, { useState } from 'react';
import Card from './Card';
import styles from './mainBox.module.css';

const CardSlider = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + 3);

  return (
    <div className={styles.cardSliderContainer}>
      
      <div className={styles.cardSlider}>
        <button className={styles.prevButton} onClick={handlePrevClick}>&lt;</button>

        {visiblePosts.map((post) => (
          <Card key={post.id} title={post.title} content={post.content} />
        ))}
        <button className={styles.nextButton} onClick={handleNextClick}>&gt;</button>
      </div>
      <div className={styles.buttonContainer} />
    </div>
  );
};

export default CardSlider;
