import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// All components are imported here
import Theme from "./components/Theme";
import Header from './components/Header';
import Footer from './components/Footer';

// All pages are imported here
import Home from './pages/Home';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <ChakraProvider theme={Theme}>
        <div className="App">
          <div className='header-body'>
            <Header />
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer /> 
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
