import './App.css';
import React from 'react';

// All components are imported here
import Theme from "./components/Theme";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <div className="App">
        <Header />
         <Body />
        <Footer /> 
      </div>
    </ChakraProvider>
  );
}

export default App;
