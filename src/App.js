import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddChild from "./components/addChild/AddChild";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addchild" element={<AddChild />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;