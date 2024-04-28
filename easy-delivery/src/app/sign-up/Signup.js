import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import UserContext from '../../../context/UserContext';
import Link from 'next/link';
import '../css/card.css'

const Signup = () => {
    const router = useRouter();
    const { setUserData } = useContext(UserContext);

    // State to manage form inputs
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [error, setError] = useState('');
    const [errBox, setErrBox] = useState('null')

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send signup request to the server
            await axios.post('http://localhost:8082/api/users/signup', formData);
            const loginRes = await axios.post('http://localhost:8082/api/users/login', {
                email: formData.email,
                password: formData.password
            });
            // Update user data upon successful signup
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            router.push('/');
        } catch (error) {
            console.error('Signup failed: ', error);
            setError(error.response.data.msg);
            setErrBox('error');
            // Handle signup error
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Sign Up or <Link href='/log-in' className='switch'>Login</Link></h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                        type="email"
                        id='email'
                        name='email'
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input
                        type="text"
                        id='username'
                        name='username'
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input
                        type="password"
                        id='password'
                        name='password'
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='confirmPassword'>Confirm password:</label>
                        <input
                        type="password"
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        />
                    </div>
                    <div className={errBox}>{error}</div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;