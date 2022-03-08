import React from 'react'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App