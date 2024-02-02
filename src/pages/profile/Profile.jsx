// ProfilePage.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Paper, Typography, Avatar, Grid, Box, Button, Card, CardContent, Container, Divider } from '@mui/material';
import profileImg from './../../assets/default_user.jpg'
import locationGif from './../../assets/location.gif'
import workerGif from './../../assets/worker.gif'
import clockGif from './../../assets/clock.gif'
import { FcBusinessman, FcTreeStructure, FcSupport, FcGlobe, FcAssistant, FcCallback, FcFeedback } from "react-icons/fc";
import CustomizedTimeline from './CustomizedTimeline';
import OverviewSection from './OverviewSection';
import { userProfileInfo } from '../../components/services/UserService';
import { useSelector } from 'react-redux';
import { selectAuthToken } from '../../components/user/slices/authSlice'
import Loader from '../../components/loader/Loader';


const activities = [
    { title: 'Meeting with Team', date: '2024-01-20', description: 'Discuss project updates', type: 'event' },
    { title: 'Client Call', date: '2024-01-22', description: 'Review project requirements', type: 'task' },
    // Add more activities as needed
];
const userStats = {
    followers: 500,
    following: 200,
    answersPosted: 100,
    questionsRaised: 50,
};


const AboutDesign = (props) => {
    const { aboutIcon, aboutHeader, aboutValue } = props.about;
    return (
        <>
            <Box sx={{ display: 'flex', gap: 1, margin: '15px 0px', alignItems: 'center' }}>
                {aboutIcon}
                <Typography variant='p' fontWeight='bold'>{aboutHeader} : </Typography>
                <Typography variant='p'>{aboutValue}</Typography>
            </Box>
        </>
    )
}

const BelowCards = (props) => {
    const {profileData} = props;
    const AboutValues = [
        {
            "aboutHeader": "FullName",
            "aboutValue": profileData?.userFName+" "+profileData?.userLName,
            "aboutIcon": <FcBusinessman />
        },
        {
            "aboutHeader": "Status",
            "aboutValue": profileData?.userStatus ? "Active":"Not Active",
            "aboutIcon": <FcTreeStructure />
        },
        {
            "aboutHeader": "Role",
            "aboutValue": profileData?.userDesignation[0]?.designation,
            "aboutIcon": <FcSupport />
        },
        {
            "aboutHeader": "Country",
            "aboutValue": profileData?.otherDetails?.country,
            "aboutIcon": <FcGlobe />
        },
        {
            "aboutHeader": "Languages",
            "aboutValue": profileData?.otherDetails?.languagesKnow,
            "aboutIcon": <FcAssistant />
        },
    ]
    
    const ContactValues = [
        {
            "aboutHeader": "Phone",
            "aboutValue": profileData?.mobileNo,
            "aboutIcon": <FcCallback />
        },
        {
            "aboutHeader": "Email",
            "aboutValue": profileData?.userEmail,
            "aboutIcon": <FcFeedback />
        },
    
    ]
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ padding: '10px 25px' }}>
                        <Typography variant="p" color="secondary" >About</Typography>
                        <Divider sx={{ margin: '5px 0px' }} />
                        {AboutValues.map((about, index) => {
                            return (
                                <AboutDesign key={index} about={about} />
                            );
                        })}
                        <Typography variant="p" color="secondary" sx={{}}>Contact</Typography>
                        <Divider sx={{ margin: '5px 0px' }} />
                        {ContactValues.map((about, index) => {
                            return (
                                <AboutDesign key={index} about={about} />
                            );
                        })}
                        <Typography variant="p" color="secondary" sx={{}}>Designation</Typography>
                        <Divider sx={{ margin: '5px 0px' }} />
                        <Box sx={{ display: 'flex', gap: 2, margin: '15px 0px' }}>
                            <Typography variant='p' fontWeight='bold'>Designation : </Typography>
                            <Typography variant='p'>{profileData?.userDesignation[0]?.designation}</Typography>
                        </Box>
                    </Paper>
                </Grid>


                <Grid item md={8}>
                    <Paper sx={{ padding: '10px 25px' }}>
                        <Typography variant='p' color="secondary">Activity TimeLine</Typography>
                        <Divider sx={{ margin: '5px 0px' }} />
                        <CustomizedTimeline activities={activities} />
                    </Paper>

                </Grid>
            </Grid>
        </>
    )
}

const ProfilePage = () => {

    const userFromStore = useSelector(selectAuthToken);
    const username = JSON.parse(userFromStore)?.username;
    const [isLoading, setIsLoading] = useState(false);
    const [profileData,setProfileData] = useState(null);
    const [image , setImage] = useState(null)
    const fetchUserInfo = async () => {
        try {
            const user = await userProfileInfo(username);
            setProfileData(user.userInfo);
            setImage(user.userInfo.profile.imageBase64);
        } catch (error) {
            console.log("User not loaded ...");
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        setIsLoading(true);
        fetchUserInfo();
    }, [username]);
    return isLoading ? <Loader /> :(
        <Box maxWidth="lg">
            {console.log(username)}
            <Paper elevation={3}>
                {/* Background Cover */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${image ? "data:image/png;base64,"+image: profileImg})`,
                        backgroundSize: 'cover',
                        height: '200px', // adjust height accordingly
                    }}
                />

                {/* Profile Pic and Information */}
                <Grid container spacing={3} style={{ marginTop: '-100px' }}>
                    <Grid item xs={4}>
                        <Avatar alt="Profile Pic"
                        src={image ? "data:image/png;base64,"+image: profileImg} sx={{ width: 150, height: 150, marginLeft: 5 }} />
                    </Grid>
                    <Grid item xs={8} sx={{ color: "#FFF" }}>
                        <Typography variant="h4">{profileData?.userFName}-{profileData?.userLName}</Typography>
                        <Typography variant="subtitle1">{profileData?.userDesignation[0].designation}</Typography>
                        {/* Add other profile info here */}
                    </Grid>
                </Grid>

                {/* Profession, Location, Joined Date */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', margin: { xs: '0', md: '0px 30%' }, padding: '10px 5px' }}>
                        <Box>
                            {/* <Typography variant="h6">Profession</Typography> */}
                            <Avatar sx={{ margin: 'auto' }} src={workerGif} />

                            <Typography>
                            {profileData?.userDesignation[0].designation}
                            </Typography>
                        </Box>
                        <Box>
                            {/* <Typography variant="h6">Location</Typography> */}

                            <Avatar alt="Remy Sharp" src={locationGif} sx={{ margin: 'auto' }} />
                            <Typography>
                            {profileData?.otherDetails?.country}
                            </Typography>
                        </Box>
                        <Box>
                            {/* <Typography variant="h6">Joined Date</Typography> */}
                            <Avatar sx={{ margin: 'auto' }} src={clockGif} />
                            <Typography>
                                {profileData?.userRegDate}{/* Replace with the actual joined date */}
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>

                {/* Add more sections with animations as needed */}
            </Paper>

            <OverviewSection {...userStats} />
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', margin: '10px 0px', justifyContent: { xs: 'space-around', sm: 'flex-start' } }}>
                <Button color='secondary'>Profile</Button>
                <Button color='secondary'>Followers</Button>
                <Button color='secondary'>Following</Button>
            </Box>

            <BelowCards profileData = {profileData}/>
        </Box>


    );
};

export default ProfilePage;
