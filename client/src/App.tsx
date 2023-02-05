import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { SignIn } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
