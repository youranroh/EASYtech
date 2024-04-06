import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide} className="arrow prev">&#10094;</button>
      <button onClick={goToNextSlide} className="arrow next">&#10095;</button>
      <div className="slides">
        {items.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="category-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
