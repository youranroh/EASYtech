'use client';
import { UserProvider } from '../../../context/UserContext';
import AddMenuItemForm from './AddMenuItemForm';
import Navigation from '../components/Navigation';
import './page.css';

function Home({ onAddMenuItem }) {
  return (
    <UserProvider>
      <div className='page'>
        <Navigation />
        <AddMenuItemForm onAddMenuItem={onAddMenuItem} />
      </div>
    </UserProvider>
  );
}

export default Home;