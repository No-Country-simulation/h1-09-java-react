import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';

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
    const fetchPatients = async () => {
      try {
        //const token =
        ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwibm9tYnJlIjoiTWFyaW8iLCJhcGVsbGlkbyI6Ik1vcmxhcmVzIiwiZW1haWwiOiJtYXJ0aW4yMkBubi5jb20iLCJ0ZWxlZm9ubyI6Mjg4MjIyNTgsImVzdGFkb19jaXZpbCI6ImNhc2FkbyIsImVzcGVjaWFsaWRhZCI6IkNhcmRpb2xvZ2lhIiwibnJvX21hdHJpY3VsYSI6MjE0NzQ4MzY0NywicHJvZmlsZV9waWN0dXJlIjpudWxsLCJpYXQiOjE3MjI4NjkwNjEsImV4cCI6MTcyMjg3OTg2MX0.PzsxrNOfvN0zCkmPRp4OfTEWufY4F1Dq6mu4E9_Repo');
        /* const token = localStorage.getItem('token'); */
        const response = await axios.get(
          'https://justina-io-api-9a1d439a2f95.herokuapp.com/api/pacientes',
          {
            /* headers: {
              Authorization: `Bearer ${token}`, // Agrega el token en el encabezado 'Authorization'
            }, */
          },
        );
        console.log('API Response:', response.data);
        const patientsData = response.data.map((patient, index) => ({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="h-screen py-4 mx-auto">
      {patients.length === 0 ? (
        <p>No patients found</p>
      ) : (
        patients.map((patient, index) => (
          <Card key={index} photo={patient.photo} name={patient.name} />
        ))
      )}
    </div>
  );
};

export default CardPatients;
