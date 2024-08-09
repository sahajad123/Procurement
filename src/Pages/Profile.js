import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Need to Rplace the token with the actual token from the authentication
    const token = '<token>';

    axios.get('/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      if (error.response) {
        // Request made and server responded
        if (error.response.status === 401) {
          setError('Unauthorized: No token provided or token is invalid');
        } else {
          setError('Server error');
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError('Network error');
      } else {
        // Something happened in setting up the request
        setError('Error: ' + error.message);
      }
    });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {user ? (
        <div>
          <h1>{user.Name}</h1>
          <p>Username: {user.username}</p>
          <p>Phone Number: {user.PhoneNumber}</p>
          <p>Designation: {user.Designation}</p>
          <p>Department: {user.Department}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
