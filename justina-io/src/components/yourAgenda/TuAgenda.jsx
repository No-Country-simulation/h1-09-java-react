import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Appointment from './Appointment';

const TuAgenda = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[410px] h-[770px] bg-white border rounded-lg p-4">
        <h1 className="mb-4">Tu Agenda</h1>
        <div className="w-[380px] h-[320px] mb-4 flex justify-center">
          <Calendar />
        </div>
        <div className="w-[380px] h-[365px] overflow-y-auto">
          <Appointment 
            time="8:00 am"
            title="Consulta"
            duration="8:00 - 8:30"
            person="Mateo Fernandez"
            status="Confirmado"
          />
          <Appointment 
            time="8:30 am"
            title="Seguimiento"
            duration="8:30 - 9:00"
            person="Ana Rodriguez"
            status="Confirmado"
          />
          <Appointment 
            time="9:00 am"
            title="Seguimiento"
            duration="9:00 - 9:30"
            person="Hernan Velazco"
            status="Confirmado"
          />
        </div>
      </div>
    </div>
  );
};

export default TuAgenda;