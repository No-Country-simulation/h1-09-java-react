import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const PatientInfo = () => {
  const [activeTab, setActiveTab] = useState('Datos médicos');

  return (
    <div className="p-4 space-y-6 relative">
      <div className="flex space-x-4">
        <button
          className={`bg-transparent text-[#4D516F] py-2 px-4 rounded hover:bg-[#CCF3FF] hover:text-[#007CA0] ${activeTab === 'Datos médicos' ? 'bg-[#CCF3FF] text-[#007CA0]' : ''}`}
          onClick={() => setActiveTab('Datos médicos')}
        >
          Datos médicos
        </button>
        <button
          className={`bg-transparent text-[#4D516F] py-2 px-4 rounded hover:bg-[#CCF3FF] hover:text-[#007CA0] ${activeTab === 'Contacto' ? 'bg-[#CCF3FF] text-[#007CA0]' : ''}`}
          onClick={() => setActiveTab('Contacto')}
        >
          Contacto
        </button>
        <button
          className={`bg-transparent text-[#4D516F] py-2 px-4 rounded hover:bg-[#CCF3FF] hover:text-[#007CA0] ${activeTab === 'Prepaga' ? 'bg-[#CCF3FF] text-[#007CA0]' : ''}`}
          onClick={() => setActiveTab('Prepaga')}
        >
          Prepaga
        </button>
      </div>
      {activeTab === 'Datos médicos' && (
        <div className="relative">
          <div className="bg-white border border-gray-300 rounded-lg p-4 w-[564px] h-[108px]">
            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="flex flex-col justify-between h-full">
                <span>Edad: 37 años</span>
                <span>Género: Masculino</span>
              </div>
              <div className="flex flex-col justify-between h-full">
                <span>Peso: 80 kg</span>
                <span>Altura: 1,80 cm</span>
              </div>
              <div className="flex flex-col justify-between h-full">
                <span>Grupo Sanguíneo: A +</span>
                <span>Alergías: Sin registro</span>
              </div>
            </div>
            <button className="absolute top-1/2 transform -translate-y-1/2 ml-[600px] flex items-center space-x-2 bg-transparent text-[#4D516F] py-2 px-4 rounded hover:bg-[#CCF3FF] hover:text-[#007CA0]">
              <FaPencilAlt className="text-[#007CA0]" />
              <span className="text-[#007CA0]">Editar datos del médicos</span>
            </button>
          </div>
        </div>
      )}
      {activeTab === 'Contacto' && (
        <div className="relative">
          <div className="bg-white border border-gray-300 rounded-lg p-4 w-[564px] h-[394px]">
            <div className="space-y-4">
              <div className="mt-3">
                <h3 className="text-lg font-semibold mb-2">Contacto del Paciente</h3>
                <p className="mb-4">Teléfono: 11 - 22967736</p>
                <p className="mb-4">Correo: hernanvelazco@gmail.com</p>
                <p className="mb-4">Dirección: Calle Siempreviva 742, San Isidro, Buenos Aires</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contacto del Familiar</h3>
                <p className="mb-4">Teléfono: 11 - 33078847</p>
                <p className="mb-4">Relación: Madre</p>
              </div>
            </div>
            <button className="absolute top-1/2 transform -translate-y-1/2 ml-[600px] flex items-center space-x-2 bg-transparent text-[#007CA0] py-2 px-4 rounded hover:bg-[#CCF3FF] hover:text-[#007CA0]">
              <FaPencilAlt className="text-[#007CA0]" />
              <span className="text-[#007CA0]">Editar datos del médicos</span>
            </button>
          </div>
        </div>
      )}
      {activeTab === 'Prepaga' && (
        <div className="bg-white border border-gray-300 rounded-lg p-4 w-[688px] h-[241px] flex">
          <div className="w-[324px] h-[209px]">
            <img src="img/prepaga.png" alt="Imagen Prepaga" className="w-full h-full object-cover" />
          </div>
          <div className="ml-4 w-[295px] h-[160px] flex flex-col justify-between">
            <div className="mt-5">
              <p className="font-semibold mb-2">Nombre Prepaga: Omint</p>
              <p className="mb-3">Número de Afiliado: 1 7200875 55 23 7</p>
              <p className="mb-3">Plan: Global 4500</p>
              <p className="mb-3">Fecha de Vencimiento: 11 - 2027</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientInfo;