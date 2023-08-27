import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import SignUp from "./SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
