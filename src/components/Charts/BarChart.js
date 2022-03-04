import React, {useState} from 'react';
import { ChartRoot, ChartTitle } from './styles';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

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
        legend: {display: false},
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
                callback: (value)=>{if(value % 40 == 0) return value},
                display: false,
            },
            grid: {
                color: '#4E5677'
            }   
        }
    }
    
};
  
// Creating fake data for chart labels
const labels = []
function labelCreator(){
    for(let i = 5; i < 31; i++){
        labels.push({day: i, value: Math.floor(Math.random() * 100)})
    }
}
labelCreator()

const monthlyStatsCounter = () => {
    let monthlyStats = new Number
    labels.map(item=> monthlyStats += item.value)
    return monthlyStats
}
  
const BarChart = ({chartsData}) => {

    // const [checked, setChecked] = useState(false); to use for dynamic data
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Monthly', value: '1' },
        { name: 'Weekly', value: '2' },
    ];

    const data = {
        labels: chartsData.map(d=>d.day),
        datasets: [
            {
                label: 'MONTHLY STATS',
                data: chartsData.map(v => v.value),
                backgroundColor: '#F0EFF7',
                borderRadius: Number.MAX_VALUE,
                borderWidth: 1,
            }
        ],
    };
    
    return (
        <ChartRoot>
            <ChartTitle arrow={`${process.env.PUBLIC_URL}/assets/icons/arrow-up.svg`}>
                <div>
                    <p>MONTHLY STATS</p>
                    <h4>{monthlyStatsCounter()}</h4>
                </div>
                <div>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
            </ChartTitle>
            <Bar 
                data={data} 
                options={options}
            />
        </ChartRoot>
    )
}

export default BarChart