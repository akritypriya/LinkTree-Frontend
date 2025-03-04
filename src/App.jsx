import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";


const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
