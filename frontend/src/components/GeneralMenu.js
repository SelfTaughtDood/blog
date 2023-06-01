import '../App.css';
import UserForm from './UserFormSection';
import { useState } from 'react';

const GeneralMenu = () => {
  const [ selected_Operation, set_Selected_Operation] = useState(null);

  const handleButtonClick = (operation) => {
    set_Selected_Operation(operation);
  };

  const handleGetUserList = () => {
    // Handle the logic for getting the user list
  };

  const handleUpdateUser = () => {
    // Handle the logic for updating a user
  };

  const handleDeleteUser = () => {
    // Handle the logic for deleting a user
  };

  return ( 
    <>
    <div className='button-container'>
      <button onClick={() => handleButtonClick('create')}>Create User</button>
      <button onClick={handleGetUserList}>Get User List</button>
        <button onClick={handleUpdateUser}>Update User</button>
        <button onClick={handleDeleteUser}>Delete User</button>
    </div>
    {selected_Operation === 'create' ? <UserForm /> : null}
    </>
   );
}
 
export default GeneralMenu;