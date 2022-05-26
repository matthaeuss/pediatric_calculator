import React from "react";
import "./TimeLine.css";

function TimeLine({ timelineData, activeDrugs }) {
  return (
    <>
      <div className="timeline-header">
        <span>Godzina </span>
        <span>Nazwa leku </span>
        <span>Dawka </span>
        <span>Temperatura </span>
        <span>Objawy </span>
        <span></span>
      </div>
      {timelineData
        .filter((item) => activeDrugs.includes(item.drugName))
        .map(
          ({ time, drugName, dosage, temperature, symptoms, checked, id }) => (
            <div key={id} className="timeline-line">
              <span>
                {time.getHours()}:{time.getMinutes()}
              </span>
              <span> {drugName} </span>
              <span>{dosage} </span>
              <span>{temperature} </span>
              <span>{symptoms} </span>
              <span>{checked} </span>
            </div>
          )
        )}
    </>
  );
}

export default TimeLine;