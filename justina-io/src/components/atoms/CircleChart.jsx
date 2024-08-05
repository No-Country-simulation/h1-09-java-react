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
    <div className="relative max-w-[406px] bg-white rounded-lg border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark p-4 max-h-[333px]">
      <h5 className="mb-16 text-xl font-semibold text-black dark:text-white">
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
      <div className="absolute p-2 bg-white rounded top-4 right-4 bg-opacity-80">
        {data.map((item, index) => (
          <div key={index} className="flex items-center mb-1">
            <span
              className="w-3 h-3 mr-2 rounded-full"
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
