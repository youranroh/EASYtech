import React from 'react';
import './MenuItem.css';

const MenuItemCard = ({ imageSrc, itemName, description, price }) => {
  return (
    <div className='restaurantCard'>
      <div className='imageContainer'>
        <img src={imageSrc} alt="Food Item" className='image' />
      </div>
      <div className='cardContent'>
        <div className='header'>
          <div className='itemName'>{itemName}</div>
          <div className='price'>${price}</div>
        </div>
        <div className='description'>{description} </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
