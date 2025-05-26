import React from "react";

export const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="appointment-card">
    <span>{icon} {title}</span>
    <span>{time}</span>
  </div>
);


