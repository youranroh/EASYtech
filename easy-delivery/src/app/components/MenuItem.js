import React, { useContext } from 'react';
import DeleteItem from '../delete-item/DeleteItem';
import { useRouter } from 'next/navigation';
import UserContext from '../../../context/UserContext';
import '../css/MenuItem.css';

const MenuItemCard = ({ itemId, imageSrc, name, description, price, onDelete }) => {
  const router = useRouter();
  const { userData } = useContext(UserContext);

  const edit = () => {
    let route = "/item/" + itemId;
    router.push(route)
  }

  return (
    <div className='restaurantCard'>
      {userData.token ? (
        <DeleteItem itemId={itemId} onDelete={onDelete} />
      ) : null}
      <div className='imageContainer' onClick={edit}>
        <img src={imageSrc} alt="Food Item" className='image' />
      </div>
      <div className='cardContent' onClick={edit}>
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
