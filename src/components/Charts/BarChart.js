import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
  
export const options = {
    responsive: true,
    minHeight: '330px',
    plugins: {
        legend: {},
    },
};
  
const labels = []
function labelCreator(){
    for(let i = 5; i < 31; i++){
        labels.push({day: i, value: Math.floor(Math.random() * 100)})
    }
}
labelCreator()
  
const BarChart = ({chartsData}) => {
    const data = {
        labels: chartsData.map(d=>d.day),
        datasets: [
            {
                label: 'MONTHLY STATS',
                data: chartsData.map(v => v.value),
                backgroundColor: '#F0EFF7',
                borderRadius: '20px'
            }
        ],
    };
    
    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart