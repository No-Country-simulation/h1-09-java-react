import React from 'react';

const Citas = () => {
  const citas = [
    {
      textTime: '8:00 am',
      titleTime: 'Hora',
      textReason: 'Consulta general',
      titleReason: 'Motivo',
      textSpecialty: 'Medicina General',
      titleSpecialty: 'Especialidad',
      titleSpecialist: 'Especialista',
      textSpecialist: 'Dr. Mateo Fernandez',
      status: 'Confirmado',
      titleDataDays: 'Jueves 12'
    },
    {
      textTime: '8:30 am',
      titleTime: 'Hora',
      textReason: 'Seguimiento',
      titleReason: 'Motivo',
      textSpecialty: 'Pediatría',
      titleSpecialty: 'Especialidad',
      titleSpecialist: 'Especialista',
      textSpecialist: 'Dra. Ana Rodriguez',
      status: 'Confirmado',
      titleDataDays: 'Viernes 13'
    },
    {
      textTime: '9:00 am',
      titleTime: 'Hora',
      textReason: 'Seguimiento',
      titleReason: 'Motivo',
      textSpecialty: 'Cardiología',
      titleSpecialty: 'Especialidad',
      titleSpecialist: 'Especialista',
      textSpecialist: 'Dr. Hernan Velazco',
      status: 'Confirmado',
      titleDataDays: 'No hay más citas registradas'
    }
  ];

  return (
    <div className="w-full h-[365px] overflow-y-auto">
      {citas.map((cita, index) => (
        <div key={index} className="flex mb-4 relative">
          <div className="flex flex-col items-center mr-2">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-[#007CA0] rounded-full"></div>
              <div className="ml-2 text-right text-[#4D516F]">{cita.titleDataDays}</div>
            </div>
            {cita.titleDataDays !== 'No hay más citas registradas' && (
              <div className="flex-1 w-px bg-[#BFBFBF] h-full mt-1 -ml-16"></div>
            )}
          </div>
          {cita.titleDataDays !== 'No hay más citas registradas' ? (
            <div className="flex-1 border rounded-lg p-4 flex flex-col justify-between bg-white">
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <div className="font-bold">{cita.titleTime}</div>
                  <div className="text-sm text-gray-500">{cita.textTime}</div>
                </div>
                <div>
                  <div className="font-bold">{cita.titleReason}</div>
                  <div className="text-sm text-gray-500">{cita.textReason}</div>
                </div>
                <div>
                  <div className="font-bold">{cita.titleSpecialty}</div>
                  <div className="text-sm text-gray-500">{cita.textSpecialty}</div>
                </div>
                <div>
                  <div className="font-bold">{cita.titleSpecialist}</div>
                  <div className="text-sm text-gray-500">{cita.textSpecialist}</div>
                </div>
              <div className="flex items-center justify-end">
                <div className="text-[#359B4B] text-2xl">&#x2022;</div>
                <div className="ml-2">{cita.status}</div>
              </div>
            </div>
              </div>
          ) : (
            <p></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Citas;
