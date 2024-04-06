'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Carousel from '../components/Carousel';

const Home = () => {
  const foodCategories = [
    { name: 'Fast Food', image: 'fast_food.jpg' },
    { name: 'Sushi', image: 'sushi.jpg' },
    { name: 'Chinese', image: 'chinese.jpg' },
    { name: 'Mexican', image: 'mexican.jpg' },
    { name: 'Cafe', image: 'cafe.jpg' },
    { name: 'Burgers', image: 'burgers.jpg' },
    { name: 'Pasta', image: 'pasta.jpg' },
    // Add more food categories as needed
  ];

  return (
    <div>
      <h1>Food Delivery</h1>
      <Navigation />
      <Carousel items={foodCategories} />
    </div>
  );
};

export default Home;