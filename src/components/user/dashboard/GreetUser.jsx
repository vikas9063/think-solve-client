import { Button, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import f12 from './../../../assets/f1.png'
import { FcQuestions,FcCustomerSupport,FcClock } from "react-icons/fc";




const GreetUser = () => {

    const answerSolved = 11;
    return (

        <Grid container spacing={2}>
            {console.log("ajshf hjsg fjhs gfj")}
            {/* First Column */}
            <Grid item xs={12} sm={8}>
                <Paper style={{ padding: 15, textAlign: 'center', height: '30vh' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>

                        {/* Greet User Start */}
                        <Box sx={{ height: '60px', width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <Typography variant='h6' color="secondary">{answerSolved > 10 ? "Congratulations " : "Hi "}Vikky </Typography>
                            <Typography variant='p' fontSize="small">You Answered more than {answerSolved} questions this year</Typography>
                            <Button color="secondary" size='small' sx={{ width: '50%' }}>View Answers</Button>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '15%' }}>
                            <img src={f12} alt="gdsjhgfjhds" style={{
                                height: '100px',
                                width: '100px', objectFit: 'cover'
                            }} />
                        </Box>
                        {/* Greet User End */}
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: { xs: 10, sm: 1 } }}>
                        <Box>
                            <FcClock style={{fontSize:'30'}}/>
                            <Typography variant='p'>Hours Spent</Typography>
                        </Box>
                        <Box>
                            <Typography variant='p'>Hours Spent</Typography>
                        </Box>
                        <Box>
                            <Typography variant='p'>Hours Spent</Typography>
                        </Box>
                    </Box>

                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{
                        width: '50%',
                        height: '90px',
                        margin: '2px'

                    }}>
                        <Card>
                            <CardContent>
                                <FcQuestions style={{ fontSize: '20px', textAlign: 'center' }} /><br />
                                <Typography variant='p' sx={{ fontSize: 'small' }}>Questions Solved</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{
                        width: '50%',
                        height: '90px',
                        margin: '2px'
                    }}>
                        <Card>
                            <CardContent>
                                <FcCustomerSupport style={{ fontSize: '20px', textAlign: 'center' }} /><br />
                                <Typography variant='p' sx={{ fontSize: 'small' }}>Interviews Attended</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>

            </Grid>
        </Grid>

    )
}

export default GreetUser