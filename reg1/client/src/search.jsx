import React, { useState } from "react";
import axios from 'axios';

function SearchEmail() {
    const [searchedEmail, setSearchedEmail] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [message, setMessage] = useState('');

    const handleSearch = () => {
        axios.get(`http://localhost:3001/getEmail/${searchedEmail}`)
            .then(response => {
                if (response.data) {
                    setUserDetails(response.data);
                    setMessage('');
                } else {
                    setUserDetails(null);
                    setMessage('Email not found');
                }
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
                setMessage('Error fetching user details');
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Search Registered Email</h2>
                <div className="mb-3">
                    <label htmlFor="searchEmail">
                        <strong>Enter Email</strong>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="searchEmail"
                        className="form-control rounded-0"
                        value={searchedEmail}
                        onChange={(e) => setSearchedEmail(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleSearch}
                    className="btn btn-primary w-100 rounded-0"
                >
                    Search
                </button>
                {message && <p>{message}</p>}
                {userDetails && (
                    <div className="mt-3">
                       <p><strong>Name:</strong> {userDetails.name}</p>
                        <p><strong>Email:</strong> {userDetails.email}</p>
                        <p><strong>Address:</strong> {userDetails.address}</p>
                        <p><strong>Age:</strong> {userDetails.age}</p>                    
                    </div>
                )}      
            </div>
        </div>
    );
}



export default SearchEmail;
