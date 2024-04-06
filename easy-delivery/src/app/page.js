'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './log-in/LogIn';
import styles from './page.module.css';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import AddMenuItemForm from './add-item/AddMenuItemForm';
import RestaurantCard from './restaurant-card/RestaurantCard';
import HomePage from './home/page';
//import AddMenuItemForm from './add-item/AddMenuItemForm';
//import HomePage from './home/page';
//import Link from 'next/link';
// import Home from


function Home() {
  const foodCategories = [
    { name: 'Fast Food', image: '/fast-food.png' },
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
      <Navigation />
      <Carousel items={foodCategories} />

      <div class="restaurantList">
        <RestaurantCard
          imageSrc="/example-restaurant.png"
          restaurantName="Cool Restaurant"
          rating={4.5}
          price="$$"
        />
      </div>

      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/addMenuItemForm" element={<AddMenuItemForm />} />
          <Route exact path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default Home;
