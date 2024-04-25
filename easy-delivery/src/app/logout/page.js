'use client';
import { UserProvider } from '../../../context/UserContext'
import Navigation from '../components/Navigation';
import Logout from './Logout';
import './page.css';

function Home() {
  return (
    <UserProvider>
      <div className='page'>
        <Navigation />
        <div className='content'>
          <Logout />
        </div>
      </div>
    </UserProvider>
  );
}

export default Home;
