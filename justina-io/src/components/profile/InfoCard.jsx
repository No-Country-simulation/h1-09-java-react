import React from 'react';

const InfoCard = ({ icon: Icon, title, lines }) => {
  return (
    <div className="w-[312px] h-[148px] bg-white border rounded-lg p-4 flex flex-col justify-between mt-10">
      <div className="flex items-center mb-2">
        <Icon />
        <div className="ml-2 text-lg text-[#4D516F] font-bold">{title}</div>
      </div>
      <div className="text-sm mb-4">
        {lines.map((line, index) => (
          <p key={index} className={`text-[#4D516F] ${index > 0 ? 'mt-4' : ''}`}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;