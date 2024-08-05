import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';

const TOKEN_MEDICO = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tYnJlIjoiRGFuaWVsYSIsImFwZWxsaWRvIjoiRGVsZ2FkbyIsImVtYWlsIjoiZGFubnkuZGVsZ2Fkb0BqdXN0aW5hLW1lZGljby5jb20iLCJ0ZWxlZm9ubyI6MTEyMjMzNDQsImVzdGFkb19jaXZpbCI6InNvbHRlcmEiLCJlc3BlY2lhbGlkYWQiOiJPZG9udG9sb2dhIiwibnJvX21hdHJpY3VsYSI6NTU4NzQ1ODksInByb2ZpbGVfcGljdHVyZSI6bnVsbCwiaWF0IjoxNzIyODcwNjI1LCJleHAiOjE3MjI4ODE0MjV9.QIk9SciEZ5rsl2Fbd7AJuFLVx3k_RYKBJTCxozzNmrw';
const TOKEN_PACIENTE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFBhY2llbnRlIjoxLCJpZEVudGlkYWRlcyI6bnVsbCwiaWRQcmVwYWdhcyI6bnVsbCwiaWRUcmF0YW1pZW50byI6bnVsbCwiaWRQZXJzb25hbF9tZWRpY28iOm51bGwsImlkUGF0b2xvZ2lhcyI6bnVsbCwiaWRUaXBvX0RvY3VtZW50byI6bnVsbCwiaWRDb250YWN0b1BhY2llbnRlIjpudWxsLCJpZENvbnRhY3RvX0ZhbWlsaWFyIjpudWxsLCJub21icmUiOiJKdWFuIFBlcmV6IiwiYXBlbGxpZG8iOm51bGwsImVtYWlsIjoiY2FybG9zLmNoYXZlekBqdXN0aW5hLXBhY2llbnRlLmNvbSIsImNpdWRhZCI6IkJ1ZW5vcyBBaXJlcyIsIm5fZGVfZG9jdW1lbnRvIjpudWxsLCJmZWNoYV9uYWNpbWllbnRvIjpudWxsLCJzZXhvIjpudWxsLCJmYWN0b3Jfc2FuZ3VpbmVvIjoiTy0iLCJlZGFkIjoyMCwicGVzbyI6NjYsImFsdHVyYSI6MiwiZ2VuZXJvIjoiTSIsImFsZXJnaWFzIjoiT3h5Y29kb24iLCJ0ZWxlZm9ubyI6NTU1NTAwMTEsImRpcmVjY2lvbiI6IkF2LiBTaWVtcHJlIFZpdmEgMzMyIiwiY29udGFjdG9fZmFtaWxpYXJfdGVsZWZvbm8iOjU1NTUwMDExLCJjb250YWN0b19mYW1pbGlhcl9yZWxhY2lvbiI6Ik1hZHJlIiwicHJvZmlsZV9waWN0dXJlIjpudWxsLCJpZFByZXBhZ2EiOm51bGwsImlhdCI6MTcyMjg2OTk5NiwiZXhwIjoxNzIyODgwNzk2fQ.QTFMy';


const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tYnJlIjoiRGFuaWVsYSIsImFwZWxsaWRvIjoiRGVsZ2FkbyIsImVtYWlsIjoiZGFubnkuZGVsZ2Fkb0BqdXN0aW5hLW1lZGljby5jb20iLCJ0ZWxlZm9ubyI6MTEyMjMzNDQsImVzdGFkb19jaXZpbCI6InNvbHRlcmEiLCJlc3BlY2lhbGlkYWQiOiJPZG9udG9sb2dhIiwibnJvX21hdHJpY3VsYSI6NTU4NzQ1ODksInByb2ZpbGVfcGljdHVyZSI6bnVsbCwiaWF0IjoxNzIyODcwNjI1LCJleHAiOjE3MjI4ODE0MjV9.QIk9SciEZ5rsl2Fbd7AJuFLVx3k_RYKBJTCxozzNmrw");
myHeaders.append("Cookie", "Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tYnJlIjoiRGFuaWVsYSIsImFwZWxsaWRvIjoiRGVsZ2FkbyIsImVtYWlsIjoiZGFubnkuZGVsZ2Fkb0BqdXN0aW5hLW1lZGljby5jb20iLCJ0ZWxlZm9ubyI6MTEyMjMzNDQsImVzdGFkb19jaXZpbCI6InNvbHRlcmEiLCJlc3BlY2lhbGlkYWQiOiJPZG9udG9sb2dhIiwibnJvX21hdHJpY3VsYSI6NTU4NzQ1ODksInByb2ZpbGVfcGljdHVyZSI6bnVsbCwiaWF0IjoxNzIyODY2ODE4LCJleHAiOjE3MjI4Nzc2MTh9.EJiVkgS8y1_GSYJg7jck0VZ7SrfCprA_U34cxPZfoDs");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

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

    fetch("https://justina-io-api-9a1d439a2f95.herokuapp.com/api/pacientes", requestOptions)
        .then((response) => console.log("RESPONSE: ", response))
        .then( res => res.json())
        .then((result) => console.log("RESULT: ", result))
        .catch((error) => console.error("ERROR: ", error));
   
    const fetchPatients = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL_PRE_PROD}/pacientes`, {
          mode: 'cors',
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${TOKEN_MEDICO}`,
            'Cookie': 'Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tYnJlIjoiRGFuaWVsYSIsImFwZWxsaWRvIjoiRGVsZ2FkbyIsImVtYWlsIjoiZGFubnkuZGVsZ2Fkb0BqdXN0aW5hLW1lZGljby5jb20iLCJ0ZWxlZm9ubyI6MTEyMjMzNDQsImVzdGFkb19jaXZpbCI6InNvbHRlcmEiLCJlc3BlY2lhbGlkYWQiOiJPZG9udG9sb2dhIiwibnJvX21hdHJpY3VsYSI6NTU4NzQ1ODksInByb2ZpbGVfcGljdHVyZSI6bnVsbCwiaWF0IjoxNzIyODY2ODE4LCJleHAiOjE3MjI4Nzc2MTh9.EJiVkgS8y1_GSYJg7jck0VZ7SrfCprA_U34cxPZfoDs")'
          }),
        });
        /*const response = await axios.get(`${import.meta.env.VITE_BASE_URL_PRE_PROD}/pacientes`,
            {
              headers: {
                Authorization: `Bearer ${TOKEN}`, // Agrega el token en el encabezado 'Authorization'
              },
            },
            );*/
        // const data = await response.json();
        console.log('API Response:', response);
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
