import React from 'react';

const UpdateUser = ({ onBack }) => {
  const handleSubmit = () => {
    // Handle the form submission logic
  };

  return (
    <div className="update-user">
      <h2>Update User</h2>
      {/* Update User form */}
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Submit and Back buttons */}
        <div className="form-buttons">
          <button type="submit">Update</button>
          <button onClick={onBack}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
