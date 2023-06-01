import React, { useState } from 'react';

function UserFormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      const response = await fetch('http://localhost:3002/users', {
        method: 'POST',
        body: JSON.stringify({ name, email }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // const data = await response.json();
        setMessage('User created successfully!');
        setName('');
        setEmail('');
        // Perform any additional logic or UI updates as needed
      } else {
        const errorMessage = await response.text();
        console.error('Error creating user:', response.statusText);
        setMessage(`Error: ${errorMessage}`);
        // Handle error case and display error message to the user
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setMessage('An error occurred. Please try again.');
      // Handle error case and display error message to the user
    }
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <p>Enter new user info:</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div id="message">{message}</div>
    </section>
  );
}

export default UserFormSection;
