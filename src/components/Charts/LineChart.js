import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartRoot, ChartTitle } from './styles';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
  
export const options = {
    responsive: true,
    // maintainAspectRatio: false,
    aspectRatio: 1.5,
    plugins: {
        legend: {
            display: false,
        }
    },
    layout: {padding: 20},
    scales: {
        x: {
            ticks: {
                color: '#ADB9D8'
            },
            grid: {
                display: false
            }
        },
        y: {
            ticks: {
                color: '#ADB9D8',
                callback: (value)=>{if(value % 100 == 0) return value},
            },
            grid: {
                color: '#4E5677'
            }
        }
    }
    
};

// check if the last day result is bigger than first week day result or not
const checkWeekResult = data => {
    return {
        lastDay: data.slice(-1)[0].value,
        positive: data.slice(-1)[0].value > data.slice(0)[0].value
    }
}

const LineChart = ({chartsData}) => {

    const result = checkWeekResult(chartsData)

    const data = {
        labels: chartsData.map(d=>d.day),
        datasets: [
            {
                label: 'WEEKLY PROJECT VIEWS',
                data: chartsData.map(v => v.value),
                backgroundColor: 'rgb(88,227,222,.37)',
                borderColor: 'transparent',
                pointBackgroundColor: '#69BABA',
                color: 'white',
                borderRadius: 20,
                fill: true,
                pointStyle: 'circle',
                pointRadius: 3,
                pointHoverRadius: 5
            }
        ],
    };

    return (
        <ChartRoot>
            <ChartTitle arrow={result.positive?`${process.env.PUBLIC_URL}/assets/icons/arrow-up.svg`:`${process.env.PUBLIC_URL}/assets/icons/arrow-down.svg`}>
                <div>
                    <p>WEEKLY PROJECT VIEWS</p>
                    <h4>{result.lastDay}</h4>
                </div>
            </ChartTitle>
            <Line options={options} data={data} />
        </ChartRoot>
    )
}

export default LineChart