// src/components/TestimonialSection.js

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO, XYZ Company',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.',
  },
  {
    name: 'Jane Smith',
    position: 'Founder, ABC Corporation',
    quote:
      'Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Bob Johnson',
    position: 'CTO, LMN Tech',
    quote:
      'Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const TestimonialSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ marginBottom: '40px', color: '#333' }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',
              boxShadow: "rgba(100, 10, 155, 0.25) 0px 30px 60px -12px inset, rgba(14, 106, 165, 0.3) 0px 18px 36px -18px inset"
             }}>
                <CardContent>
                  <Typography variant="h6" sx={{ marginBottom: '10px', color: '#333' }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ marginBottom: '10px', color: '#666' }}>
                    {testimonial.position}
                  </Typography>
                  <Typography sx={{ color: '#666' }}>{testimonial.quote}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
