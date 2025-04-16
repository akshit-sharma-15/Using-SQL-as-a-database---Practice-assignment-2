// Load environment variables
require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const app = express();

// Load port from environment
const PORT = process.env.PORT || 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// Basic route
app.get('/', (req, res) => {
  res.send('Server is running with MySQL connection!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
