const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Health check (no DB)
app.get('/health', (req, res) => {
  res.json({ status: 'OK', time: new Date().toISOString() });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
