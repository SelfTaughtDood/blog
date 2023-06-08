import '../../styles/media-queries.css';
import '../../App.css'
import Form from '../Create/AddUserForm'
// import Form from '../Create/AddUserForm'

const FormMenu = ({ onBack }) => {
  return (
    <>
      <div className='form-container'>
      <button onClick={onBack}>Back</button>
      <p>create user</p>
      </div>
    </>
  );
};

 
export default FormMenu;