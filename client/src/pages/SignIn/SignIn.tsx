import React, { useState } from "react";
import "./SignIn.css";
import { useApi } from "hooks";
import { useNavigate } from "react-router-dom";
import e, { response } from "express";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<any>(undefined);
  const api = useApi();
  const navigate = useNavigate();

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailCHange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLogIn = async () => {
    const res = await api.logIn({ email, hash_password: password });
    res && navigate("/home");
  };

  const getBase64 = (file: File) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL: any = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleClick = async () => {
    if (!file) return;

    const fileResult = await getBase64(file);
    const body = JSON.stringify({ file: fileResult });
    fetch("http://localhost:4000/api/photo", {
      method: "POST",
      body,
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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
      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files ? e.target.files[0] : undefined)
        }
      />
      <button onClick={handleClick}>file</button>
    </div>
  );
};
