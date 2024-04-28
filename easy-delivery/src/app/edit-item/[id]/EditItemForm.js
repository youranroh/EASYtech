import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import UserContext from '../../../../context/UserContext';
import DeleteItem from '@/app/delete-item/DeleteItem';
import axios from 'axios';
import '../../css/card.css';


function EditItemForm() {
  const router = useRouter();
  const itemId = window.location.pathname.split('/')[2];
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (null) {
      router.push('/'); // redirect
      console.log(userData.token);
    }
  }, [userData.token, router]);

  const [item, setItem] = useState({
    name: '',
    price: '',
    description: '',
    tag: '',
    img: ''
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch item data from MongoDB using itemId
    axios.get(`http://localhost:8082/api/items/${itemId}`)
        .then(response => {
            setItem(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching item:', error);
            setLoading(false);
        });
  }, [itemId]);

  const handleChange = e => {
    const { name, value } = e.target;
    setItem(prevItem => ({
        ...prevItem,
        [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8082/api/items/${itemId}`, item);
      console.log('Item updated successfully');
      router.push('/');
    } catch (error) {
      console.error('Error updating item:', error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8082/api/items/${itemId}`);
      console.log('Item deleted successfully');
      router.push('/');
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      {userData.token ? (
        <div className='card'>
        <h1>Edit Item</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name of Food:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={item.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={item.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="tag">Category of Food:</label>
            <select
              id="tag"
              name="tag"
              value={item.tag}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Appetizers">Appetizers</option>
              <option value="Pasta">Pasta</option>
              <option value="Pizza">Pizza</option>
              <option value="Salad">Salad</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverages">Beverages</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={item.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              id="image"
              type="text"
              name="img"
              value={item.img}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Edit Item</button>
        </form>
        <button onClick={handleDelete} className='optionTwo'>Delete Item</button>
      </div>
      ) : ( 
        <h1>You must be logged in to do that</h1>
      )}
    </div>
  );
}

export default EditItemForm;
