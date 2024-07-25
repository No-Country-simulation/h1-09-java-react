import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ title, series, categories, colors, yaxisMax }) => {
  const options = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 224,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: colors,
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: yaxisMax,
      labels: {
        formatter: (value) => Math.round(value),
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  };

  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap mb-3 py-4">
        <h2 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h2>
        <div className="flex items-center">
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>6 meses</option>
            <option>1 año</option>
            <option>2 años</option>
          </select>
        </div>
      </div>

      <div style={{ height: '224px' }}>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={224}
        />
      </div>
    </div>
  );
};

export default LineChart;
