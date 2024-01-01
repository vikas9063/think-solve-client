// src/components/Login.js

import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { MdEmail, MdLock } from 'react-icons/md';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { USER_INFO, setUserToLocalStorage } from '../user/Utils';

const AnimatedTextField = ({ label, type, name, value, onChange, icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                {icon}
                <TextField
                    fullWidth
                    label={label}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    margin="dense"
                />
            </Box>
        </motion.div>
    );
};

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here using formData
        console.log('Login Data:', formData);
        setUserToLocalStorage(formData)
        navigate('/user/dashboard')
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: 10 }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
                Login
            </Typography>
            <Card variant="outlined" sx={{ padding: '20px' }}>
                <AnimatedTextField
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    icon={<MdEmail size={24} style={{ marginRight: '10px' }} />}
                />
                <AnimatedTextField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    icon={<MdLock size={24} style={{ marginRight: '10px' }} />}
                />
                <Box sx={{ textAlign: 'center', marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Login
                    </Button>
                    <Box>
                        <Typography variant='p'>Don't have account </Typography> <NavLink to="/register" >Register Here</NavLink>
                    </Box>
                </Box>
            </Card>

        </Container>
    );
};

export default Login;
