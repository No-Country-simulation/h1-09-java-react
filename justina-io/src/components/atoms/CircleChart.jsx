import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CircleChart = ({ title, data, colors }) => {
  const options = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'donut',
      height: 224,
    },
    colors: colors || ['#3C50E0', '#6577F3', '#8FD0EF'],
    labels: data.map((item) => item.label),
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const series = data.map((item) => item.value);

  return (
    <div className="relative bg-white rounded-lg border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark p-4">
      <h5 className="text-xl font-semibold text-black dark:text-white mb-16">
        {title}
      </h5>
      <div className="h-[224px]">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={224}
        />
      </div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-80 p-2 rounded">
        {data.map((item, index) => (
          <div key={index} className="flex items-center mb-1">
            <span
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: options.colors[index] }}
            ></span>
            <span className="text-sm font-medium text-black dark:text-white">
              {item.label}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleChart;
