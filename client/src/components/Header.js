import React from 'react';

import { Button } from "@chakra-ui/react";

function Header() {
  return (
    <header className="App-header">
        {/* Logo and Name */}
        <div className="logo-section">
        <img src="logo.svg" alt="StudyBuddy Logo" className="App-logo" />
        <h1>StudyBuddy</h1>
        </div>

        {/* Navigation */}
        <nav>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/course">Course</a></li>
            <li><a href="/profile">Profile</a></li>
        </ul>
        </nav>

        {/* Login Button */}
        <Button colorScheme="red">Login</Button>
    </header>
  );
}

export default Header;