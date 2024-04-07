'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMenuItemForm from './AddMenuItemForm';
import styles from './page.module.css';
import AuthNavigation from '../authenticated-navigation/AuthNavigation';

function Home() {
  return (
    <div className={styles.container}>
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