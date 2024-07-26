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
    <div className="mx-auto relative">
      <div className="flex justify-end mb-8">
        <h3
          className="text-lg font-semibold text-[#007CA0] cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
     <div className="flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
  <span>Subir archivos</span>
</div>

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
      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default CardWithDate;
