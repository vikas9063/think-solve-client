import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Grid,
  Radio,
} from '@mui/material';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';
import {
  MdPerson,
  MdEmail,
  MdLock,
  MdDescription,
  MdPhone,
} from 'react-icons/md';
import { SupervisedUserCircleRounded } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import { createUser } from '../services/UserService';
import { useDispatch } from 'react-redux';
import { setAuthToken } from './../user/slices/authSlice';
import { doLogin } from '../user/slices/userSlice';
import { toast } from 'react-toastify';

const AnimatedTextField = ({ label, name, value, onChange, icon, type = 'text' }) => {
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
          type={type}
        />
      </Box>
    </motion.div>
  );
};



const Register = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    userFName: '',
    userLName: '',
    userEmail: '',
    password: '',
    userGender: 'male',
    mobileNo: '',
    userDesc: '',
  });

  const handleChange = (e) => {
    const { name, value,} = e.target;
    setFormData((prevData) => ({     
      ...prevData,
      [name]:  value,      
    }));
  };

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Add your registration logic here using formData
      console.log('Form Data:', formData);
      const response = await createUser(formData);
      console.log(response);
      dispatch(setAuthToken(JSON.stringify(response)));
      dispatch(doLogin());
      navigate("/user/dashboard", {state: response})
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      let errorMessagesString = error.response.data.message;
      let errorMessagesArray = errorMessagesString.split(",");
      
      toast.error("Please enter valid details :")
      errorMessagesArray.map(key=>{
        toast.error(key)
      })
    } finally {
      setIsLoading(false);
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  return isLoading ? <Loader /> : (
    <Container sx={{ marginTop: 10, width:{sm:'100%', md:'60%'}}}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
        Register
      </Typography>
      <Card variant="outlined" sx={{ padding: '20px 20px', margin: '15px 0px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AnimatePresence>
              {[{
                label:'First Name',
                name:'userFName',
                type:'text'
              },
              {
                label:'Last Name',
                name:'userLName',
                type:'text'
              } ,
              
              {
                label:'Email',
                name:'userEmail',
                type:'email'
              },              
             ].map((key) => (
                <AnimatedTextField
                  key={key.label}
                  label={key.label}
                  name={key.name}
                  value={formData[key]}
                  onChange={handleChange}
                  icon={getIcon(key)}
                  type={key.type}
                />
              ))}
              <Box sx={{ display: 'flex', alignItems: "center", gap: 2 }}>
              <SupervisedUserCircleRounded size={24} style={{ marginRight: '10px' }} />
                {/* <Typography >Gender</Typography> */}
                <RadioGroup                 
                  value={formData.gender}
                  onChange={handleChange}
                  row
                  sx={{ marginBottom: '10px', marginTop:1 }}
                >
                  <FormControlLabel
                    value="male" name="userGender"
                    control={<Radio color="primary" />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female" name="userGender"
                    control={<Radio color="primary" />}
                    label="Female"
                  />
                </RadioGroup>
              </Box>
            </AnimatePresence>
          </Grid>
          <Grid item xs={12} md={6}>
            <AnimatePresence>
              {[{
                label:'Password',
                name:'password',
                type:'password'
              } ,
              {
                label:'Mobile No',
                name:'mobileNo',
                type:'text'
              } ,
              {
                label:'Description',
                name:'userDesc',
                type:'text-area'
              } ,].map((key) => (
                <AnimatedTextField
                  key={key.label}
                  label={key.label}
                  name={key.name}
                  value={formData[key.name]}
                  onChange={handleChange}
                  icon={getIcon(key)}
                  type={key.type}
                />
              ))}
            </AnimatePresence>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: 'center',
            marginTop: '20px',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2 },
            justifyContent: 'space-around',
            alignItems: { xs: 'center' },
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            sx={{
              width: { xs: '150px' },
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

// Helper function to get the appropriate icon for each field
const getIcon = (fieldName) => {
  switch (fieldName) {
    case 'firstName':
      return <MdPerson size={24} style={{ marginRight: '10px' }} />;
    case 'lastName':
      return <MdPerson size={24} style={{ marginRight: '10px' }} />;
    case 'email':
      return <MdEmail size={24} style={{ marginRight: '10px' }} />;
    case 'password':
      return <MdLock size={24} style={{ marginRight: '10px' }} />;
    case 'gender':
      return <SupervisedUserCircleRounded size={24} style={{ marginRight: '10px' }} />;
    case 'mobileNo':
      return <MdPhone size={24} style={{ marginRight: '10px' }} />;
    case 'description':
      return <MdDescription size={24} style={{ marginRight: '10px' }} />;
    default:
      return null;
  }
};

export default Register;