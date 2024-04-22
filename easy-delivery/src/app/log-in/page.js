'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './LogIn';
import './page.css';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <div className='page'>
      <Navigation />
      <LogIn />

      <Router>
        <Routes>
          <Route exact path="/." element={<LogIn />} />
        </Routes>
      </Router>

    </div>
  );
}

export default Home;
