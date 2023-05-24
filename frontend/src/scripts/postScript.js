const messageContainer = document.getElementById('message');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');

document.getElementById('userForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form submission

  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch('http://localhost:3002/users', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      messageContainer.textContent = 'User created successfully!'
      console.log('User created successfully:', data);
      nameInput.value = ''; // Clear the name input field
      emailInput.value = ''; // Clear the email input field
      // Perform any additional logic or UI updates as needed
    } else {
      console.error('Error creating user:', response.statusText);
      messageContainer.textContent = `Error: ${errorMessage}`
      // Handle error case and display error message to the user
    }
  } catch (error) {
    console.error('Error creating user:', error);
    messageContainer.textContent = 'An error occurred. Please try again.'
    // Handle error case and display error message to the user
  }
});