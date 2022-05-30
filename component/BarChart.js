import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   LogarithmicScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Container, Row, Col } from 'react-bootstrap';
ChartJS.register(
   CategoryScale,
   LinearScale,
   LogarithmicScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);
import { Bar } from 'react-chartjs-2';

const BarChart = ({labels,data:rawData,income=0,expense=0})=>{
   console.log(rawData);
   const options = {
      chartAreaBorder: {
         borderColor: '#6E3CBC'
      },
      scales: {
         x: {
            grid: {
               display: false,
            }
         },
         y: {
            grid: {
               display: false,
            }
         }
      },
      responsive: true,
      plugins: {
         legend: {
            display: false
         },
         title: {
            display: false,
         },
      },
   };
      
   const data = {
      labels,
      datasets: [
         {
            label: 'Dataset 1',
            data: rawData,
            backgroundColor: '#F73D93',
            borderRadius: 1000,
            barThickness: 14
         }
      ],
   };

   return(
      <Bar options={options} data={data}/>
   );
};

export default BarChart;