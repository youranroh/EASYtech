'use client';
import { UserProvider } from '../../../context/UserContext';
import AddMenuItemForm from './AddMenuItemForm';
import Navigation from '../components/Navigation';
import './page.css';

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