import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const AnimatedBarChart = ({ data }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Sort the data by values in descending order
        const sortedData = data.sort((a, b) => b.value - a.value);

        // Set initial chart data
        setChartData(sortedData);

        // Animate the chart
        const intervalId = setInterval(() => {
            // Shift the first element to the end to create an animation effect
            const updatedData = [...chartData.slice(1), chartData[0]];
            setChartData(updatedData);
        }, 2000); // Change the interval as needed

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [chartData, data]);

    return (
        <>
        <Typography variant='h4'>Animated Bar Chart</Typography>
        <Chart
            width={'100%'}
            height={'40vh'}
            chartType="BarChart"
            loader={<div>Loading Chart...</div>}
            data={[
                ['Label', 'Value', { role: 'style' }],
                ...chartData.map(({ label, value, color }) => [label, value, color]),
            ]}
            options={{
                animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1000,
                },
                hAxis: {
                    minValue: 0,
                },
                vAxis: {
                    title: 'Label',
                },
                legend: 'none',
            }}
        /></>
    );
};

export default AnimatedBarChart;
