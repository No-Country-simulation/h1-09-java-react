import React from 'react';
import Card from '../card/Card'; 

const CardPatients = () => {
  const patients = [
    { name: 'Mateo Fernandez', photo: 'img/image6.png' },
    { name: 'Lucas García', photo: 'img/frame5.png' },
    { name: 'Sofía Rodríguez', photo: 'img/image1.png' },
    { name: 'Mateo Fernandez', photo: 'img/image3.png' },
    { name: 'Lucas García', photo: 'img/frame29.png' },
    { name: 'Sofía Rodríguez', photo: 'img/image1.png' },
    { name: 'Mateo Fernandez', photo: 'img/image6.png' },
    { name: 'Lucas García', photo: 'img/frame5.png' },
    { name: 'Sofía Rodríguez', photo: 'img/image6.png' },
  ];

  return (
    <div className="h-[952px] mx-auto p-4">
      {patients.map((patient, index) => (
        <Card
          key={index}
          photo={patient.photo}
          name={patient.name}
        />
      ))}
    </div>
  );
};

export default CardPatients;
