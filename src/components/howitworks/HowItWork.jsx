// src/components/HowItWorksSection.js

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';

const steps = [
  {
    title: 'Ask a Question',
    description: 'Have a burning question? Ask the community and get diverse insights.',
    icon: <QuestionAnswerIcon />,
    color: '#64a845', // Green
  },
  {
    title: 'Receive Answers',
    description: 'Get detailed answers from experienced members who share their knowledge.',
    icon: <EmojiObjectsIcon />,
    color: '#f39c12', // Yellow
  },
  {
    title: 'Engage in Discussions',
    description: 'Join discussions, share your thoughts, and collaborate with the community.',
    icon: <ChatIcon />,
    color: '#3498db', // Blue
  },
  {
    title: 'Build a Knowledge',
    description: 'Connect with like-minded individuals, build your network, and grow together.',
    icon: <PeopleIcon />,
    color: '#e74c3c', // Red
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
  '& .MuiList-root': {
    paddingLeft: 0,
  },
  '& .MuiListItem-root': {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    marginBottom: theme.spacing(1),
  },
  '& .MuiListItemIcon-root': {
    minWidth: '24px',
    marginRight: theme.spacing(1),
    color: '#666',
  },
}));

const HowItWorksSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ marginBottom: '40px', color: '#333' }}>
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard>
                <CardContent>
                  <ListItemIcon>{step.icon}</ListItemIcon>
                  <Typography variant="h6" sx={{ color: step.color, marginBottom: '10px' }}>
                    {step.title}
                  </Typography>
                  <Typography sx={{ color: '#666', textAlign: 'center', marginBottom: '20px' }}>
                    {step.description}
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <EmojiObjectsIcon style={{ color: step.color }} />
                      </ListItemIcon>
                      <Typography variant="body2" sx={{ color: step.color }}>
                        Learn and grow together
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChatIcon style={{ color: step.color }} />
                      </ListItemIcon>
                      <Typography variant="body2" sx={{ color: step.color }}>
                        Connect with experts
                      </Typography>
                    </ListItem>
                    {/* Add more bullet points as needed */}
                  </List>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
