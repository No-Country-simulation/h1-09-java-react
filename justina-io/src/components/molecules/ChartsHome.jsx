import CircleChart from '../atoms/CircleChart';
import LineChart from '../atoms/LineChart';

function ChartsHome() {
  //Datos pacientes circle charts
  const pacientesData = [
    { label: 'Tratamiento', value: 50 },
    { label: 'Observación', value: 40 },
    { label: 'Críticos', value: 10 },
  ];
  const pacientesColors = ['#3C50E0', '#6577F3', '#8FD0EF'];

  //Datos estadisticas Line charts

  const estadisticasData = {
    title: 'Estadísticas',
    series: [
      {
        name: 'Pacientes',
        data: [10, 15, 20, 35, 45, 52],
      },
    ],
    categories: ['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
    colors: ['#00ABDD'],
    yaxisMax: 60,
  };

  return (
    <div className="flex gap-3 my-3">
      <CircleChart
        title="Pacientes"
        data={pacientesData}
        colors={pacientesColors}
      />
      <LineChart {...estadisticasData} />
    </div>
  );
}

export default ChartsHome;
