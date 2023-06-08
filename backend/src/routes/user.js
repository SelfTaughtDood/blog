const { Router } = require('express');
const router = Router();
const User = require('../database/schemas/User')

router.post('/', (req, res) => {
  const { name, email } = req.body;

  // Create a new user instance with the received data
  const newUser = new User({ name, email });

  // Save the user to the database
  newUser.save()
    .then(savedUser => {
      res.status(201).json(savedUser);
    })
    .catch(error => {
      console.error('Error creating user:', error);
      res.sendStatus(500);
    });
});

module.exports = router;