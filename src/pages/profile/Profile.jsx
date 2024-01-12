// ProfilePage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Paper, Typography, Avatar, Grid, Box, Button, Card, CardContent, Container, Divider } from '@mui/material';
import profileImg from './../../assets/team2.jpg'
import FolderIcon from '@mui/icons-material/Folder';


const AboutMeCard = ({ name, role, description, avatarSrc }) => {
    return (
      <Card>
        <CardContent>
          <Avatar alt={name} src={avatarSrc} style={{ width: 100, height: 100, marginBottom: 10 }} />
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

const ProfilePage = () => {
    return (
        <Box maxWidth="lg">
            <Paper elevation={3} >
                {/* Background Cover */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${profileImg})`,
                        backgroundSize: 'cover',
                        height: '200px', // adjust height accordingly
                    }}
                />

                {/* Profile Pic and Information */}
                <Grid container spacing={3} style={{ marginTop: '-100px' }}>
                    <Grid item xs={4}>
                        <Avatar alt="Profile Pic" src={profileImg} sx={{ width: 150, height: 150, marginLeft: 5 }} />
                    </Grid>
                    <Grid item xs={8} sx={{ color: "#FFF" }}>
                        <Typography variant="h4">Vikas Kumar</Typography>
                        <Typography variant="subtitle1">Software Engineer</Typography>
                        {/* Add other profile info here */}
                    </Grid>
                </Grid>

                {/* Profession, Location, Joined Date */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', margin: { xs: '0', md: '0px 30%' }, color: '#9003FC' }}>
                        <Box>
                            {/* <Typography variant="h6">Profession</Typography> */}
                            <Avatar sx={{ height: 30, width: 30, backgroundColor: '#9003FC', margin: 'auto' }}>
                                <FolderIcon />
                            </Avatar>

                            <Typography>
                                Software Engineer
                            </Typography>
                        </Box>
                        <Box>
                            {/* <Typography variant="h6">Location</Typography> */}
                            <Avatar sx={{ height: 30, width: 30, backgroundColor: '#9003FC', margin: 'auto' }}>
                                <FolderIcon />
                            </Avatar>
                            <Typography>
                                Your Location
                            </Typography>
                        </Box>
                        <Box>
                            {/* <Typography variant="h6">Joined Date</Typography> */}
                            <Avatar sx={{ height: 30, width: 30, backgroundColor: '#9003FC', margin: 'auto' }}>
                                <FolderIcon />
                            </Avatar>
                            <Typography>
                                January 1, 2020 {/* Replace with the actual joined date */}
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>

                {/* Add more sections with animations as needed */}
            </Paper>

            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', marginTop: '10px', justifyContent: { xs: 'space-around', sm: 'flex-start' } }}>
                <Button color='secondary'>Profile</Button>
                <Button color='secondary'>Followers</Button>
                <Button color='secondary'>Following</Button>
            </Box>

            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <Container>
                            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                            <Divider sx={{marginBottom:3}}>ABOUT</Divider>
                            <AboutMeCard
            name="John Doe"
            role="Software Developer"
            description="Passionate about coding and creating meaningful applications. Currently exploring the world of web development and loving every moment of it."
            avatarSrc="https://example.com/avatar.jpg"
          />
                            </Paper>

                            <Typography variant="h6" gutterBottom>
                                Contacts
                            </Typography>
                            <Paper elevation={3} style={{ padding: '20px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h6">Contact:</Typography>
                                        <Typography variant="body1">(123) 456-7890</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h6">Skype:</Typography>
                                        <Typography variant="body1">john.doe</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h6">Email:</Typography>
                                        <Typography variant="body1">john.doe@example.com</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={4}>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ProfilePage;
