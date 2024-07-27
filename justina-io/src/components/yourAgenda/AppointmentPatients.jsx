import React from 'react';

const AppointmentPatients = ({
  textTime, titleTime, textReason, titleReason, textSpecialty, titleSpecialty,
  titleSpecialist, textSpecialist, status, titleDataDays
}) => {
  return (
    <div className="flex mb-4 relative">
      <div className="flex flex-col items-center mr-2">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-[#007CA0] rounded-full"></div>
          <div className="ml-2 text-right text-[#4D516F]">{titleDataDays}</div>
        </div>
        <div className="flex-1 w-px bg-[#BFBFBF] h-full mt-1 -ml-16"></div>
      </div>
      <div className="flex-1 border rounded-lg p-4 flex flex-col justify-between bg-white">
        <div className="grid grid-cols-8 gap-4">
          <div>
            <div className="font-bold">{titleTime}</div>
            <div className="text-sm text-gray-500">{textTime}</div>
          </div>
          <div>
            <div className="font-bold">{titleReason}</div>
            <div className="text-sm text-gray-500">{textReason}</div>
          </div>
          <div>
            <div className="font-bold">{titleSpecialty}</div>
            <div className="text-sm text-gray-500">{textSpecialty}</div>
          </div>
          <div>
            <div className="font-bold">{titleSpecialist}</div>
            <div className="text-sm text-gray-500">{textSpecialist}</div>
          </div>
        <div className="flex items-center justify-end">
          <div className="text-[#359B4B] text-2xl">&#x2022;</div>
          <div className="ml-2">{status}</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPatients;
