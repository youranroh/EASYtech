import React from 'react';
import styles from './RestaurantCard.module.css'; 

const RestaurantCard = ({ imageSrc, restaurantName, rating, price }) => {
  return (
    <div className='restaurantCard'>
      <div className='imageContainer'>
        <img src={imageSrc} alt="Restaurant" className={styles.image} />
      </div>
      <div className='cardContent'>
        <h2 className='restaurantName'>{restaurantName}</h2>
        <div className='rating'>{rating} ⭐️</div>
        <div className='price'>Price: {price}</div>
      </div>
    </div>
  );
}

export default RestaurantCard;
