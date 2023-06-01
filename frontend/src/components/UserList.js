import React, { useEffect, useState } from 'react';

function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    try {
      const response = await fetch('http://localhost:3002/users-get');

      if (response.ok) {
        const userList = await response.json();
        setUserList(userList);
      } else {
        console.error('Error retrieving user list:', response.statusText);
      }
    } catch (error) {
      console.error('Error retrieving user list:', error);
    }
  };

  const displayUserList = () => {
    return userList.map((user, index) => (
      <div className="user" key={index}>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    ));
  };

  return (
    <div id="userList">{displayUserList()}</div>
  );
}

export default UserList;
