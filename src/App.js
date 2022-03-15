import React from 'react'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Login from './pages/Login/Login';
import { useContext } from 'react';
import { AuthContext } from "./authContext/AuthContext";


const App = () => {
  const { user } = useContext(AuthContext)
  console.log(user);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App