import React from 'react';
import axios from 'axios';

const DeleteItem = ({ itemId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8082/api/items/${itemId}`);
      onDelete(itemId); //call to update UI
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  return (
    <div className='deleteButton' onClick={handleDelete}>
      x
    </div>
  );
}

export default DeleteItem;
