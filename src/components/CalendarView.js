// src/components/CalendarView.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentForm from './AppointmentForm';

const CalendarView = () => {
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem('appointments')) || []);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({ patient: '', doctor: '', time: '' });

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const handleSave = () => {
    const newApp = {
      date: selectedDate.toDateString(),
      ...formData,
    };
    setAppointments([...appointments, newApp]);
    setFormData({ patient: '', doctor: '', time: '' });
  };

  const dayAppointments = (date) =>
    appointments.filter((a) => new Date(a.date).toDateString() === date.toDateString());

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const apps = dayAppointments(date);
      return apps.length > 0 ? (
        <ul className="tile-list">
          {apps.map((a, i) => (
            <li key={i} className="tile-item">{`${a.time} - ${a.patient}`}</li>
          ))}
        </ul>
      ) : null;
    }
  };

  return (
    <div className="calendar-view">
      
      <Calendar onClickDay={setSelectedDate} value={selectedDate} tileContent={tileContent} />

      <div className="selected-date-info" style={{ marginTop: '20px' }}>
        <h3>Appointments for {selectedDate.toDateString()}:</h3>
        {dayAppointments(selectedDate).length > 0 ? (
          <ul>
            {dayAppointments(selectedDate).map((a, i) => (
              <li key={i}>{`${a.time} - ${a.patient} with ${a.doctor}`}</li>
            ))}
          </ul>
        ) : (
          <p>No appointments on this date.</p>
        )}
      </div>

      <AppointmentForm formData={formData} setFormData={setFormData} onSave={handleSave} />
    </div>
  );
};

export default CalendarView;
