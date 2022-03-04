import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartRoot, ChartTitle } from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    // maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
        legend: {
            position: 'bottom',
            align: 'center',
            // fullSize: true,
            labels: {
                usePointStyle: true,
                pointStyle: 'rectRounded',
                color: 'white',
                
            },
        },
    },
    layout: {padding: 20},
};

const PieChart = ({chartsData}) => {
    const data = {
        labels: chartsData.map(d=>d.name),
        datasets: [
            {
                // label: '# of Votes',
                data: chartsData.map(v => v.value),
                backgroundColor: [
                    '#A0A2FF',
                    '#D79AD7',
                    '#FFAAB9',
                    '#9FDFCD',
                ],
                borderColor: [
                    '#707070'
                ],
                hoverOffset: 10,

            },
        ],
    };

    return (
        <ChartRoot>
            <ChartTitle>
                <div>
                    <p>PENDING TASKS</p>
                    <h4>36</h4>
                </div>
            </ChartTitle>
            <Doughnut 
                data={data}
                options={options}
            />
        </ChartRoot>
    )
}

export default PieChart