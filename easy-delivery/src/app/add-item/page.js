'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMenuItemForm from './AddMenuItemForm';
import './page.css';
import AuthNavigation from '../components/AuthNavigation';

function Home() {
  return (
    <div className='page'>
      {/* <RestaurantCard
        imageSrc="url_to_your_image.jpg"
        restaurantName="Your Restaurant Name"
        rating={4.5}
        price="$$"
      /> */}
      <AuthNavigation />
      <AddMenuItemForm />

      <Router>
        <Routes>
          <Route exact path="/" element={<page />} />
        </Routes>
      </Router>

    </div>
  );
}

export default Home;