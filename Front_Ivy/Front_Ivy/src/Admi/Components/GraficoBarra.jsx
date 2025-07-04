import React, { useState } from "react";
import Chart from "react-apexcharts";
import "../Styles/GraficoBarra.css";

function GraficoBarra() {
  const [opciones, setOpciones] = useState({
    chart: { id: "ivy-bar" },
    xaxis: {
      categories: [2025, 2026, 2027, 2028, 2029, 2030],
      title: { text: "Año", style: { color: "#2e7b66" } },
    },
    yaxis: {
      title: { text: "Rendimiento", style: { color: "#2e7b66" } },
    },
    colors: ["#21a179"],
    grid: { borderColor: "#d6f1e8" },
    title: {
      text: "Crecimiento esperado",
      align: "center",
      style: { fontSize: "18px", color: "#21a179" },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Series IVY",
      data: [30, 40, 45, 50, 49, 60],
    },
  ]);

  return (
    <div className="GraficoBarra_Container">
      <Chart
        options={opciones}
        series={series}
        type="bar"
        width="100%"
        height="320"
      />
    </div>
  );
}

export default GraficoBarra;