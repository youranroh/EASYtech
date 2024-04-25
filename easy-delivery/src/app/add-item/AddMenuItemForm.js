import React, { useState } from 'react';
import axios from 'axios';
import './AddMenuItem.css';


function AddMenuItemForm({onAddMenuItem}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState(''); //This sets the tag for the carousel
  const [img, setImg] = useState('');

  const nameChangeHander = (event) => {
    setName(event.target.value);
  }
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  }
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  }
  const tagChangeHandler = (event) => {
    setTag(event.target.value);
  }
  const imgChangeHandler = (event) => {
    setImg(event.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newMenuItem = {
      name,
      price,
      description,
      tag,
      img,
    };

    try {
      const response = await axios.post('http://localhost:8082/api/items', newMenuItem);
      console.log('Menu item added:', response.data);
      // Optionally, you can handle success behavior here (e.g., show a success message)
    } catch (error) {
      console.error('Error adding menu item:', error.message);
      // Optionally, you can handle error behavior here (e.g., show an error message)
    }

    setName('');
    setPrice('');
    setDescription('');
    setTag('');
    setImg('');
  };

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   console.log('Selected image:', file);
  // };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <h2>Add Item</h2>
        <label htmlFor="name">Name of Food:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHander}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={priceChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="tag">Category of Food:</label>
        <select
          id="tag"
          value={tag}
          onChange={tagChangeHandler}
          required
        >
          <option value="">Select Category</option>
          <option value="Appetizer">Appetizer</option>
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
          value={description}
          onChange={descriptionChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          value={img}
          onChange={imgChangeHandler}
          required
        />
      </div>

      <button type="submit">Add Menu Item</button>
    </form>
  );
}

export default AddMenuItemForm;
