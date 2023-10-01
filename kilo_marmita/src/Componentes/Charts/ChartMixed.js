import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function ApexChartMixed() {
  const [selectedYear, setSelectedYear] = useState("2023");

  const chartData = {
    // Dados para diferentes anos
    '2022': {
      series: [
        { name: 'Gastos e Investimentos', type: 'area', data: [40, 50, 30, 45, 28, 40, 25, 38, 30, 45, 32] },
        { name: 'Lucro Relativo', type: 'line', data: [50, 65, 40, 55, 38, 50, 35, 48, 40, 55, 42] },
      ],
      labels: ['Nov 01', 'Nov 02', 'Nov 03', 'Nov 04', 'Nov 05', 'Nov 06', 'Nov 07', 'Nov 08', 'Nov 09', 'Nov 10', 'Nov 11'],
    },
    '2023': {
      series: [
        { name: 'Gastos e Investimentos', type: 'area', data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33] },
        { name: 'Lucro Relativo', type: 'line', data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43] },
      ],
      labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09', 'Dec 10', 'Dec 11'],
    },
    // Adicione dados para outros anos conforme necessário
  };

  const selectedChartData = chartData[selectedYear];

  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'solid',
      opacity: [0.35, 1],
    },
    labels: selectedChartData.labels,
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: 'Gastos e Investimentos',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Lucro Relativo',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      labels: selectedChartData.labels,
    }));
  }, [selectedChartData]);

  return (
    <div>
      <div>
        <label>Ano:</label>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          {Object.keys(chartData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartOptions}
          series={selectedChartData.series}
          type="line"
          height={350}
          width={800}
        />
      </div>
    </div>
  );
}

export default ApexChartMixed;
