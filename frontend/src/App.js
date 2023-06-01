import React from 'react';
import Header from './components/Header';
// import FormSection from './components/UserList';
// import UserFormSection from './components/UserFormSection';
// import UserListSection from './components/UserListSection';
import GeneralMenu from './components/GeneralMenu'
import './App.css'


function App() {
  return (
    <div className="grid-container">
      <Header />
      <GeneralMenu />
    </div>
  );
}

export default App;
