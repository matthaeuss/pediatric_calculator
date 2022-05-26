import React from "react";

import "./CalendarButton.css";

function CalendarButton({ active, date, setCurrentActiveDate }) {
  let weekday = ["Ndz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"][date.getDay()];

  return (
    <div
      className={active ? "calendar-day active" : "calendar-day"}
      onClick={() => setCurrentActiveDate(date)}
    >
      <div>{date.getDate()}</div>
      <div>{weekday}</div>
    </div>
  );
}

export default CalendarButton;