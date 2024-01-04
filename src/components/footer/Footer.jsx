// src/components/Footer.js

import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const iconStyles = {
    fontSize: '2.5rem',
    color: '#fff',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, rgba(100, 10, 155, 0.95),rgba(14, 106, 165, 1))',
        color: '#fff',
        padding: '40px 0',
        marginTop: 'auto',
        flex:0
      }}
    >
      <Container>
        <Typography variant="h6" gutterBottom>
          Connect with Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton color="inherit" aria-label="Facebook" sx={iconStyles}>
            <FacebookIcon sx={{ color: '#1877f2' }} />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter" sx={iconStyles}>
            <TwitterIcon sx={{ color: '#1da1f2' }} />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram" sx={iconStyles}>
            <InstagramIcon sx={{ color: '#c13584' }} />
          </IconButton>
          <IconButton color="inherit" aria-label="LinkedIn" sx={iconStyles}>
            <LinkedInIcon sx={{ color: '#2867B2' }} />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ marginTop: '20px' }}>
          © 2023 ThinkSolve. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
