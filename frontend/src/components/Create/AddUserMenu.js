import '../../styles/media-queries.css';
import '../../App.css'
import Form from '../Create/AddUserForm'
// import Form from '../Create/AddUserForm'

const FormScreen = ({ onBack }) => {
  return (
    <>
      <div className='form-container'>
        
        <button className='back-button' onClick={onBack}>Back</button>
        <p>create user</p>
        <Form />
        
      </div>
    </>
  );
};

 
export default FormScreen;