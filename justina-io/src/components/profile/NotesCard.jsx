import React from 'react';

const NotesCard = () => {
  return (
    <div className="w-[688px] h-[223px] bg-white border rounded-lg p-4">
      <div className="text-lg text-[#4D516F] font-bold mb-4">Notas internas</div>
      <div className="w-[451px] h-[44px] ml-9 bg-[#CCF3FF] border rounded-lg text-[#007CA0] mb-2 p-2">
        Disponibilidad para Consultas de Emergencia los Martes
      </div>
      <div className="w-[463px] h-[44px] ml-9 bg-[#CCF3FF] border rounded-lg text-[#007CA0]  p-2">
        Participación en el Programa de Mentoría para Residentes
      </div>
    </div>
  );
};

export default NotesCard;