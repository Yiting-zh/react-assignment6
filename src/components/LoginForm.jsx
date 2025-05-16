import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  function handleLogin() {

  const storedAccounts = JSON.parse(localStorage.getItem('users')) || [];
  const matchedAccount = storedAccounts.find(
    (user) => user.username === username && user.password === password
  );

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }


  if (!matchedAccount) {
    alert("Name or password is incorrect. Please try again.");
    setUsername('');
    setPassword('');
    return;
  }
  navigate('/gamepage');

  }


  return (
    <div>
    <h1>Log in</h1>
    <input 
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Name"
    />
  
  <input 
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    />
    
    <button onClick={handleLogin}>Log in</button>
    <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default LoginForm;