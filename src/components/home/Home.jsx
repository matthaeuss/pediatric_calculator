import React from "react";
import ChildrenNav from "../childrenNav/ChildrenNav";
import DrugsFinder from "../drugsFinder/DrugsFinder";
import NavBar from "../navBar/NavBar";

import "./Home.css";

function Home({ children, activeChild, setActiveChild }) {
  return (
    <>
      <NavBar />
      <div className="home-card">
        <ChildrenNav
          children={children}
          activeChild={activeChild}
          setActiveChild={setActiveChild}
          showUI={true}
        />
        <DrugsFinder activeChild={activeChild} />
      </div>
    </>
  );
}

export default Home;