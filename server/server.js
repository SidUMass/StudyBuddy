
const express = require('express');
const bcrypt = require('bcrypt'); 
// using bcrypt for now to hash the user's password
const pgp = require('pg-promise')();
// usin g pg promise for postgres here

const app = express();
const PORT = 5000;

// sanjana, can you add credentials here before using it?
// also, use this query to create the users table for now:

// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   username VARCHAR(255) UNIQUE NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   password VARCHAR(255) NOT NULL
// );

const db = pgp('postgres://username:password@localhost:5432/your_database_name');
app.use(express.json()); // Middleware for parsing JSON data from the request body

app.post('/api/register', async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.json({ success: false, message: 'Please provide all required fields.' });
  }
  try {
    const userExists = await db.oneOrNone('SELECT id FROM users WHERE username = $1', [username]);
    if (userExists) {
      return res.json({ success: false, message: 'Username already exists.' });
    }
    // apparently this stores the password with an encryption, thought it was useful so i added it here.
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.none('INSERT INTO users(username, email, password) VALUES($1, $2, $3)', [username, email, hashedPassword]);
    res.json({ success: true, message: 'Registration successful.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.json({ success: false, message: 'There was an error during registration.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// app.get('/', (req, res) => {
//   res.send('Hello from the server!');
// });

