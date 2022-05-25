import React from "react";
import { Link } from "react-router-dom";
import ChildrenNav from "../childrenNav/ChildrenNav";
import DrugsFinder from "../drugsFinder/DrugsFinder";
import NavBar from "../navBar/NavBar";

import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className="home-card">
        <ChildrenNav />
        <DrugsFinder />
      </div>
    </>
  );
}

export default Home;