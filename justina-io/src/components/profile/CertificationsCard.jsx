import React from 'react';
import DocumentoText from '../../assets/DocumentoText';
import Download from '../../assets/Download';
import Further from '../../assets/Further';

const CertificationsCard = () => {
  return (
    <div className="flex flex-col items-end">
      <div className="w-[406px] bg-white border rounded-lg p-4">
        <div className="text-lg text-[#4D516F] font-bold mb-4">Certificaciones y Licencias</div>
        <div className="w-[390px] h-[56px] border rounded-lg flex items-center mb-4 p-2">
          <DocumentoText />
          <div className="ml-2 text-[#1F1F22] flex-grow">Certificación en Cardiología Avanzada</div>
          <Download />
        </div>
        <div className="w-[390px] h-[56px] border rounded-lg flex items-center p-2">
          <DocumentoText />
          <div className="ml-2 text-[#1F1F22] flex-grow">Licencia Médica Nacional</div>
          <Download />
        </div>
      </div>
      <button className="text-[#007CA0] px-4 py-2 mt-4 flex items-center">
        <Further className="mr-2" /> 
        Agregar documento
      </button>
    </div>
  );
};

export default CertificationsCard;