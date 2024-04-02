'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import styles from './page.module.css';
import RestaurantCard from './components/RestaurantCard';

function Home() {
  return (
    <div className={styles.container}>
      {/* <RestaurantCard
        imageSrc="url_to_your_image.jpg"
        restaurantName="Your Restaurant Name"
        rating={4.5}
        price="$$"
      /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
