import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { PopularPersons } from './TopicsAndPopular'
import image from './../../../assets/team2.jpg'
import { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const PersonsData = {
    title: 'Top Skills On Demand',
    header: ['Skills', 'Likes'],
    isTopicPostRanking: true,
    data: [
        {
            imageIcon: image,
            name: 'Vikas Kumar',
            value: '356 Views',
            subtitle: 'Hello Guys'
        },
        {
            imageIcon: 'hjagfhg  ',
            name: 'Vikas Kumar',
            value: '356 Views',
            subtitle: 'Hello Guys'
        },
        {
            imageIcon: image,
            name: 'Vikas ',
            value: '356 Views',
            subtitle: 'Hello Guys'
        },
        {
            imageIcon: image,
            name: 'Vikas Kumar',
            value: '356 Views',
            subtitle: 'Hello Guys'
        },
        {
            imageIcon: image,
            name: 'Vikas Kumar',
            value: '356 Views',
            subtitle: 'Hello Guys'
        }
    ]

}


const LatestRankings = {
    title: 'Latest Rankings',
    header: ['Skills', 'Rankings'],
    isTopicPostRanking: true,
    data: [
        {
            imageIcon: image,
            name: 'Vikas Kumar',
            value: '356 Views',
            subtitle: 'Hello Guys'
        },
        {
            imageIcon: 'hjagfhg  ',
            name: 'Vikas Kumar',
            value: '356 Views',
            subtitle: 'Hello Guys'
        },
        {
            imageIcon: image,
            name: 'Vikas ',
            value: '356 Views',
            subtitle: 'Hello Guys'
        },
        {
            imageIcon: image,
            name: 'Vikas Kumar',
            value: '356 Views',
            subtitle: 'Hello Guys'
        },
        {
            imageIcon: image,
            name: 'Vikas Kumar',
            value: '356 Views',
            subtitle: 'Hello Guys'
        }
    ]

}


const programmingData = [
    ['JavaScript', 70],
    ['Python', 20],
    ['Java', 10],
  ];

const AnimatedPieChart = ({ data }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Set initial chart data
        setChartData(data);

        // Cleanup the interval on component unmount
    }, [chartData, data]);

    return (
        <Chart
            width={'100%'}
            height={'375px'}
            chartType="PieChart"
            loader={<div>Loading Chart...</div>}
            data={[['Language', 'Popularity'], ...chartData]}
            options={{
                animation: {
                    startup: true,
                    easing: 'linear',
                    duration: 1000,
                },
                pieHole:0.4,
                // pieSliceText: 'label', // Display labels outside the slices
                // legend: 'none', // Hide the legend
            }}
        />
    );
};





const TopPostsRankings = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ marginTop: '2px' }}>
                <Grid item xs={12} sm={4}>
                    <Paper style={{ padding: 15, textAlign: 'center', height: '65vh' }}>
                        <PopularPersons cardData={PersonsData} />

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper style={{ padding: 15, textAlign: 'center', height: {sm:'65vh',xs:'55vh'} }}>
                        <Typography variant='h6'>Popular Programming Languages</Typography>
                        <AnimatedPieChart data={programmingData} />
                        <Button color="secondary" >View All</Button>
                    </Paper>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper style={{ padding: 15, textAlign: 'center', height: '65vh' }}>
                    <PopularPersons cardData={LatestRankings} />
                    </Paper>
                </Grid>
            </Grid>

        </>
    )
}

export default TopPostsRankings