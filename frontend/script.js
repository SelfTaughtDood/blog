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
      console.log('User created successfully:', data);
      // Perform any additional logic or UI updates as needed
    } else {
      console.error('Error creating user:', response.statusText);
      // Handle error case and display error message to the user
    }
  } catch (error) {
    console.error('Error creating user:', error);
    // Handle error case and display error message to the user
  }
});
