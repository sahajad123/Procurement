// import React, { useState } from 'react';
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// // import Navbar from './Navbar';
// import Navbar from './Narbar';
// import '../Pages/Pages.css';
// import Procurements from './Procurements';
// import UserRequests from './UserRequests';
// import Profile from './Profile';
// import Settings from './Settings'; // Import Settings component
// import Logout from './Logout'; // Import Logout component
// import GenerateReport from './GenerateReport';

// const Main = () => {
//   const [selectedItem, setSelectedItem] = useState('Procurements');

//   const location = useLocation();
//   const { email, username } = location.state || {};

//   const handleSidebarSelect = (item) => {
//     setSelectedItem(item);
//   };

//   const userDetails = { userName: username, userEmail: email };

//   return (
//     <div className="main-container">
//       <Sidebar onSelect={handleSidebarSelect} />
//       <div className="content">
//         <Navbar selectedItem={selectedItem} {...userDetails} />
//         <div className="main-content">
//           <Routes>
//           <Route path="/" element={<Procurements />} />
//             <Route path="Procurements" element={<Procurements />} />
//             <Route path="UserRequests" element={<UserRequests />} />
//             <Route path="Profile" element={<Profile />} />
//             <Route path="Settings" element={<Settings />} />
//             <Route path="Logout" element={<Logout />} />
//             <Route path="GenerateReport" element={<GenerateReport />} />
//             {/* <Route path="*" element={<Navigate to="/Main/Procurements" />} /> */}
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
// import Navbar from './Navbar';
import Navbar from "./Narbar";
import "../Pages/Pages.css";
import Procurements from "./Procurements";
import UserRequests from "./UserRequests";
import Profile from "./Profile";
import Settings from "./Settings";
import Logout from "./Logout";
import GenerateReport from "./GenerateReport";
import config from "../utils/config";

const baseUrl = config.baseUrl;

const Main = () => {
  const [selectedItem, setSelectedItem] = useState("Procurements");
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
        const token = localStorage.getItem("token"); // Retrieve token from localStorage or wherever you store it
        const userId = localStorage.getItem("userId"); // Retrieve token from localStorage or wherever you store it
        const response = await axios.get(`${baseUrl}users/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : "Server error");
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
  // if (!userDetails) {
  return (
    <div className="main-container">
      <Sidebar onSelect={handleSidebarSelect} userDetails={userDetails} />
      <div className="content">
        <Navbar selectedItem={selectedItem} userDetails={userDetails} />

        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Procurements userDetails={userDetails} />}
            />
            <Route
              path="Procurements"
              element={<Procurements userDetails={userDetails} />}
            />
            <Route
              path="Procurements/:reqId"
              element={<Procurements userDetails={userDetails} />}
            />
            <Route
              path="UserRequests"
              element={<UserRequests userDetails={userDetails} />}
            />
            <Route
              path="Profile"
              element={<Profile userDetails={userDetails} />}
            />
            <Route
              path="Settings"
              element={<Settings userDetails={userDetails} />}
            />
            <Route path="Logout" element={<Logout />} />
            <Route
              path="GenerateReport"
              element={<GenerateReport userDetails={userDetails} />}
            />
            {/* <Route path="*" element={<Navigate to="/Main/Procurements" />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
  // } else {
  //   return (
  //     <div>
  //       <h2>Please log in</h2>
  //     </div>
  //   );
  // }
};

export default Main;
