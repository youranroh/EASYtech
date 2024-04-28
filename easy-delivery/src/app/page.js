'use client';
import { UserProvider } from '../../context/UserContext';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import MenuItem from './components/MenuItem';

import axios from 'axios';
import './page.css'

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const foodCategories = [
    { name: 'All', image: '/allfood.webp' },
    { name: 'Appetizers', image: '/apps.bmp' },
    { name: 'Pasta', image: '/pasta.bmp' },
    { name: 'Pizza', image: '/pizza.bmp' },
    { name: 'Salad', image: '/salad.bmp' },
    { name: 'Dessert', image: '/dessert.bmp' },
    { name: 'Beverages', image: '/beverages.bmp' },
    { name: 'Kids', image: '/kids.bmp' },
  ];

  const dummyMenuItems = [
    //{ _id: 1, name: 'Margherita Pizza', img: '/margherita-pizza.webp', price: '14.99', description: 'San Marzano tomatoes, fresh basil, creamy mozzarella on a crisp crust', tag: 'Pizza' },
    //{ _id: 2, name: 'Chicken Alfredo', img: '/chicken-alfredo.jpeg', price: '12.99', description: 'Tender grilled chicken, rich Alfredo sauce, and al dente fettuccine, topped with Parmesan cheese', tag: 'Pasta' },
    //{ _id: 3, name: 'Tiramisu', img: '/tiramisu.jpg', price: '9.99', description: 'Layers of delicate ladyfingers soaked in espresso and rum, nestled between creamy mascarpone cheese and dusted with cocoa powder', tag: 'Dessert' },
    //{ _id: 4, name: "Caprese Salad", img: "/caprese-salad.bmp", description: "Ripe tomatoes, fresh mozzarella, basil leaves, drizzled with balsamic glaze", price: "9.99", tag: 'Salad' },
    //{ _id: 5, name: "Spaghetti Carbonara", img: "/spaghetti-carbonara.bmp",description: "Spaghetti tossed with crispy pancetta, eggs, Parmesan cheese, and black pepper", price: "15.99", tag: 'Pasta' },
    //{ _id: 6, name: 'Chicken Piccata', img: '/chicken-piccata.bmp', description: 'Tender chicken breast sautéed in lemon butter sauce with capers, served with pasta', price: '17.99', tag: 'Pasta' },
    //{ _id: 7, name: 'Eggplant Parmesan', img: '/eggplant-parmesan.bmp', description: 'Layers of breaded eggplant, marinara sauce, and melted mozzarella cheese', price: '13.99', tag: 'Appetizers' },
    //{ _id: 8, name: 'Margherita Panini', img: '/margherita-panini.bmp', description: 'Fresh basil, ripe tomatoes, and melted mozzarella pressed between artisanal bread', price: '11.99', tag: 'Appetizers' },
    //{ _id: 9, name: 'Freshly Squeezed Juice', img: '/Grapefruit-Crush-scaled.jpg', description: 'Freshly Squeezed Grapefruit Juice', price: '4.99', tag: 'Beverages' },
    //{ _id: 10, name: 'Chicken Tenders', img: '/chickenTenders.jpeg', description: 'Herb-breaded chicken breast tenders, served with ketchup and honey mustard', price: '9.99', tag: 'Kids' },
    //{ _id: 11, name: 'Mac & Cheese with Tots', img: '/mac&Cheese.avif', description: 'Cheddar Mac & Cheese with Crispy Idaho Tots', price: '10.99', tag: 'Kids' },
    //{ _id: 12, name: 'Fountain Drink', img: '/fountaindrink.jpeg', description: 'Your choice of any of our fountain drinks/sodas', price: '2.99', tag: 'Beverages' },
    //{ _id: 13, name: 'Molten Lava Cake', img: '/LavaCake.webp', description: 'Gooey Chocoloate Lava cake topped with fresh strawberries', price: '9.99', tag: 'Dessert' },
    //{ _id: 14, name: 'Spicy Southwest Salad', img: '/spicy-southwest-salad-recipe.png', description: 'Spinach, fresh cherry tomatoes, grilled chicken, tortilla strips, purple cabbage, tossed in spicy chipotle sauce', price: '11.99', tag: 'Salad' },
    //{ _id: 15, name: 'Cheese Pizza', img: '/cheesepizza.jpeg', description: 'House made crust baked in a blend of mozzerella, parmesan, and peccorino cheeses.', price: '13.99', tag: 'Pizza' },
    //{ _id: 16, name: 'Buffalo Chicken Pizza', img: '/buffalochickenpizza.jpeg', description: 'House made crust baked in a blend of mozzerella and monterey jack, topped with chicken, onions, peppers, buffalo sauce, and ranch', price: '15.99', tag: 'Pizza' }
  ];

  // const [menuItems, setMenuItems] = useState(dummyMenuItems); //state for default view
  // const [filteredItems, setFilteredItems] = useState(dummyMenuItems); //state for filtered view


  // const handleAddMenuItem = (newMenuItem) => {
  //   setMenuItems([...menuItems, newMenuItem]);
  //   setFilteredItems([...filteredItems, newMenuItem]);
  // };

  // const [items, setItems] = useState('Menu Items:')

  // const handleCategoryClick = (categoryName) => {
  //   //const filtered = menuItems.filter(item => item.tag === categoryName);
  //   //setFilteredItems(filtered);
  //   if (filteredItems[0].tag === categoryName && filteredItems[1].tag === categoryName) {
  //     setFilteredItems(dummyMenuItems);
  //     setItems('Menu Items:')
  //   } else {
  //     const filtered = dummyMenuItems.filter(item => item.tag === categoryName);
  //     setFilteredItems(filtered);
  //     setItems(categoryName + ':')
  //    }
  // };

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/items');
        const fetchedMenuItems = response.data;
        setMenuItems([...dummyMenuItems, ...fetchedMenuItems]);
        setFilteredItems([...dummyMenuItems, ...fetchedMenuItems]);
      } catch (error) {
        console.error('Error fetching menu items:', error.message);
      }
    };

    fetchMenuItems();
  }, []);

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8082/api/items/${itemId}`);
      //update state (updating list on home page)
      const updatedMenuItems = menuItems.filter(item => item._id !== itemId);
      const updatedFilteredItems = filteredItems.filter(item => item._id !== itemId);
      setMenuItems(updatedMenuItems);
      setFilteredItems(updatedFilteredItems);
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (categoryName === 'All') {
      setFilteredItems([...menuItems]);
    } else {
      const filtered = menuItems.filter(item => item.tag === categoryName);
      setFilteredItems(filtered);
    }
  };

  return (
    <UserProvider>
      <div className='body'>
        <Navigation />
        <br></br>
        <h1 className='welcome'>Welcome!</h1>
        <Carousel items={foodCategories} onCategoryClick={handleCategoryClick}/>
        <div className="itemList">
          {filteredItems.map((item) => {
            return (
              <MenuItem
                key={item._id}
                itemId={item._id}
                imageSrc={item.img}
                name={item.name}
                description={item.description}
                price={item.price}
                onDelete={handleDeleteItem}
              />
            );
          })}
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
