'use client'
import React from 'react';
import styles from './RestaurantCard.css';

const RestaurantCard = ({ imageSrc, restaurantName, rating, price }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt="Restaurant" className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.restaurantName}>{restaurantName}</h2>
        <div className={styles.rating}>{rating}⭐️</div>
        <div className={styles.price}>Price: {price}</div>
      </div>
    </div>
  );
}

export default RestaurantCard;
