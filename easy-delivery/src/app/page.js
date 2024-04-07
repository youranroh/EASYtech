'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './log-in/LogIn';
import './page.module.css';
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
    { name: 'Lunch', image: '/#.png' },
    { name: 'Dinner', image: '#.jpg' },
    { name: 'Breakfast', image: '#.jpg' },
    { name: 'Meals', image: '#.jpg' },
    { name: 'Kids', image: '#.jpg' },
    { name: '#', image: '#.jpg' },
    { name: '#', image: '#.jpg' },
    // Add more food categories as needed
  ];

  const dummyRestaurants = [
    { id: 1, name: 'Cool Restaurant', imageSrc: '/example-restaurant.png', rating: 4.5, price: '$$' },
    { id: 2, name: 'Fancy Place', imageSrc: '/example-restaurant.png', rating: 4.8, price: '$$$' },
    { id: 3, name: 'Cozy Cafe', imageSrc: '/example-restaurant.png', rating: 4.2, price: '$' },
  ];

  return (
    <div>
      <Navigation />
      <h1 className='welcome'>Welcome!</h1>
      <Carousel items={foodCategories} />

      <div class="restaurantList">
      {dummyRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            imageSrc={restaurant.imageSrc}
            restaurantName={restaurant.name}
            rating={restaurant.rating}
            price={restaurant.price}
          />
        ))}
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
