import React, { useState } from "react";
import "./SignIn.css";
import { useApi } from "hooks";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const api = useApi();

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailCHange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLogIn = async () => {
    await api.logIn({ email, hash_password: password });
  };
  return (
    <div className="main">
      <section className="loginContainer">
        <h2>Welcome</h2>
        <section id="form">
          <label>
            email:{" "}
            <input type="email" value={email} onChange={handleEmailCHange} />
          </label>
          <label>
            password:{" "}
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button onClick={handleLogIn}>Log In</button>
        </section>
      </section>
    </div>
  );
};
