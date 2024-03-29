import React from 'react';
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
//import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function ChartGraph() {

    const data2 = [
        {weight : 10,
        date:12-8-2023}
    ]
    const maxWeight= 40

    const options = {
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
          /*legend: {
            position: 'top' as const,
          },*/
          /*title: {
            display: true,
            text: 'Chart.js Line Chart',
          },*/
        },
      };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const weight = [ 17, 20, 25, 22, 23, 21, 25, 24, 26, 26, 23, 22]
    const data = {
        labels,
        datasets: [
          {
            label: '2023',
            data: weight,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};
console.log(data)

        return <div className='h-[300px]'>
            <Line  options={options} data={data}/>
        </div>
      }
      
      export default ChartGraph;