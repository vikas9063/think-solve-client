// src/components/Login.js

import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { MdEmail, MdLock } from 'react-icons/md';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { USER_INFO, setUserToLocalStorage } from '../user/Utils';
import { useDispatch } from 'react-redux';
import { doLogin } from '../user/slices/userSlice';
import { setAuthToken } from './../user/slices/authSlice';
import { doLoginUser } from '../services/UserService';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';

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
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        // Add your login logic here using formData
        console.log('Login Data:', formData);
        try {
            let response = await doLoginUser(formData);
            dispatch(setAuthToken(JSON.stringify(response)));
            dispatch(doLogin());
            navigate('/user/dashboard', { state: { message: 'Logged in successfully' } })
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message || "Please enter valid details :")
        } finally {
            setIsLoading(false)
        }

    };

    return isLoading ? <Loader /> : (
        <Container maxWidth="sm" sx={{ marginTop: 10, height: '60vh' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
                Login
            </Typography>
            <Card variant="outlined" sx={{ padding: '50px 20px' }}>
                <AnimatedTextField
                    label="Email"
                    type="email"
                    name="username"
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
                <Box
                    sx={{
                        textAlign: 'center',
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 2 },
                        justifyContent: 'space-around',
                        alignItems: { xs: 'center' }
                    }}
                >
                    <Button type="submit" variant="contained" color="secondary" onClick={handleSubmit}
                        sx={{
                            width: { xs: '150px' }

                        }}
                    >
                        Login
                    </Button>
                    <Box>
                        <Typography variant="p">Don't have an account? </Typography>
                        <NavLink to="/register">Register Here</NavLink>
                    </Box>
                </Box>
            </Card>

        </Container>
    );
};

export default Login;
