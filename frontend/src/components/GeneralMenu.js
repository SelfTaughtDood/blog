import '../App.css';
// import UserForm from './Create/AddUserForm';
import { useState } from 'react';
import '../styles/media-queries.css'
import '../components/GeneralMenu.css'
import FormScreen from '../components/Create/AddUserMenu'
import UpdateScreen from '../components/Update/UpdateMenu'
import UserListMenu from '../components/Read/GetUsersScreen'
import DeleteMenu from '../components/Delete/DeleteUserMenu'


const GeneralMenu = () => {
    
    const [showFormMenu, setShowFormMenu] = useState(false);
    const [showList, setShowList] = useState(false);
    const [showUpdateMenu, setshowUpdateMenu] = useState(false);
    const [showDeleteMenu, setShowDeleteMenu] = useState(false);
    

  const handleAddUser = () => {
    setShowFormMenu(!showFormMenu);
  };

  const handleGetUserList = () => {
    // Handle the logic for getting the user list
    setShowList(!showList);
  };

  const handleUpdateUser = () => {
    // Handle the logic for updating a user
    setshowUpdateMenu(!showUpdateMenu)
  };

  const handleDeleteUser = () => {
    // Handle the logic for deleting a user
    setShowDeleteMenu(!showDeleteMenu)
  };

  const handleGoBack = () => {
    setShowFormMenu(false);
    setshowUpdateMenu(false);
    setShowList(false);
    setShowDeleteMenu(false);
  };

  return ( 
    <>
    <div className='button-container'>
      {/* Create User */}
      <button onClick={handleAddUser}>
        Create User
      </button>

      {/* Show User List */}
      <button onClick={handleGetUserList}>Get User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleDeleteUser}>Delete User</button>
      {showFormMenu &&
          <div className="form-container slide-in">
            <FormScreen onBack={handleGoBack}/>
          </div>
      }
      {showUpdateMenu && 
          <div className="form-container slide-in">
            <UpdateScreen onBack={handleGoBack}/>
        </div>
        }
      {showList &&
        <div className="form-container slide-in">
          <UserListMenu onBack={handleGoBack}/>
        </div>
      }
      {showDeleteMenu &&
        <div className="form-container slide-in">
          <DeleteMenu onBack={handleGoBack}/>
      </div>
      }
    </div>
    </>
   );
}
 
export default GeneralMenu;