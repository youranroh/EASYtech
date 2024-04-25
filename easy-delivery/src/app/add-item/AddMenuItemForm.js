import React, { useState } from 'react';
import './AddMenuItem.css';


function AddMenuItemForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState(''); //This sets the tag for the carousel

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      price,
      category,
      description,
      tag
    });

    setName('');
    setPrice('');
    setCategory('');
    setDescription('');
    setTag('');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log('Selected image:', file);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <h2>Add Item</h2>
        <label htmlFor="name">Name of Food:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="tag">Category of Food:</label>
        <select
          id="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
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
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => handleImageUpload(e)}
          required
        />
      </div>

      <button type="submit">Add Menu Item</button>
    </form>
  );
}

export default AddMenuItemForm;
