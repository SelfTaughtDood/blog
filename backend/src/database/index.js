const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongodb27:{mongodb27!}@first-survey.k0ktgdy.mongodb.net/test')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  }); 