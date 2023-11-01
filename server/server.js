
const express = require('express');
const bcrypt = require('bcrypt'); 
const { Pool } = require('pg');

const app = express();
const PORT = 5000;

// Replace the following credentials with your own
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432,
});

app.use(express.json());

app.post('/api/register', async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.json({ success: false, message: 'Please provide all required fields.' });
  }
  try {
    const userExists = await pool.query('SELECT id FROM users WHERE username = $1', [username]);
    if (userExists.rows.length) {
      return res.json({ success: false, message: 'Username already exists.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users(username, email, password) VALUES($1, $2, $3)', [username, email, hashedPassword]);
    res.json({ success: true, message: 'Registration successful.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.json({ success: false, message: 'There was an error during registration.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
