import React from "react";
import "../style/UpcomingSchedule.css";

const SimpleAppointmentCard = ({ title, time, emoji }) => (
  <div className="appointment-card">
    <div className="appointment-card-title">
      <h4>{title} </h4>
      <span>{emoji}</span>
    </div>
    <p>{time}</p>
  </div>
);

export const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>

      <div className="day-section">
        <p className="day-label">On Thursday</p>
        <div className="appointments-row">
          <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" emoji="💉" />
          <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" emoji="👁️" />
        </div>
      </div>

      <div className="day-section">
        <p className="day-label">On Saturday</p>
        <div className="appointments-row">
          <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" emoji="❤️" />
          <SimpleAppointmentCard title="Neurologist" time="16:00 PM" emoji="🧑‍⚕️" />
        </div>
      </div>
    </div>
  );
};


