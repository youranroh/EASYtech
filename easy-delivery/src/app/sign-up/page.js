'use client';
import { UserProvider } from '../../../context/UserContext'
import Navigation from '../components/Navigation';
import Signup from './Signup';
import './page.css';


function Home() {
  return (
    <UserProvider>
      <div className='page'>
        <Navigation />
        <div className='content'>
            <Signup />
        </div>
      </div>
    </UserProvider>
  );
}

export default Home;
