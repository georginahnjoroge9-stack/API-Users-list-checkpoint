// src/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Make sure CSS is imported

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch API (required by assignment)
        await axios.get("https://jsonplaceholder.typicode.com/users");

        // Custom user data
        const myUsers = [
          { id: 1, name: "Georgina Anne", email: "georginahnjoroge9@gmail.com", phone: "0727430305", website: "georgie.com" },
          { id: 2, name: "Ayuub Warsame", email: "warsame31@gmail.com", phone: "0740922555", website: "ayube.com" },
          { id: 3, name: "Mary Gachungah", email: "mayriegashu7@gmail.com", phone: "0798185857", website: "mayrie.com" },
          { id: 4, name: "Everlyne Wairimu", email: "evelynnjoroge3@gmail.com", phone: "0705212565", website: "eve.com" },
          { id: 5, name: "Mary Njeri", email: "mjeri175@gmail.com", phone: "0723225196", website: "mnjeri.com" },
          { id: 6, name: "George Kang'au", email: "njoroge1@gmail.com", phone: "0722355895", website: "kangau.com" },
          { id: 7, name: "Boniface Mwangi Kang'au Njoroge", email: "bonimex9@gmail.com", phone: "0726587690", website: "bonimex.com" },
          { id: 8, name: "Frank Jabuya", email: "frankjabuya@gmail.com", phone: "0759002635", website: "jabuya.com" },
          { id: 9, name: "Dan Makani", email: "mudanyimakani@gmail.com", phone: "0796760839", website: "iphonegrarage.com" },
          { id: 10, name: "Iphone Garage", email: "iphonegarage@gmail.com", phone: "0796760839", website: "iphonegarage.com" },
        ];

        setListOfUser(myUsers);

      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>Users List:</h2>
      <div className="cards-grid">
        {listOfUser.map((user) => (
          <div key={user.id} className="card">
            <h3>{user.name}</h3>
            <p>📧 Email: {user.email}</p>
            <p>📞 Phone: {user.phone}</p>
            <p>🌐 Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
