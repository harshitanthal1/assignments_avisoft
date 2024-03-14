import React, { useState } from 'react';

const UserData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', contactNo: '1234567890', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', contactNo: '9876543210', age: 25 },
  // Add more user data as needed
];

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Contact No:</strong> {user.contactNo}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
};

const App = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = () => {
    const foundUser = UserData.find(u => u.id === parseInt(userId));
    setUser(foundUser || null);
  };

  return (
    <div>
      <h1>User Search</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <label htmlFor="userId">Enter User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {user ? <UserDetail user={user} /> : <p>User not found</p>}
    </div>
  );
};

export default App;
