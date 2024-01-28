import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Paper, Typography } from '@mui/material';
import { IoMdPeople, IoMdPersonAdd, IoMdDocument, IoMdHelpCircle } from 'react-icons/io';

const MotionPaper = motion(Paper);

const OverviewSection = ({ followers, following, answersPosted, questionsRaised }) => {
  const iconSize = 40;

  return (
    <Grid container spacing={3} sx={{marginTop:1}}>
      <Grid item xs={12} sm={6} md={3}>
        <MotionPaper
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          elevation={3}
          style={{ padding: '20px', textAlign: 'center' }}
        >
          <IoMdPeople size={iconSize} color="#2196f3" />
          <Typography variant="h6">Followers</Typography>
          <Typography variant="h4">{followers}</Typography>
        </MotionPaper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <MotionPaper
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          elevation={3}
          style={{ padding: '20px', textAlign: 'center' }}
        >
          <IoMdPersonAdd size={iconSize} color="#4caf50" />
          <Typography variant="h6">Following</Typography>
          <Typography variant="h4">{following}</Typography>
        </MotionPaper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <MotionPaper
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          elevation={3}
          style={{ padding: '20px', textAlign: 'center' }}
        >
          <IoMdDocument size={iconSize} color="#ff9800" />
          <Typography variant="h6">Answers Posted</Typography>
          <Typography variant="h4">{answersPosted}</Typography>
        </MotionPaper>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <MotionPaper
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          elevation={3}
          style={{ padding: '20px', textAlign: 'center' }}
        >
          <IoMdHelpCircle size={iconSize} color="#e91e63" />
          <Typography variant="h6">Questions Raised</Typography>
          <Typography variant="h4">{questionsRaised}</Typography>
        </MotionPaper>
      </Grid>
    </Grid>
  );
};

export default OverviewSection;
