// src/components/ExtendedDashboard.js

import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { Chart } from 'react-google-charts';

const ExtendedDashboard = () => {
  // Simulated data, replace with actual data from your application
  const userData = {
    questionsAsked: 10,
    usersFollowed: 25,
    usersFollowing: 15,
    questionsSolved: 30,
  };

  // Sample data for Google Chart
  const chartData = [['Category', 'Value'], ['Questions Asked', userData.questionsAsked]];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
        Extended Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                Statistics:
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="subtitle1">Questions Asked:</Typography>
                  <Typography variant="h4">{userData.questionsAsked}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1">Users Followed:</Typography>
                  <Typography variant="h4">{userData.usersFollowed}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1">Users Following:</Typography>
                  <Typography variant="h4">{userData.usersFollowing}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1">Questions Solved:</Typography>
                  <Typography variant="h4">{userData.questionsSolved}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                Chart:
              </Typography>
              <Chart
                width={'100%'}
                height={'300px'}
                chartType="PieChart"
                data={chartData}
                options={{
                  title: 'Questions Asked',
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExtendedDashboard;
