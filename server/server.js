const express = require('express');
const { Client } = require('pg');
const app = express();
const PORT = 5000;

const client = new Client({
  user: 'postgres',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Change to your PostgreSQL port if different
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('Connected to the database');

    // Define the SQL query
    const query = {
      text: 'INSERT INTO users(id, role, name, email) VALUES($1, $2, $3, $4)',
      values: [1, 'professor', 'Jaime', null]
    };

    return client.query(query);
  })
  .then((result) => {
    console.log('User created successfully');
  })
  .catch((error) => {
    console.error('Error creating user:', error);
  })
  .finally(() => {
    client.end();
  });

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
