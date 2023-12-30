// src/components/FeaturesSection.js

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

import Image1 from '../../assets/banner.jpg'; // Replace with your actual image paths
import Image2 from '../../assets/banner.jpg';
import Image3 from '../../assets/banner.jpg';
import Image4 from '../../assets/banner.jpg';

import './style.css';

const features = [
  {
    title: 'Knowledge Sharing',
    description: 'Share and gain knowledge with our community of experts.',
    image: Image1,
  },
  {
    title: 'Ask Questions',
    description: 'Ask any question and get answers from the community.',
    image: Image2,
  },
  {
    title: 'Answer Questions',
    description: 'Help others by providing answers to their questions.',
    image: Image3,
  },
  {
    title: 'Community Engagement',
    description: 'Engage in discussions and build a network of like-minded individuals.',
    image: Image4,
  },
];

// src/components/FeaturesSection.js

// ... (other imports)

const FeaturesSection = () => {
    return (
      <Box sx={{ backgroundColor: '#f4f4f4', padding: '80px 0' }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ marginBottom: '40px' }}>
            Features and Services
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',
                boxShadow:'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px' }}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="card-image"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography>{feature.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        
      </Box>
    );
  };
  
  export default FeaturesSection;
  