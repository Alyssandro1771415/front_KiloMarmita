import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function ApexChartLine() {
  const [selectedYear, setSelectedYear] = useState("2023");

  const datas = [
    { data: [55, 22, 34, 72], mounth: ["Jan", "Feb", "Mar", "Apr"], year: "2023" },
    { data: [55, 22, 32, 10], mounth: ["Jan", "Feb", "Mar", "Apr"], year: "2022" }
  ];

  const chartData = {
    series: [
      {
        name: "Vendas",
        data: datas.find((item) => item.year === selectedYear)?.data || [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Quantidade de Vendas Mensais",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: datas.find((item) => item.year === selectedYear)?.mounth || [],
      },
    },
  };

  useEffect(() => {
    // Faça algo quando o ano selecionado mudar
    // Pode ser útil para buscar dados adicionais ou realizar outras ações
  }, [selectedYear]);

  return (
    <div>
      <div>
        <label>Ano:</label>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          {datas.map((item) => (
            <option key={item.year} value={item.year}>
              {item.year}
            </option>
          ))}
        </select>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
          width={800}
        />
      </div>
    </div>
  );
}

export default ApexChartLine;
