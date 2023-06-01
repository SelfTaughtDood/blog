import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import UserForm from './UserFormSection';

function UserListSection() {
  const [userList, setUserList] = useState([]);
  const [isUserListLoaded, setIsUserListLoaded] = useState(false);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    try {
      const response = await fetch('http://localhost:3002/users-get');

      if (response.ok) {
        const userList = await response.json();
        setUserList(userList);
        setIsUserListLoaded(true);
      } else {
        console.error('Error retrieving user list:', response.statusText);
      }
    } catch (error) {
      console.error('Error retrieving user list:', error);
    }
  };

  const handleGetUserList = () => {
    getUserList();
  };

  return (
    <section className="user-list-section">
      <h2>User List:</h2>
      {isUserListLoaded ? (
        <UserList userList={userList} />
      ) : (
        <p>Loading user list...</p>
      )}
      <button id="getUserListBtn" onClick={handleGetUserList}>
        Get User List
      </button>
      <UserForm />
      <div id="message"></div>
    </section>
  );
}

export default UserListSection;
