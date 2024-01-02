// src/components/Banner.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BannerImage from '../../assets/banner.jpg'; // Replace with your actual banner image path
import { useNavigate } from 'react-router-dom';

const Banner = () => {

const navigate = useNavigate();
    const handleClick=()=>{
        navigate(`/login`)
    }
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
                backgroundImage: `linear-gradient(45deg, 
                    rgba(100, 10, 155, 0.9), 
                    rgba(14, 106, 165, 0.1)),url(${BannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '80px 20px',
                height: '90vh'
            }}
        >
            <Box>
                <Typography variant="h3" component="div" gutterBottom>
                    Welcome to ThinkSolve
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Your go-to platform for asking and answering questions.
                </Typography>
                <Button variant="contained" color="secondary" sx={{marginTop:5}} onClick={handleClick}>
                    Get Started
                </Button>
            </Box>
        </Box>
    );
};

export default Banner;
