import * as React from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import RegistrationForm from "./pages/registration/RegistrationForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/id" element={<Hotel />} />
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<RegistrationForm/> }/> 
        <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
