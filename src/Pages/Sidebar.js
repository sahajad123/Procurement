import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Pages.css';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <nav>
        <ul>
          <li onClick={() => onSelect('Procurements')}>
            <div className='rect'></div>
            <div className='icon1'></div>
            <Link to="/Main/Procurements" className='label-color'>Procurements</Link>
          </li>
          <li onClick={() => onSelect('UserRequests')}>
            <div className='rect'></div>
            <div className='icon2'></div>
            <Link to="/Main/UserRequests" className='label-color'>UserRequests</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
