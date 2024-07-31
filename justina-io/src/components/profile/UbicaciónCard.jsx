import React from 'react';
import Location from '../../assets/Location';
import InfoCard from './InfoCard';

const UbicaciónCard = () => {
  return (
    <InfoCard
      icon={Location}
      title="Ubicación de trabajo"
      lines={[
        'Hospital Central, Av. Equis, Buenos Aires',
        'Piso 3, Consultorio 15'
      ]}
    />
  );
};

export default UbicaciónCard;