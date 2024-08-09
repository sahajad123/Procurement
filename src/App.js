import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginComponents/Login';
import Forgot from './LoginComponents/Forgot';
import Home from './LoginComponents/Home';
import ResetPassword from './LoginComponents/ResetPassword';
import Main from './Pages/Main';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/Main/*" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
