import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AddChild from "./components/addChild/AddChild";
import Dose from "./components/dose/Dose";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

const children = [
  {
    id: 1,
    name: "Janusz",
  },
  {
    id: 2,
    name: "Karyna",
  },
  {
    id: 3,
    name: "Grażyna",
  },
];

function App() {
  const [activeChild, setActiveChild] = useState(1);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                children={children}
                activeChild={activeChild}
                setActiveChild={setActiveChild}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addchild" element={<AddChild />} />
          <Route
            path="/dose/:id"
            element={
              <Dose
                children={children}
                activeChild={activeChild}
                setActiveChild={setActiveChild}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;