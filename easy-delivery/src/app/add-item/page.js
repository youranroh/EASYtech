'use client';
import AddMenuItemForm from './AddMenuItemForm';
import './page.css';
import Navigation from '../components/Navigation';
import { UserProvider } from '../../../context/UserContext';

function Home() {
  return (
    <UserProvider>
      <div className='page'>
        <Navigation />
        <AddMenuItemForm />
      </div>
    </UserProvider>
  );
}

export default Home;