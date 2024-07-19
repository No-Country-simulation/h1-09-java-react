import Card from '../cards/Card';

function CardsHome() {
  const cardContent = [
    {
      title: 'Citas',
      number: '38',
      status: '+',
      subNumber: '9',
      icon: 'Agenda',
      color: 'red',
    },
    {
      title: 'Pacientes en Espera de Transplante',
      number: '12',
      status: '+',
      subNumber: '3',
      icon: 'Pacientes',
      color: 'blue',
    },
    {
      title: 'Pacientes Transplantados',
      number: '29',
      status: '+',
      subNumber: '1',
      icon: 'Pacientes',
      color: 'yellow',
    },
    {
      title: 'Pacientes en Estado Criticos',
      number: '02',
      status: '-',
      subNumber: '2',
      icon: 'Pacientes',
      color: 'green',
    },
  ];

  return (
    <div className="flex flex-wrap gap-5">
      {cardContent.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          number={card.number}
          status={card.status}
          subNumber={card.subNumber}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
}

export default CardsHome;
