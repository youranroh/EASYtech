import React from 'react';
import DeleteItem from '../delete-item/DeleteItem';
import { useRouter } from 'next/navigation';

import '../css/MenuItem.css';

const MenuItemCard = ({ itemId, imageSrc, name, description, price, onDelete }) => {
  const router = useRouter();

  const edit = () => {
    let route = "/edit-item/" + itemId;
    router.push(route)
  }

  return (
    <div className='restaurantCard'>
      <DeleteItem itemId={itemId} onDelete={onDelete} />
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
      <button onClick={edit} className='editButton'>Edit Item</button>
    </div>
  );
}

export default MenuItemCard;
