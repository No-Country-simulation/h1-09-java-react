import React, { useState } from 'react';
import Card from './Card'; 
import Documentoplus from '../../assets/Documentoplus';
import Modal from '../modal/Modal';

const CardWithDate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const entries = [
    { name: 'Prescripción médica.pdf', icon: Documentoplus, date: '18/07/2024', showDownload: true },
    { name: 'Rayos X.pdf', icon: Documentoplus, date: '17/07/2024', showDownload: true },
    { name: 'Corazón ultrasonido.pdf', icon: Documentoplus, date: '15/07/2024', showDownload: true },
    { name: 'Análisis laboratorio.pdf', icon: Documentoplus, date: '10/07/2024', showDownload: true },
    { name: 'Corazón ultrasonido.pdf', icon: Documentoplus, date: '15/07/2024', showDownload: true },
    { name: 'Hemograma completo.pdf', icon: Documentoplus, date: '08/07/2024', showDownload: true },
    { name: 'Glucosa.pdf', icon: Documentoplus, date: '07/07/2024', showDownload: true },
    { name: 'Triglicéridos.pdf', icon: Documentoplus, date: '06/07/2024', showDownload: true },
  ];

  return (
    <div className="mx-auto p-4 relative">
      <div className="flex justify-end mb-8">
        <h3
          className="text-lg font-semibold text-[#007CA0] cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Subir archivos
        </h3>
      </div>
      <div>
        {entries.map((entry, index) => (
          <Card
            key={index}
            icon={entry.icon}
            name={entry.name}
            date={entry.date}
            showDownload={entry.showDownload}
          />
        ))}
      </div>
      {/* Mostrar el modal */}
      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default CardWithDate;
