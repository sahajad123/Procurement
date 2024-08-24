import React, { useState } from 'react';
import '../Pages/Pages.css';
import { Link } from 'react-router-dom';

const Navbar = ({ selectedItem, userDetails}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  if(!userDetails){
    return<h1>Please log in</h1>
  }

  return (
    <div className="navbar">
      <div className='Page-detail'>
        <ul>
          <li className='Nav'>
            <div className='icon1'></div>
            {selectedItem}
          </li>
          <li className='Nav-detail'>
            {selectedItem === 'Procurements' ? 
              'Request for, and view all requested procurements.' : 
              'View and manage your data.'}
          </li>
        </ul>
      </div>
      <div className="navbar-content">
        <div className="user-info" onClick={toggleMenu}>
          <img src="https://via.placeholder.com/40" alt="User" className="user-image" />
          <span className="user-name">{userDetails.username}</span>
          
          <span className="user-name">username</span>
          <div className={`profile-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to='/Main/Profile'><div className='menuItems'><div className='menu-icon1'></div>Profile</div></Link></li>
              <li><Link to='/Main/Settings'><div className='menuItems'><div className='menu-icon2'></div>Settings</div></Link></li>
              <li><Link to='/Main/Logout'><div className='menuItems'><div className='menu-icon3'></div>Logout</div></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
