'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './log-in/LogIn';
import styles from './page.module.css';
import Navigation from './navigation/Navigation';
import RestaurantCard from './components/RestaurantCard';
import AddMenuItemForm from './add-item/AddMenuItemForm';
import HomePage from './components/home/page';
import Link from 'next/link';
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
      <LogIn />
      <AddMenuItemForm />
   </div> 
    
  );
 
}

export default Home;
