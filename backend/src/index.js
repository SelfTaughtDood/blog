const express = require('express'); //imports the express library
const cors = require('cors'); // imports the cors module
const user = require('./routes/user') //imports the users path from routes
const users_get = require('./routes/users-get') //imports the user path from routes
require('./database'); // Import the database module

// Other imports and configurations

const app = express(); // creates an instance of the express library
const PORT = 3002; //explicitly defines port

// Middleware and routes setup
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.use('/users', user)
app.use('/users-get', users_get)

// Start the server
app.listen(PORT, () => {
  console.log(`Server  is running on port ${PORT}`);
});