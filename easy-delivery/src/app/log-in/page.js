'use client';
import { UserProvider } from '../../../context/UserContext'
import LogIn from './LogIn';
import LogInForm from './LogIn';
import './page.css';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <UserProvider>
      <div className='page'>
        <Navigation />
        <div className='content'>
          <LogInForm />
        </div>
      </div>
    </UserProvider>
  );
}

export default Home;
