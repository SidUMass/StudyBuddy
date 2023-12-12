// Login.js
import React, { useState } from 'react';
import { Box, Input, Button, FormLabel, FormControl, Text } from "@chakra-ui/react";
function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setMessage("Login successful");
      } else {
        setMessage("Error logging in: " + data.message);
      }
    } catch (error) {
      setMessage("There was an error logging in.");
    }
  }
  return (
    <Box className="login-container">
      <Box width="50%" marginLeft={"300px"}>
        <Text fontSize="2xl" mb={4}>Login</Text>
        <form onSubmit={handleLogin}>
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
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">Login</Button>
        </form>
        {message && <Text mt={4}>{message}</Text>}
      </Box>
    </Box>
  );
}
export default Login;









