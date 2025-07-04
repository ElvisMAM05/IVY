import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import '../Styles/Donut.css'; 

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'donut',
          background: 'transparent',
        },
        labels: ['Servicios', 'Usuarios', 'Trabajadores', 'Solicitudes', 'Rechazos'],
        colors: ['#7bdcb5', '#1a3b5d', '#89cff0', '#fdd365', '#ff6b6b'],
        legend: {
          position: 'bottom',
          labels: {
            colors: '#1a3b5d',
            useSeriesColors: false,
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#fff'],
            fontSize: '14px',
            fontWeight: '500',
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['#f4fff9']
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: { width: 280 },
            legend: { position: 'bottom' }
          }
        }]
      },
      series: [44, 55, 41, 17, 15]
    };
  }

  render() {
    return (
      <div className="donut-ivy">
        <h3 style={{ color: '#1a3b5d', marginBottom: '1rem' }}>📊 Distribución General</h3>
        <Chart options={this.state.options} series={this.state.series} type="donut" width="100%" />
      </div>
    );
  }
}

export default Donut;