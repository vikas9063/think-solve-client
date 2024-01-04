// src/components/Register.js

import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, TextField, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { MdPerson, MdEmail, MdLock, MdCode, MdDescription } from 'react-icons/md';
import { SupervisedUserCircleRounded } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const AnimatedTextField = ({ label, name, value, onChange, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        {icon}
        <TextField
          fullWidth
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          margin="dense"
        />
      </Box>
    </motion.div>
  );
};

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    technologyKnows: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here using formData
    console.log('Form Data:', formData);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
        Register
      </Typography>
      <Card variant="outlined" sx={{ padding: '20px 20px', margin: '15px 0px' }}>
        <AnimatePresence>
          {Object.keys(formData).map((key) => (
            <AnimatedTextField
              key={key}
              label={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              icon={getIcon(key)}
            />
          ))}
        </AnimatePresence>
        <Box
                    sx={{
                        textAlign: 'center',
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap:{xs:2},
                        justifyContent: 'space-around',
                        alignItems:{xs:'center'}
                    }}
                >
                    <Button type="submit" variant="contained" color="secondary" onClick={handleSubmit}
                    sx={{
                        width:{xs:'150px'}

                    }}
                    >
                        Register
                    </Button>
                    <Box>
                        <Typography variant="p">Already have an account? </Typography>
                        <NavLink to="/login">Login Here</NavLink>
                    </Box>
                </Box>
      </Card>

    </Container>
  );
};

// Helper function to get appropriate icon for each field
const getIcon = (fieldName) => {
  switch (fieldName) {
    case 'name':
      return <MdPerson size={24} style={{ marginRight: '10px' }} />;
    case 'email':
      return <MdEmail size={24} style={{ marginRight: '10px' }} />;
    case 'password':
      return <MdLock size={24} style={{ marginRight: '10px' }} />;
    case 'technologyKnows':
      return <MdCode size={24} style={{ marginRight: '10px' }} />;
    case 'description':
      return <MdDescription size={24} style={{ marginRight: '10px' }} />;
    default:
      return null;
  }
};

export default Register;
