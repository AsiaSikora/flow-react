import React from 'react';
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
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
  maintainAspectRatio: false
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Flow',
      data: [3, 62, -2, 34, 100, 21, 3],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Temperature',
      data: [57, 23, 19, -10, 63, 23, 89],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Graph(props) {
  console.log(props.survey);
  return (
    <div className={styles.size}>
      <Line options={options} data={data} height="400px" />
    </div>
  );
}

export default Graph;