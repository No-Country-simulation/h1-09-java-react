import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'

const CardPatients = () => {
  const names = [
    "Mateo Fernandez",
    "Lucas García",
    "Sofía Rodríguez",
    "Hernan Velazco",
    "Valentina Gómez",
    "Martina Sánchez",
    "Pedro Rodriguez",
    "Ana Torres",
    "Diego Vargas"
  ];

  const photos = [
    "img/image6.png",
    "img/frame5.png",
    "img/image1.png",
    "img/image9.png",
    "img/frame29.png",
    "img/image3.png",
    "img/image6.png",
    "img/frame5.png",
    "img/frame29.png"
  ];

  return (
    <div className="w-[1110px] h-[952px] mx-auto bg-slate-50 p-4">
      {names.map((name, index) => (
        <div key={index} className="w-[1050px] h-[72px] bg-white rounded-lg mb-4 shadow-lg flex items-center justify-between p-2">
          <div className="flex items-center">
            <img src={photos[index]} alt={`Foto de ${name}`} className="w-12 h-12 rounded-full mr-4" />
            <span className="text-black text-lg">{name}</span>
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mr-2">
            <FaEllipsisH className="text-gray-900 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardPatients;
