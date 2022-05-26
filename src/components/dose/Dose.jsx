import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CalendarButton from "../calendarButton/CalendarButton";
import ChildrenNav from "../childrenNav/ChildrenNav";
import DrugsFilter from "../drugsFilter/DrugsFilter";
import NavBar from "../navBar/NavBar";
import TimeLine from "../timeline/TimeLine";

import "./Dose.css";

const timelineData = [
  {
    time: new Date(),
    drugName: "Ibum",
    dosage: "5ml",
    temperature: undefined,
    symptoms: [],
    checked: false,
    id: 1,
  },
  {
    time: new Date(),
    drugName: "Paracetamol",
    dosage: "5ml",
    temperature: undefined,
    symptoms: [],
    checked: false,
    id: 2,
  },
  {
    time: new Date(),
    drugName: "Cetamol",
    dosage: "5ml",
    temperature: undefined,
    symptoms: [],
    checked: false,
    id: 3,
  },
  {
    time: new Date(),
    drugName: "Ibum",
    dosage: "10ml",
    temperature: undefined,
    symptoms: [],
    checked: false,
    id: 4,
  },
  {
    time: new Date(),
    drugName: "Cetamol",
    dosage: "10ml",
    temperature: undefined,
    symptoms: [],
    checked: false,
    id: 5,
  },
];

function Dose({ children, activeChild, setActiveChild }) {
  const [currentActiveDate, setCurrentActiveDate] = useState(new Date());

  const location = useLocation();

  //   const [drugs, setDrugs] = useState([location.state.drug]);
  const [drugs] = useState(["Ibum", "Paracetamol", "Cetamol"]);
  const [activeDrugs, setActiveDrugs] = useState(drugs);

  const [calendar, setCalendar] = useState(
    [...Array(7)].map(
      (item, idx) => new Date(new Date().setDate(new Date().getDate() + idx))
    )
  );

  return (
    <>
      <NavBar />
      <div className="home-card">
        <ChildrenNav
          children={children.filter((child) => child.id === activeChild)}
          activeChild={activeChild}
          setActiveChild={setActiveChild}
        />
        <div className="calendar-mask">
          <div className="calendar">
            {calendar.map((date) => (
              <CalendarButton
                key={date.getDate()}
                active={currentActiveDate.getDate() === date.getDate()}
                date={date}
                setCurrentActiveDate={setCurrentActiveDate}
              />
            ))}
          </div>
        </div>
        <DrugsFilter
          drugs={drugs}
          setActiveDrugs={setActiveDrugs}
          activeDrugs={activeDrugs}
        />
        <TimeLine timelineData={timelineData} activeDrugs={activeDrugs} />
      </div>
    </>
  );
}

export default Dose;