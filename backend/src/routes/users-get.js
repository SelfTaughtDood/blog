const { Router } = require('express')
const router = Router();
const User = require('../database/schemas/User')

router.get('/', (req, res) => {
  // Use the User model to find all users in the database
  User.find()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(error => {
    console.error('Error retrieving users:', error);
    res.sendStatus(500);
  });
})

module.exports = router