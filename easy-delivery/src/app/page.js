'use client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogIn from './log-in/LogIn';
import Navigation from './components/Navigation';
import AuthNavigation from './authenticated-navigation/AuthNavigation';
import Carousel from './components/Carousel';
import AddMenuItemForm from './add-item/AddMenuItemForm';
import RestaurantCard from './restaurant-card/RestaurantCard';
import HomePage from './home/page';
//import AddMenuItemForm from './add-item/AddMenuItemForm';
//import HomePage from './home/page';
//import Link from 'next/link';
// import Home from


function App() {
  const foodCategories = [
    { name: 'Lunch', image: '#.png' },
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
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigation />} />
          <Route exact path='/log-in' element={<AuthNavigation />} />
          <Route exact path='/add-item' element={<AuthNavigation />} />
          <Route exact path="/addMenuItemForm" element={<AddMenuItemForm />} />
          <Route exact path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
      <br></br>
      <h2>Welcome!</h2>
      <Carousel items={foodCategories} />

      <br></br>
      <h2>Your favorites:</h2>

      <div className="restaurantList">
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
      
    </div>
  );
}

export default App;
