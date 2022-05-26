import React from "react";

import "./DrugsFilter.css";

function DrugsFilter({ drugs, setActiveDrugs, activeDrugs }) {
  function handleDrugFilter(drug) {
    setActiveDrugs((prevState) =>
      prevState.includes(drug)
        ? prevState.filter((item) => item !== drug)
        : [...prevState, drug]
    );
  }

  return (
    <>
      {drugs.map((drug) => (
        <button
          className={activeDrugs.includes(drug) ? "filter-drug-active" : ""}
          key={drug}
          onClick={() => handleDrugFilter(drug)}
        >
          {drug}
        </button>
      ))}
    </>
  );
}

export default DrugsFilter;