import '../../styles/media-queries.css';
import '../../App.css'
// import Form from '../Create/AddUserForm'

const UserListMenu = ({ onBack }) => {
  return (
    <>
      <div className='form-container'>
      <button onClick={onBack}>Back</button>
      <p>get user</p>
      </div>
    </>
  );
};

 
export default UserListMenu;