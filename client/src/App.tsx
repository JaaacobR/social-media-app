import React from "react";
import { Routes, Route } from "react-router";
import { SignIn, Home } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
