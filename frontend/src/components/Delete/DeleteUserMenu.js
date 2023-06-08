import '../../styles/media-queries.css';
import '../../App.css'
// import Form from '../Create/AddUserForm'

const DeleteMenu = ({ onBack }) => {
  return (
    <>
      <div className='form-container'>
      <button onClick={onBack}>Back</button>
      <p>delete user</p>
      </div>
    </>
  );
};

 
export default DeleteMenu;