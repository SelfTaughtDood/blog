import React, { useState, useEffect } from 'react';


const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [filteredUserList, setFilteredUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch('http://localhost:3002/users-get');

        if (response.ok) {
          const data = await response.json();
          setUserList(data);
          setFilteredUserList(data);
        } else {
          console.error('Error retrieving user list:', response.statusText);
        }
      } catch (error) {
        console.error('Error retrieving user list:', error);
      }
    };

    fetchUserList();
  }, []);

  // Filter users based on a search query
  // Filter users based on a search query
  const filterUsers = (query) => {
    const filteredUsers = userList.filter((user) =>
      user.name && user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUserList(filteredUsers);
    setCurrentPage(1);
  };

  // Paginate users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUserList.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="userList">
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => filterUsers(e.target.value)}
      />
      {currentUsers.map((user) => (
        <div key={user.id} className="user">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredUserList.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ usersPerPage, totalUsers, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default UserList;