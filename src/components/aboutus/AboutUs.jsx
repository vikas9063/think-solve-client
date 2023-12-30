// src/components/AboutUsSection.js

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/system';

import TeamMember1 from '../../assets/team2.jpg'; // Replace with actual image paths
import TeamMember2 from '../../assets/team2.jpg';
import TeamMember3 from '../../assets/team2.jpg';
const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Creative Director',
    image: TeamMember1,
  },
  {
    name: 'Charlie Smith',
    role: 'Lead Developer',
    image: TeamMember2,
  },
  {
    name: 'Eva Williams',
    role: 'Marketing Guru',
    image: TeamMember3,
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: 'linear-gradient(to right, rgba(100, 10, 155, 0.75), rgba(14, 106, 165, 0.75))',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '& img': {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: theme.spacing(2),
  },
  '& h6': {
    color: 'black',
    marginBottom: theme.spacing(1),
  },
  '& p': {
    color: '#ddd',
  },
}));

const AboutUsSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, rgba(100, 10, 155, 0.75), rgba(14, 106, 165, 0.75))',
        padding: '80px 0',
      }}
    >
      <Container>
        <Typography variant="h4" align="center" sx={{ marginBottom: '40px', color: '#fff' }}>
          Unleash Creativity with Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ textAlign: 'justify', color: '#ddd' }}>
              At Awesome Innovations, we are not just a team; we are a creative force driven by passion, innovation, and a touch of madness.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero
              malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ marginBottom: '20px', color: '#fff' }}>
              Meet Our Creative Team
            </Typography>
            <Grid container spacing={2}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <StyledCard>
                    <Avatar alt={member.name} src={member.image} sx={{ width: 100, height: 100 }} />
                    <CardContent >
                      <Typography variant="h6"  >{member.name}</Typography>
                      <Typography variant="subtitle2">{member.role}</Typography>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
