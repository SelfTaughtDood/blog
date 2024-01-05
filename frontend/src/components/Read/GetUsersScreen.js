import '../../styles/media-queries.css';
import '../../App.css'
import UserList from './GetUsers'
// import Form from '../Create/AddUserForm'

const UserListMenu = ({ onBack }) => {
  return (
    <>
      <div className='form-container'>
      <button onClick={onBack}>Back</button>
      <UserList />
      </div>
    </>
  );
};

 
export default UserListMenu;