const express = require('express');
const cors = require('cors');
const user = require('./routes/user')
require('./database'); // Import the database module

// Other imports and configurations

const app = express();
const PORT = 3002;

// Middleware and routes setup
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.use('/users', user)

// Start the server
app.listen(PORT, () => {
  console.log(`Server  is running on port ${PORT}`);
});
