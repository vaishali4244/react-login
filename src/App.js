import "./App.css";
import Login from "./screens/login";
import Screen from "./screens/screen";
import { Routes, Route } from "react-router-dom";
import Signup from "./screens/signup";
import Dashboard from "./screens/dashboard";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Screen />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    
  );
}

export default App;


