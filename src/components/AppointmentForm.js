// src/components/AppointmentForm.js
import React from 'react';
import { patients, doctors } from '../data/staticData';

const AppointmentForm = ({ formData, setFormData, onSave }) => (
  <div className="appointment-form">
    <h3>Add Appointment</h3>

    <label>Patient:</label>
    <select
      value={formData.patient}
      onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
    >
      <option value="">Select Patient</option>
      {patients.map((p, i) => (
        <option key={i} value={p}>{p}</option>
      ))}
    </select>

    <label>Doctor:</label>
    <select
      value={formData.doctor}
      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
    >
      <option value="">Select Doctor</option>
      {doctors.map((d, i) => (
        <option key={i} value={d}>{d}</option>
      ))}
    </select>

    <label>Time:</label>
    <input
      type="time"
      value={formData.time}
      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
    />

    <button onClick={onSave}>Save</button>
  </div>
);

export default AppointmentForm;
