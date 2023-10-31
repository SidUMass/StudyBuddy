import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

//   this will send a message to the user
  const [message, setMessage] = useState(''); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  const handleRegistration = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear any previous messages
    
    try {
      const response = await fetch('/api/register', {
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
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegistration}>
        <div className="input-group">
          <label>Username:</label>
          <input 
            type="text" 
            name="username"
            placeholder="Username" 
            value={formData.username} 
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email} 
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password} 
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignUp;