const { Router } = require('express');
const router = Router();
const User = require('../database/schemas/User');

// Update a user by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    // Find the user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's name and email
    user.name = name;
    user.email = email;

    // Save the updated user
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.sendStatus(500);
  }
});

module.exports = router;
