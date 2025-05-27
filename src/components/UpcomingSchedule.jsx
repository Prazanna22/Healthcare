import React from "react";
import "../style/UpcomingSchedule.css";
import {upcomingAppointments} from "../Data/UpcomingAppointments.jsx";

const SimpleAppointmentCard = ({ title, time, emoji }) => (
  <div className="appointment-card">
    <div className="appointment-card-title">
      <h4>{title}</h4>
      <span>{emoji}</span>
    </div>
    <p>{time}</p>
  </div>
);

export const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((section, idx) => (
        <div className="day-section" key={idx}>
          <p className="day-label">On {section.day}</p>
          <div className="appointments-row">
            {section.items.map((appt, index) => (
              <SimpleAppointmentCard key={index} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
