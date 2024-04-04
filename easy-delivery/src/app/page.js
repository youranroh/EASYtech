'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './log-in/LogIn';
import styles from './page.module.css';
import Navigation from './components/Navigation';
import RestaurantCard from './components/RestaurantCard';
import AddMenuItemForm from './add-item/AddMenuItem';
import HomePage from './home/page';
// import Home from


function Home() {
  
  return (
    <div className={styles.container}>
      {/* <RestaurantCard
        imageSrc="url_to_your_image.jpg"
        restaurantName="Your Restaurant Name"
        rating={4.5}
        price="$$"
      /> */

      }
      <Navigation />
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
