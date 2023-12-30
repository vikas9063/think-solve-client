// src/components/NewsSection.js

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const newsItems = [
  {
    title: 'Exciting Feature Update',
    date: 'January 15, 2024',
    description: 'We are thrilled to introduce a new feature that will enhance your experience on our platform.',
  },
  {
    title: 'Community Meetup Recap',
    date: 'January 10, 2024',
    description: 'Thank you to everyone who joined our recent community meetup. Here\'s a recap of the event.',
  },
  {
    title: 'Celebrating 1 Million Users!',
    date: 'January 5, 2024',
    description: 'We\'ve reached a significant milestone of 1 million users. Thank you for being part of our community!',
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '& .MuiCardContent-root': {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '& h6': {
    color: '#333',
    marginBottom: theme.spacing(1),
  },
  '& p': {
    color: '#666',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}));

const NewsSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, rgba(100, 10, 155, 0.75), rgba(14, 106, 165, 0.75))',
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
        padding: '80px 0',
        color: '#fff',
      }}
    >
      <Container>
        <Typography variant="h4" align="center" sx={{ marginBottom: '40px' }}>
          Latest News
        </Typography>
        <Grid container spacing={4}>
          {newsItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ marginBottom: '10px' }}>
                    {item.date}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsSection;
