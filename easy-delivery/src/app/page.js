'use client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogIn from './log-in/LogIn';
import Navigation from './components/Navigation';
import AuthNavigation from './authenticated-navigation/AuthNavigation';
import Carousel from './components/Carousel';
import AddMenuItemForm from './add-item/AddMenuItemForm';
import MenuItemCard from './menu-item/MenuItem';
import HomePage from './home/page';
import PageNotFound from './components/PageNotFound';
import './page.css'
//import AddMenuItemForm from './add-item/AddMenuItemForm';
//import HomePage from './home/page';
//import Link from 'next/link';
// import Home from


function App() {
  const foodCategories = [
    { name: 'Appetizers', image: '/apps.bmp' },
    { name: 'Pasta', image: '/pasta.bmp' },
    { name: 'Pizza', image: '/pizza.bmp' },
    { name: 'Salad', image: '/salad.bmp' },
    { name: 'Dessert', image: '/dessert.bmp' },
    { name: 'Beverages', image: '/beverages.bmp' },
    { name: 'Kids', image: '/kids.bmp' },
    // Add more food categories as needed
  ];

  const dummyMenuItems = [
    { 
      id: 1, 
      name: 'Margherita Pizza', 
      imageSrc: '/margherita-pizza.webp', 
      price: '14.99',
      description: 'San Marzano tomatoes, fresh basil, creamy mozzarella on a crisp crust'
    },
    { 
      id: 2, 
      name: 'Chicken Alfredo', 
      imageSrc: '/chicken-alfredo.jpeg', 
      price: '12.99',
      description: 'Tender grilled chicken, rich Alfredo sauce, and al dente fettuccine, topped with Parmesan cheese', 
    },
    { 
      id: 3, 
      name: 'Tiramisu', 
      imageSrc: '/tiramisu.jpg', 
      price: '9.99',
      description: 'Layers of delicate ladyfingers soaked in espresso and rum, nestled between creamy mascarpone cheese and dusted with cocoa powder'
    },
    {
      id: 4,
      name: "Caprese Salad",
      imageSrc: "/caprese-salad.bmp",
      description: "Ripe tomatoes, fresh mozzarella, basil leaves, drizzled with balsamic glaze",
      price: "9.99"
    },
    {
      id: 5,
      name: "Spaghetti Carbonara",
      imageSrc: "/spaghetti-carbonara.bmp",
      description: "Spaghetti tossed with crispy pancetta, eggs, Parmesan cheese, and black pepper",
      price: "15.99"
    },
    {
      id: 6,
      name: 'Chicken Piccata',
      imageSrc: '/chicken-piccata.bmp',
      description: 'Tender chicken breast sautéed in lemon butter sauce with capers, served with pasta',
      price: '17.99'
    },
    {
      id: 7,
      name: 'Eggplant Parmesan',
      imageSrc: '/eggplant-parmesan.bmp',
      description: 'Layers of breaded eggplant, marinara sauce, and melted mozzarella cheese',
      price: '13.99'
    },
    {
      id: 8,
      name: 'Margherita Panini',
      imageSrc: '/margherita-panini.bmp',
      description: 'Fresh basil, ripe tomatoes, and melted mozzarella pressed between artisanal bread',
      price: '11.99'
    }
    
    
    
  ];

  return (
    <div className='body'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigation />} />
          <Route exact path='/log-in' element={<AuthNavigation />} />
          <Route exact path='/add-item' element={<AuthNavigation />} />
          <Route exact path="/addMenuItemForm" element={<AddMenuItemForm />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          </Routes>
      </Router>
      <br></br>
      <h2 className='welcome'>Welcome!</h2>
      <Carousel items={foodCategories} />

      <br></br>
      <h2>Your favorites:</h2>

      <div className="restaurantList">
      {dummyMenuItems.map((restaurant) => (
          <MenuItemCard
            key={restaurant.id}
            imageSrc={restaurant.imageSrc}
            itemName={restaurant.name}
            description={restaurant.description}
            price={restaurant.price}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
