import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
// import Footer from './components/Footer';

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        { <Body />/*
        <Footer /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
