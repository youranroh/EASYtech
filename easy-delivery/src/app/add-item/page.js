'use client';
import { UserProvider } from '../../../context/UserContext';
import AddMenuItemForm from './AddMenuItemForm';
import Navigation from '../components/Navigation';
import '../css/form.css';

function Home({ onAddMenuItem }) {
  return (
    <UserProvider>
      <div className='page'>
        <Navigation />
        <div className='content'>
          <AddMenuItemForm onAddMenuItem={onAddMenuItem} />
        </div>
      </div>
    </UserProvider>
  );
}

export default Home;