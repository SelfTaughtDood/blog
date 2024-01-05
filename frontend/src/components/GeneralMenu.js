import '../App.css';
// import UserForm from './Create/AddUserForm';
import { useState } from 'react';
import '../styles/media-queries.css'
import '../components/GeneralMenu.css'

// imported components
import FormScreen from '../components/Create/AddUserMenu'
import UpdateScreen from '../components/Update/UpdateMenu'
import UserListMenu from '../components/Read/GetUsersScreen'
import DeleteMenu from '../components/Delete/DeleteUserMenu'


const GeneralMenu = () => {
    
  // initializes the state for imported components
  const [showFormMenu, setShowFormMenu] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showUpdateMenu, setshowUpdateMenu] = useState(false);
  const [showDeleteMenu, setShowDeleteMenu] = useState(false);
  const [showButtonContainer, setShowButtonContainer] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
    

  // onClick events

  // when clicking on CREATE USER
  const handleAddUser = () => {
    setShowFormMenu(!showFormMenu);
    setShowButtonContainer(false);
  };

  // when clicking on GET USER
  const handleGetUserList = () => {
    // Handle the logic for getting the user list
    setShowList(!showList);
    setShowButtonContainer(false);
  };

  // when clicking on UPDATE USER
  const handleUpdateUser = () => {
    // Handle the logic for updating a user
    setshowUpdateMenu(!showUpdateMenu)
    setShowButtonContainer(false);
  };

  // when clicking on DELETE USER
  const handleDeleteUser = () => {
    // Handle the logic for deleting a user
    setShowDeleteMenu(!showDeleteMenu)
    setShowButtonContainer(false);
  };

  // when clicking on BACK BUTTON
  const handleGoBack = () => {
    setShowFormMenu(false);
    setshowUpdateMenu(false);
    setShowList(false);
    setShowDeleteMenu(false);
    setShowButtonContainer(true);
    setSlideOut(true); // Add this line to set the slide-out animation
  };

  return ( 
    <>
    {showButtonContainer && (
        <div className={`form-container ${slideOut ? 'slide-out' : 'slide-in'}`}>
          <button onClick={handleAddUser}>Create User</button>
          <button onClick={handleGetUserList}>Get User</button>
          <button onClick={handleUpdateUser}>Update User</button>
          <button onClick={handleDeleteUser}>Delete User</button>
        </div>
      )}
      {showFormMenu && (
        <div className="form-container slide-in">
          <FormScreen onBack={handleGoBack} />
        </div>
      )}
      {showUpdateMenu && (
        <div className="form-container slide-in">
          <UpdateScreen onBack={handleGoBack} />
        </div>
      )}
      {showList && (
        <div className="form-container slide-in">
          <UserListMenu onBack={handleGoBack} />
        </div>
      )}
      {showDeleteMenu && (
        <div className="form-container slide-in">
          <DeleteMenu onBack={handleGoBack} />
        </div>
      )}
    </>
   );
}
 
export default GeneralMenu;