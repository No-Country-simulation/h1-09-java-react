import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Cookies from 'js-cookie';


const CardPatients = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);
  const photos = [
    'img/image6.png',
    'img/frame5.png',
    'img/image1.png',
    'img/image3.png',
    'img/frame29.png',
    'img/image1.png',
    'img/image6.png',
    'img/frame5.png',
    'img/image6.png',
  ];

  useEffect(() => {
    console.log(Cookies.get('Authorization'));
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://justina-io-api-9a1d439a2f95.herokuapp.com/api/pacientes', {
          method: 'GET',
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibm9tYnJlIjoiTWFydGluIiwiYXBlbGxpZG8iOiJNb3JsYXJlcyIsImVtYWlsIjoibWFydGluMjJAbm4uY29tIiwidGVsZWZvbm8iOjI4ODIyMjU4LCJlc3RhZG9fY2l2aWwiOiJjYXNhZG8iLCJlc3BlY2lhbGlkYWQiOiJDYXJkaW9sb2dpYSIsIm5yb19tYXRyaWN1bGEiOjIxNDc0ODM2NDcsInByb2ZpbGVfcGljdHVyZSI6bnVsbCwiaWF0IjoxNzIyODA3NTY4LCJleHAiOjE3MjI4MTgzNjh9.Px-Ln3Hwqlf1tu-w7c0IfJFn7h9D85vmYELc-ieJx7M'
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
      console.log(result);

    
        const data = await response.json();
        console.log('API Response:', data);

        const patientsData = data.map((patient, index) => ({
          name: `${patient.nombre} ${patient.apellido}`,
          photo: photos[index % photos.length],
        }));

        setPatients(patientsData);
      } catch (error) {
        console.error('Error fetching patients data:', error);
        setError('Error fetching patients data.');
      }
    };

    fetchPatients();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

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
