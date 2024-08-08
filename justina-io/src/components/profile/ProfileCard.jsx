import React from 'react';
import FlipCard from '../card/FlipCard';

const ProfileCard = () => {
  return (
    <div className="flex mt-36">
      <div className="flex items-center bg-white w-[688px] h-[102px] border rounded-lg p-4">
        <img
          src="img/img-perfeil.png"
          alt="Dr. Carlos Benitez"
          className="w-[70px] h-[70px] rounded-full"
        />
        <div className="ml-4 flex-grow">
          <div className="text-lg text-[#1F1F22] font-bold">Dr. Carlos Benitez</div>
          <div className="text-sm text-[#4D4F66] mt-4">Cardiólogo</div>
        </div>
        <div className="text-right">
          <div className="text-lg text-[#1F1F22] mr-20">+1 234 567 890</div>
          <div className="text-sm text-[#4D4F66] mt-4">juan.perez@hospitalcentral.com</div>
        </div>
      </div>
      <div className="w-1/3 max-w-sm ml-9">
      <FlipCard
            frontTitle="● Número de Matrícula: 123456789"
            frontSubtitle="Fecha de Expiración: 01/01/2025"
      />
      </div>
    </div>
  );
};

export default ProfileCard;