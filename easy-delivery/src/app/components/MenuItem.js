import React from 'react';
import './MenuItem.css';
import Home from '../add-item/page';

const MenuItemCard = ({ imageSrc, name, description, price }) => {
  return (
    <div className='restaurantCard'>
      <div className='deleteButton'>x</div>
      <div className='imageContainer'>
        <img src={imageSrc} alt="Food Item" className='image' />
      </div>
      <div className='cardContent'>
        <div className='header'>
          <div className='name'>{name}</div>
          <div className='price'>${price}</div>
        </div>
        <div className='description'>{description} </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
