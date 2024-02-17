import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');

        navigate('/login');
    };
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Home</h2>
            <p>Welcome to the home page!</p>
            <button
                onClick={handleLogout}
                className="btn btn-danger w-100 rounded-0"
            >
                Logout
            </button>
        </div>
    </div>
);
}

export default Home;