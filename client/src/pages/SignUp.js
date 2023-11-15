import React, { useState } from 'react';

import { Box, Input, Button, FormLabel, FormControl, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  // this will send a message to the user
  const [message, setMessage] = useState(''); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  const handleRegistration = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages
    
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Registration successful");
      } else {
        setMessage("Error registering: " + data.message);
      }
    } catch (error) {
      setMessage("There was an error registering the user.");
    }
  }

  return (
    <Box className="signup-container">
      <Box width="50%" marginLeft={"300px"}>
        <Text fontSize="5xl" mb={4} marginLeft={"140px"}>Create Account</Text>
        <form onSubmit={handleRegistration}>
          <FormControl className="input-group" mb={4}>
            <FormLabel>Username:</FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </FormControl>
          
          <FormControl className="input-group" mb={4}>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          
          <FormControl className="input-group" mb={4}>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>
          
          <Button type="submit" bg="#E66F7B" color ="white" width="100%"marginBottom={"50px"}>Register</Button>
        </form>
        <Text marginLeft={"170px"}fontSize="2xl" mb={4}>Already have an Account?</Text>
        <Link to="/login">
          <Button type="login" colorScheme=" blue" color ="white" width="100%">Login</Button>
        </Link>

        {message && <Text mt={4}>{message}</Text>}
      </Box>
    </Box>
  );
}

export default SignUp;