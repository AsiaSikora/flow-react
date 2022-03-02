import React, {Component} from 'react';
import styles from './Graph.module.css';
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
      text: '',
    },
  },
  maintainAspectRatio: false
};



class Graph extends Component 
{
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
        // {
        //   label: 'Pressure',
        //   data: this.props.survey.measurements.map(m => m.pressure),
        //   borderColor: 'rgb(53, 235, 59)',
        //   backgroundColor: 'rgb(162, 252, 165)',
        // },
      ],
    };

    return (
      <div className={styles.size}>
        <Line options={options} data={data} height="400px" />
      </div>
    );
  }
  
}

export default Graph;