import React from 'react';
import Clock from '../../assets/Clock';
import InfoCard from './InfoCard';

const HorarioCard = () => {
  return (
    <InfoCard
      icon={Clock}
      title="Horario de trabajo"
      lines={[
        'Lunes a Viernes: 9:00 am - 16:00 pm',
        'Sábados: 10:00 am - 14:00 pm'
      ]}
    />
  );
};

export default HorarioCard;