import React, { useState } from 'react';
import { FaArrowLeft, FaTimes, FaMapMarkerAlt, FaCamera, FaFileAlt } from 'react-icons/fa';

const ConfirmationModal = ({ onBack, onClose }) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000070]">
      <div className="relative w-[547px] h-[858px] p-6 bg-white rounded-lg shadow-lg flex flex-col">
        <button
          className="absolute top-4 left-4 w-8 h-8 bg-[#DDDDDD] rounded-full flex items-center justify-center"
          onClick={onBack}
        >
          <FaArrowLeft className="text-[#4D516F] w-4 h-4" />
        </button>
        <button
          className="absolute top-4 right-4 w-8 h-8 bg-[#DDDDDD] rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          <FaTimes className="text-[#4D516F] w-4 h-4" />
        </button>
        <h1 className="text-xl font-bold mb-4 mt-7">Consulta médica con Hernan Velazco</h1>
        <div className="flex justify-between mb-4">
          <p className="mb-2">Especialidad: Cardiólogo</p>
          <p>Fecha: 16 de Agosto</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="mb-2">Doctor: Dr. Carlos Benitez</p>
          <p>Hora: 09:00 AM</p>
        </div>
        <h2 className="text-lg font-semibold mb-4">Tipo de consulta</h2>
        <div className="flex mb-6">
          {['Presencial', 'Mensaje', 'Llamada', 'Videoconferencia'].map((type, index) => (
            <button
              key={index}
              onClick={() => handleTypeClick(type)}
              className={`flex-1 h-[44px] rounded-md text-[#4D516F] mr-2 last:mr-0 ${
                selectedType === type
                  ? 'bg-[#CCF3FF] text-[#007CA0]'
                  : 'bg-white hover:bg-[#CCF3FF] hover:text-[#007CA0]'
              } border-none`}
            >
              {type}
            </button>
          ))}
        </div>
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <FaMapMarkerAlt className="mr-2 text-[#4D516F]" /> Ubicación
        </h2>
        <input
          type="text"
          placeholder="Dirección de la clínica"
          className="w-full h-[44px] border border-[#DDDDDD] rounded-md p-2 mb-6 focus:outline-none focus:border-[#007CA0]"
        />
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <FaCamera className="mr-2 text-[#4D516F]" /> Enlace de Google Meet
        </h2>
        <input
          type="text"
          placeholder="Añadir enlace de Google Meet"
          className="w-full h-[44px] border border-[#DDDDDD] rounded-md p-2 mb-6 focus:outline-none focus:border-[#007CA0]"
        />
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <FaFileAlt className="mr-2 text-[#4D516F]" /> Descripción
        </h2>
        <textarea
          placeholder="Comentarios adicionales"
          className="w-full h-[160px] border border-[#DDDDDD] rounded-md p-2 mb-6 focus:outline-none focus:border-[#007CA0]"
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-[#CCF3FF] text-[#007CA0] rounded-md hover:bg-[#B2E1F5] hover:text-[#005F80]"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-[#007CA0] text-[#CCF3FF] rounded-md hover:bg-[#005F80] hover:text-[#B2E1F5]"
            onClick={onClose}
          >
            Agendar cita
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;