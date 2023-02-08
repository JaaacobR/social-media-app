import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { SignIn, Home } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
