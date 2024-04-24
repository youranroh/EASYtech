const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8082;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Routes
const items = require('./routes/api/items');
app.use('/api/items', items);

// MongoDB Connection
const conn_str = 'mongodb+srv://youran:1111@cluster0.4w3xybo.mongodb.net/yourdatabase';

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connection Succeeded...');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => {
    console.error('Error in DB connection:', err);
  });
