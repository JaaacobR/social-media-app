import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    const body = JSON.stringify({
      account: {
        email: "firstqw@example.com",
        hash_password: "khdsjgfsd",
      },
    });
    fetch("http://localhost:4000/api/accounts/create", {
      method: "POST",
      body: body,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleSignIn = () => {
    const body = JSON.stringify({
      email: "firstqw@example.com",
      hash_password: "khdsjgsd",
    });
    fetch("http://localhost:4000/api/accounts/sign_in", {
      method: "POST",
      body: body,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>sbdkflsd</button>
        <button onClick={handleSignIn}>Sign In</button>
      </header>
    </div>
  );
}

export default App;
