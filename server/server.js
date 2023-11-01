
const express = require('express');
const bcrypt = require('bcrypt'); 
const { Pool } = require('pg');

const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors());

// Replace the following credentials with your own
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Preliminary',
  password: 'Ihtirms#123',
  port: 5432,
});

pool.connect(err => {
  if (err) {
      console.error('Error connecting to the database:', err);
  } else {
      console.log('Connected to the database.');
  }
});

app.use(express.json());

app.get('/api/list-tables', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
    `);
    const tableNames = result.rows.map(row => row.table_name);
    console.log('Tables:', tableNames);
    res.json({ success: true, tables: tableNames });
  } catch (error) {
    console.error('Error fetching tables:', error);
    res.json({ success: false, message: 'There was an error fetching the table names.' });
  }
});

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
    console.error('Error type:', error.constructor.name); // Prints the error type
    console.error('Error message:', error.message); // Prints the error message
    res.json({ success: false, message: 'There was an error during registration. ' + error.message });
  /*catch (error) {
    console.error('Error registering user:', error);
    res.json({ success: false, message: 'There was an error during registration.' });*/
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req,res) => {
  res.send('Connected to server');
});
