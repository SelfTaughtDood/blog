const userListContainer = document.getElementById('userList');
const getUserListBtn = document.getElementById('getUserListBtn');

getUserListBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:3002/users-get');

    if (response.ok) {
      const userList = await response.json();
      displayUserList(userList);
    } else {
      console.error('Error retrieving user list:', response.statusText);
    }
  } catch (error) {
    console.error('Error retrieving user list:', error);
  }
});

function displayUserList(userList) {
  userListContainer.innerHTML = ''; // Clear previous content

  userList.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    const nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${user.name}`;

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ${user.email}`;

    userDiv.appendChild(nameElement);
    userDiv.appendChild(emailElement);

    userListContainer.appendChild(userDiv);
  });
}
