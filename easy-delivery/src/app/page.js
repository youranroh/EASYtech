'use client';
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import MenuItemCard from './components/MenuItem';
import { UserProvider } from '../../context/UserContext';
import Home from './add-item/page';
import './page.css'

function App() {
  const foodCategories = [
    { name: 'Appetizers', image: '/apps.bmp' },
    { name: 'Pasta', image: '/pasta.bmp' },
    { name: 'Pizza', image: '/pizza.bmp' },
    { name: 'Salad', image: '/salad.bmp' },
    { name: 'Dessert', image: '/dessert.bmp' },
    { name: 'Beverages', image: '/beverages.bmp' },
    { name: 'Kids', image: '/kids.bmp' },
  ];

  const dummyMenuItems = [
    { id: 1, name: 'Margherita Pizza', imageSrc: '/margherita-pizza.webp', price: '14.99', description: 'San Marzano tomatoes, fresh basil, creamy mozzarella on a crisp crust', tag: 'Pizza' },
    { id: 2, name: 'Chicken Alfredo', imageSrc: '/chicken-alfredo.jpeg', price: '12.99', description: 'Tender grilled chicken, rich Alfredo sauce, and al dente fettuccine, topped with Parmesan cheese', tag: 'Pasta' },
    { id: 3, name: 'Tiramisu', imageSrc: '/tiramisu.jpg', price: '9.99', description: 'Layers of delicate ladyfingers soaked in espresso and rum, nestled between creamy mascarpone cheese and dusted with cocoa powder', tag: 'Dessert' },
    { id: 4, name: "Caprese Salad", imageSrc: "/caprese-salad.bmp", description: "Ripe tomatoes, fresh mozzarella, basil leaves, drizzled with balsamic glaze", price: "9.99", tag: 'Salad' },
    { id: 5, name: "Spaghetti Carbonara", imageSrc: "/spaghetti-carbonara.bmp",description: "Spaghetti tossed with crispy pancetta, eggs, Parmesan cheese, and black pepper", price: "15.99", tag: 'Pasta' },
    { id: 6, name: 'Chicken Piccata', imageSrc: '/chicken-piccata.bmp', description: 'Tender chicken breast sautéed in lemon butter sauce with capers, served with pasta', price: '17.99', tag: 'Pasta' },
    { id: 7, name: 'Eggplant Parmesan', imageSrc: '/eggplant-parmesan.bmp', description: 'Layers of breaded eggplant, marinara sauce, and melted mozzarella cheese', price: '13.99', tag: 'Appetizers' },
    { id: 8, name: 'Margherita Panini', imageSrc: '/margherita-panini.bmp', description: 'Fresh basil, ripe tomatoes, and melted mozzarella pressed between artisanal bread', price: '11.99', tag: 'Appetizers' },
    { id: 9, name: 'Freshly Squeezed Juice', imageSrc: '/Grapefruit-Crush-scaled.jpg', description: 'Freshly Squeezed Grapefruit Juice', price: '4.99', tag: 'Beverages' },
    { id: 10, name: 'Chicken Tenders', imageSrc: '/chickenTenders.jpeg', description: 'Herb-breaded chicken breast tenders, served with ketchup and honey mustard', price: '9.99', tag: 'Kids' },
    { id: 11, name: 'Mac & Cheese with Tots', imageSrc: '/mac&Cheese.avif', description: 'Cheddar Mac & Cheese with Crispy Idaho Tots', price: '10.99', tag: 'Kids' },
    { id: 12, name: 'Fountain Drink', imageSrc: '/fountaindrink.jpeg', description: 'Your choice of any of our fountain drinks/sodas', price: '2.99', tag: 'Beverages' },
    { id: 13, name: 'Molten Lava Cake', imageSrc: '/LavaCake.webp', description: 'Gooey Chocoloate Lava cake topped with fresh strawberries', price: '9.99', tag: 'Dessert' },
    { id: 14, name: 'Spicy Southwest Salad', imageSrc: '/spicy-southwest-salad-recipe.png', description: 'Spinach, fresh cherry tomatoes, grilled chicken, tortilla strips, purple cabbage, tossed in spicy chipotle sauce', price: '11.99', tag: 'Salad' },
    { id: 15, name: 'Cheese Pizza', imageSrc: '/cheesepizza.jpeg', description: 'House made crust baked in a blend of mozzerella, parmesan, and peccorino cheeses.', price: '13.99', tag: 'Pizza' },
    { id: 16, name: 'Buffalo Chicken Pizza', imageSrc: '/buffalochickenpizza.jpeg', description: 'House made crust baked in a blend of mozzerella and monterey jack, topped with chicken, onions, peppers, buffalo sauce, and ranch', price: '15.99', tag: 'Pizza' }
  ];

  const [menuItems, setMenuItems] = useState(dummyMenuItems); //state for default view
  const [filteredItems, setFilteredItems] = useState(dummyMenuItems); //state for filtered view


  const handleAddMenuItem = (newMenuItem) => {
    setMenuItems([...menuItems, newMenuItem]);
    setFilteredItems([...filteredItems, newMenuItem]);
  };

  const [items, setItems] = useState('Menu Items:')

  const handleCategoryClick = (categoryName) => {
    //const filtered = menuItems.filter(item => item.tag === categoryName);
    //setFilteredItems(filtered);
    if (filteredItems[0].tag === categoryName && filteredItems[1].tag === categoryName) {
      setFilteredItems(dummyMenuItems);
      setItems('Menu Items:')
    } else {
      const filtered = dummyMenuItems.filter(item => item.tag === categoryName);
      setFilteredItems(filtered);
      setItems(categoryName + ':')
     }
  };

  return (
    <UserProvider>
    <div className='body'>
      <Navigation />
      <br></br>
      <h2 className='welcome'>Welcome!</h2>
      <Carousel items={foodCategories} onCategoryClick={handleCategoryClick}/>

      <br></br>
      <h2 className='welcome'>Menu Items:</h2>
      
      <div className="restaurantList">
      {filteredItems.map((restaurant) => (
          <MenuItemCard
            key={restaurant.id}
            imageSrc={restaurant.imageSrc}
            name={restaurant.name}
            description={restaurant.description}
            price={restaurant.price}
          />
        ))}
      </div>
      {/* Render the Home component and pass onAddMenuItem function */}
      {/* <Home onAddMenuItem={handleAddMenuItem} /> */}
    </div>
    </UserProvider>
  );
}

export default App;
