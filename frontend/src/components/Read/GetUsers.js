import React, { useState, useEffect } from 'react';


const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch('http://localhost:3002/users-get');

        if (response.ok) {
          const data = await response.json();
          setUserList(data);
        } else {
          console.error('Error retrieving user list:', response.statusText);
        }
      } catch (error) {
        console.error('Error retrieving user list:', error);
      }
    };

    fetchUserList();
  }, []);

  return (
    <div id="userList">
      {userList.map((user) => (
        <div key={user.id} className="user">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};


export default UserList;