import CircleChart from '../atoms/CircleChart';
import LineChart from '../atoms/LineChart';
import AssignedMedication from '../card/AssignedMedication';
import GeneralInstructionsCard from '../card/GeneralInstructionsCard';

function Statistics() {
  //Card medicamentos
  const medicaciones = ['Warfarina', 'Tramadol', 'Vitamina D3'];
  const instruccionesMedicacion = [
    'Visitas de seguimiento: Mensuales',
    'INR cada 2 semanas',
  ];

  //Card instrucciones generales
  const instruccionesGenerales = [
    'Visitas de seguimiento: Mensuales (hasta agosto)',
    'Pruebas de laboratorio: INR cada 2 semanas',
    'Ejercicio Moderado: Aprobado por fisioterapeuta',
    'Dieta Equilibrada: Rica en proteínas y vitaminas',
  ];

  //gráfico de circleChart
  const adherenciaData = [
    { label: 'Adherencia', value: 60 },
    { label: 'Atrasado', value: 35 },
    { label: 'Postergado', value: 5 },
  ];
  const adherenciaColors = ['#3C50E0', '#6577F3', '#8FD0EF'];

  //gráfico de LineChart
  const estadoData = {
    title: 'Estado',
    series: [
      {
        name: 'Pre - Transplante',
        data: [40, 35, 30, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'Transplante',
        data: [0, 0, 0, 20, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'Post - Transplante',
        data: [0, 0, 0, 0, 50, 60, 55, 35, 50, 55],
      },
    ],
    categories: [
      'Nov',
      'Dic',
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
    ],
    colors: ['#FFA500', '#FF69B4', '#00CED1'],
    yaxisMax: 60,
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <div>
          <AssignedMedication
            medicaciones={medicaciones}
            instrucciones={instruccionesMedicacion}
          />
        </div>
        <GeneralInstructionsCard instrucciones={instruccionesGenerales} />
      </div>
      <div className="flex w-full gap-3">
        <div className="w-2/3 max-w-[868px]">
          <LineChart {...estadoData} />
        </div>
        <div className="w-1/3">
          <CircleChart
            title="Adherencia a la medicación"
            data={adherenciaData}
            colors={adherenciaColors}
          />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
