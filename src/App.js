import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  const getAlienProfile = (username) => {
    // Robohash API endpoint for colorful alien avatars
    const avatarAPI = `https://robohash.org/${username}.png?set=set3`;

    return avatarAPI;
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "whitesmoke" }}>Dummy data</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={getAlienProfile(user.username)}
                  alt="Profile"
                  width="50"
                  height="50"
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
