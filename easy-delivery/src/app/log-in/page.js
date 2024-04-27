'use client';
import { UserProvider } from '../../../context/UserContext'
import Navigation from '../components/Navigation';
import LogIn from './LogIn';
import '../css/form.css';

function Home() {
  return (
    <UserProvider>
      <div className='page'>
        <Navigation />
        <div className='content'>
          <LogIn />
        </div>
      </div>
    </UserProvider>
  );
}

export default Home;
