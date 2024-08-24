import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
// import Navbar from './Navbar';
import Navbar from './Narbar';
import '../Pages/Pages.css';
import Procurements from './Procurements';
import UserRequests from './UserRequests';
import Profile from './Profile';
import Settings from './Settings';
import Logout from './Logout';
import GenerateReport from './GenerateReport';

const Main = () => {
  const [selectedItem, setSelectedItem] = useState('Procurements');
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { email, username } = location.state || {};

  const handleSidebarSelect = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('10.11.0.141/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Server error');
      }
    };

    fetchUserDetails();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // if (!userDetails) {
  //   return <div>Please login...</div>;
  // }
 if(!userDetails){
  return (
    <div className="main-container">
      <Sidebar onSelect={handleSidebarSelect} userDetails={userDetails} />
      <div className="content">
        <Navbar selectedItem={selectedItem} userDetails={userDetails} />
      
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Procurements userDetails={userDetails} />} />
            <Route path="Procurements" element={<Procurements userDetails={userDetails} />} />
            <Route path="UserRequests" element={<UserRequests userDetails={userDetails} />} />
            <Route path="Profile" element={<Profile userDetails={userDetails} />} />
            <Route path="Settings" element={<Settings userDetails={userDetails} />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="GenerateReport" element={<GenerateReport userDetails={userDetails} />} />
            {/* <Route path="*" element={<Navigate to="/Main/Procurements" />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}else{
  return(
    <div>
        <h2>Please log in</h2>
    </div>
  )
}
};

export default Main;

