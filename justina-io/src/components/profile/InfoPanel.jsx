import React from 'react';
import Clock from '../../assets/Clock';
import Location from '../../assets/Location';
import InfoCard from './InfoCard';
import DocumentoText from '../../assets/DocumentoText';
import Download from '../../assets/Download';
import Further from '../../assets/Further';

const InfoPanel = () => {
  return (
    <div className="flex space-x-9">
      <InfoCard
        icon={Clock}
        title="Horario de trabajo"
        lines={[
          'Lunes a Viernes: 9:00 am - 16:00 pm',
          'Sábados: 10:00 am - 14:00 pm'
        ]}
      />
      <InfoCard
        icon={Location}
        title="Ubicación de trabajo"
        lines={[
          'Hospital Central, Av. Equis, Buenos Aires',
          'Piso 3, Consultorio 15'
        ]}
      />
      <div className="flex flex-col mt-9 ml-auto">
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
        <button className="text-[#007CA0] px-4 py-2 mt-4 flex items-center ml-auto">
          <Further className="mr-2" /> 
          Agregar documento
        </button>
      </div>
    </div>
  );
};

export default InfoPanel;