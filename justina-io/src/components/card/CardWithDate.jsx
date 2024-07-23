import React from 'react';
import Card from './Card'; 
import Documentoplus from '../../assets/Documentoplus'; 

const CardWithDate = () => {
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
    <div className="mx-auto p-4">
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
  );
};

export default CardWithDate;