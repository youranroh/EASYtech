import React from 'react';
import styles from './MenuItem.module.css';

const MenuItemCard = ({ imageSrc, itemName, rating, price }) => {
  return (
    <div className='restaurantCard'>
      <div className='imageContainer'>
        <img src={imageSrc} alt="Food Item" className={styles.image} />
      </div>
      <div className='cardContent'>
        <h2 className='itemName'>{itemName}</h2>
        <div className='rating'>{rating} ⭐️</div>
        <div className='price'>Price: {price}</div>
      </div>
    </div>
  );
}

export default MenuItemCard;
