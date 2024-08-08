import React, {useEffect, useMemo, useState} from 'react';
import Card from '../card/Card';

const CardPatients = ({ pacientes }) => {
  
  const [patients, setPatients] = useState([]);
  const photos = useMemo(() => [
    'img/image6.png',
    'img/frame5.png',
    'img/image1.png',
    'img/image3.png',
    'img/frame29.png',
    'img/image1.png',
    'img/image6.png',
    'img/frame5.png',
    'img/image6.png',
  ], []);

  useEffect(() => {
    if(pacientes) {
      const patientsData = pacientes.map((patient, index) => ({
        name: `${patient.nombre} ${patient.apellido}`,
        photo: photos[index % photos.length],
      }));
      setPatients(patientsData);
    }
  }, [pacientes, photos]);

  return (
    <div className="h-screen mx-auto py-4">
      {patients.length === 0 ? (
        <p>No patients found</p>
      ) : (
        patients.map((patient, index) => (
          <Card
            key={index}
            photo={patient.photo}
            name={patient.name}
          />
        ))
      )}
    </div>
  );
};

export default CardPatients;