import React, { useState } from "react";


function Registeration() {
  const[username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handinregister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return     
    }

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.some((user) => user.username === username);
    if (userExists) {
      alert("Username already exits. Please enter a different name.")
      return
    }

    const newUser = {username, password};
    existingUsers.push(newUser); 

    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful!");
    setUsername(""); 
    setPassword(""); 
  };


  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handinregister}>
        <div>
          <label htmlFor="username">Name:</label>
          <input 
          type="text" 
          id="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
  
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
  
          <button onClick={handinregister}>Register</button>
        </div>
      </form>
    </div>
  )

}

export default Registeration;



