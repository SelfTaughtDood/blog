import '../../styles/media-queries.css';
import '../../App.css'
// import Form from '../Create/AddUserForm'

const UpdateMenu = ({ onBack }) => {
  return (
    <>
      <div className='form-container'>
      <button onClick={onBack}>Back</button>
      <p>update user</p>
      </div>
    </>
  );
};

 
export default UpdateMenu;