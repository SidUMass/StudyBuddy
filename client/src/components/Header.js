import React from 'react';
import logo from '../logo.svg';
import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
        {/* Logo and Name */}
        <div className="logo-section">
        <img src={logo} alt="StudyBuddy Logo" className="App-logo" />
        </div>

        {/* Navigation */}
        <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Course</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        </nav>

        {/* Login Button */}
        <Button colorScheme="red">Login</Button>
    </header>
  );
}

export default Header;