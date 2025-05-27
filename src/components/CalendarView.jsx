import React from 'react';
import '../style/CalendarView.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h5>October 2021</h5>
        <div className="nav-arrows">
          <BsArrowLeft size={20} />
          <BsArrowRight size={20} />
        </div>
      </div>

      <div className="calendar-grid">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
          <div className={`day-column ${day === 'Tues' ? 'highlight-day' : ''}`} key={idx}>
            <div className="day-label">{day}</div>
            <div className="calendar-date">{25 + idx}</div>
            <div className="slots">
              {getSlots(day)}
            </div>
          </div>
        ))}
      </div>

      <div className="appointments">
        <div className="card dentist">
          <div className="dentist-title">
            <h4>Dentist </h4>
            <h4>🦷</h4>
          </div>
          <p>09:00 - 11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>

        <div className="card physio">
          <div className="dentist-title">
            <h4>Physiotherapy Appointment</h4>
            <h4> 💪</h4>
          </div>
          <p>11:00 - 12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>


      </div>
    </div>
  );
};

const getSlots = (day) => {
  const data = {
    Mon: ['10:00', '11:00'],
    Tues: ['08:00', '09:00', '10:00'],
    Wed: ['12:00', '13:00'],
    Thurs: ['10:00', '11:00'],
    Fri: ['14:00', '16:00'],
    Sat: ['12:00', '14:00', '15:00'],
    Sun: ['09:00', '10:00', '11:00'],
  };

  const highlighted = {
    Tues: ['09:00'],
    Thurs: ['11:00'],
    Sat: ['12:00'],
    Sun: ['09:00']
  };

  const slots = data[day] || [];
  const filledSlots = [...slots];

  while (filledSlots.length < 3) {
    filledSlots.push('–');
  }

  return filledSlots.map((time, i) => {
    const isHighlighted = highlighted[day]?.includes(time);
    return (
      <div className={`slot ${isHighlighted ? 'highlight-slot' : ''}`} key={i}>
        {time}
      </div>
    );
  });
};




