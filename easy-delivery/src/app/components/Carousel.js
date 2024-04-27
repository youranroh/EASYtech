import React, { useState } from 'react';
import '../css/Carousel.css';

const Carousel = ({ items, onCategoryClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentIndex === 0) ? items.length - 5 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex === items.length - 5) ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const handleCategoryClick = (index) => {
    onCategoryClick(items[index].name);
  };

  return (
    <div className='center'>
      <div className="carousel">
        <button onClick={goToPrevSlide} className="arrow prev">&#10094;</button>
        <button onClick={goToNextSlide} className="arrow next">&#10095;</button>
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
          {items.map((item, index) => (
            <div
              key={index}
              className="slide pointer"
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => handleCategoryClick(index)}
            >
              <div className="category-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
