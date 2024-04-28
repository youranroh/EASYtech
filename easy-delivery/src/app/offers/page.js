'use client';
import { UserProvider } from '../../../context/UserContext';
import Navigation from '../components/Navigation';
import Offers from './Offers';
import '../css/form.css';

function Home() {
    const offersData = [
        {
          id: 1,
          title: 'Newly Open Discount',
          description: 'Get 20% off on your first visit!',
        },
        {
            id: 2,
            title: 'New Rewards Members',
            description: 'Get 10% off when you sign up for rewards!'
        },
    ];

    return(
        <UserProvider>
            <div className='page'>
                <Navigation />
                <br></br>
                <h1>Ongoing Offers</h1>
                <div>
                    <div className="offer-cards">
                        {offersData.map((offer) => (
                        <Offers key={offer.id} offer={offer} />
                        ))}
                    </div>
                </div>
            </div>
        </UserProvider>
    );
};

export default Home;