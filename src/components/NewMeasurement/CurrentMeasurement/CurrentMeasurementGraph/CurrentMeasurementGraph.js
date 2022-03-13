import React, {Component} from 'react';
import styles from './CurrentMeasurementGraph.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Flow and temperature chart',
    },
  },
  maintainAspectRatio: false
};

class CurrentMeasurementGraph extends Component{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    const labels = this.props.survey.measurements.map(m => m.time.slice(11,16));

    const data = {
      labels,
      datasets: [
        {
          label: 'Flow',
          data: this.props.survey.measurements.map(m => m.currentFlow),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Temperature',
          data: this.props.survey.measurements.map(m => m.temperature),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

    return (
      <div className={styles.size}>
        <Line options={options} data={data} height="400px" />
      </div>
    );
  }
  
}

export default CurrentMeasurementGraph;