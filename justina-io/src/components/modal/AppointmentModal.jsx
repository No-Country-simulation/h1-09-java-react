import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaTimes } from 'react-icons/fa';

const AppointmentModal = ({ onNext, onClose }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
  ];

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-[#00000070]">
      <div className="relative w-[547px] m-4 p-6 bg-white rounded-lg shadow-lg flex flex-col">
        <button
          className="absolute top-4 right-4 w-8 h-8 bg-[#EFF4FB] rounded-full flex items-center justify-center hover:bg-[#dce3f1]"
          onClick={onClose}
        >
          <FaTimes className="text-[#4D516F] w-4 h-4" />
        </button>
        <h1 className="mb-4 text-xl font-bold">
          Consulta médica con Hernan Velazco
        </h1>
        <p className="mb-2">Especialidad: Cardiólogo</p>
        <p className="mb-4">Doctor: Dr. Carlos Benitez</p>
        <h2 className="mb-4 text-lg font-semibold">Seleccione fecha</h2>
        <div className="flex justify-center mb-6">
          <div className="w-[398px] h-[350px]">
            <Calendar />
          </div>
        </div>
        <h2 className="mb-4 text-lg font-semibold">Seleccione hora</h2>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {times.map((time, index) => (
            <button
              key={index}
              onClick={() => handleTimeClick(time)}
              className={`w-[101px] h-[44px] rounded-md border border-[#DDDDDD] ${
                selectedTime === time
                  ? 'bg-[#CCF3FF] text-[#007CA0]'
                  : 'bg-white text-[#4D516F] hover:bg-[#CCF3FF] hover:text-[#007CA0]'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-auto space-x-2">
          <button
            className="px-4 py-2 bg-[#CCF3FF] text-[#007CA0] rounded-md hover:bg-[#B2E1F5] hover:text-[#005F80]"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-[#007CA0] text-[#CCF3FF] rounded-md hover:bg-[#005F80] hover:text-[#B2E1F5]"
            onClick={onNext}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
