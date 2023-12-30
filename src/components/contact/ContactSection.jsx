// src/components/ContactSection.js

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button } from '@mui/material';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Box sx={{ padding: '80px 0', background:'linear-gradient(60deg,rgba(14, 106, 165, 0.15) ,rgba(14, 10, 155, 0.95))'}}>
      <Container>
        <Typography variant="h4" align="center" sx={{ marginBottom: '40px', color: '#333' }}>
          Get in Touch
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" sx={{ marginBottom: '10px', color: '#333' }}>
                  Contact Information
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: '10px', color: '#666' }}>
                  Address: 123 Main Street, Cityville, Country
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: '10px', color: '#666' }}>
                  Email: info@example.com
                </Typography>
                <Typography variant="subtitle2" sx={{ marginBottom: '10px', color: '#666' }}>
                  Phone: +1 (123) 456-7890
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}>
              {/* Set background color here */}
              <CardContent>
                <Typography variant="h6" sx={{ marginBottom: '10px', color: '#333' }}>
                  Send Us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Your Email"
                        variant="outlined"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        label="Your Message"
                        variant="outlined"
                        margin="dense"
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="secondary">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
