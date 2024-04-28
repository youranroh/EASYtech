'use client';
import { UserProvider } from '../../../../context/UserContext';
import Navigation from '../../components/Navigation';
import EditItemForm from './EditItemForm';
import '../../css/form.css';

function Home() {
    return (
        <UserProvider>
            <div className='page'>
                <Navigation />
                <div className='content'>
                    <EditItemForm />
                </div>
            </div>
        </UserProvider>
    );
}

export default Home;