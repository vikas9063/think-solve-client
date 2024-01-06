import { Avatar, Button, Card, CardContent, CardHeader, CircularProgress, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import f12 from './../../../assets/f1.png'
import { FcQuestions, FcCustomerSupport, FcClock } from "react-icons/fc";
import PageviewIcon from '@mui/icons-material/Pageview';


// import './style.css'


const GreetUserCards = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: '#9003fc' }}>
                        <PageviewIcon />
                    </Avatar>
                </Box>
                <Box>
                    <Typography variant='p'>Hours Spent</Typography>
                    <Typography variant='h5'>122 hrs</Typography>
                </Box>
            </Box>
        </>
    )
}


const GreetUser = () => {

    const answerSolved = 11;
    return (

        <Grid container spacing={2}>

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

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: { xs: 5, sm: 1 } }}>
                        <GreetUserCards />
                        <GreetUserCards />
                        <GreetUserCards />
                    </Box>

                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Paper style={{ width: '100%', textAlign: 'center', height: '30vh', padding: '15px 5px' }}>
                    <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'space-around' }}>
                        <Box sx={{ margin: { xs: '35px 5px', sm: '15px 0px' } }}>
                            <Typography color="secondary" variant='h5'>Time Spend</Typography>
                            <Typography color="" variant='p'>Weekly Report</Typography>
                            <Typography color="" variant='h4'>1250 Hrs</Typography>

                        </Box>
                        <Box sx={{ marginTop: { xs: '15px', sm: '5px' } }}>
                            <Box sx={{ position: 'relative', textAlign: 'center' }}>
                                <CircularProgress color='secondary' size={150} variant='determinate' value={66.67}>2 / 3</CircularProgress>
                                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                    <Typography variant="h5" color="secondary">
                                        231H
                                    </Typography>
                                    <Typography variant="p" color="">
                                        Total
                                    </Typography>
                                </Box>

                            </Box>


                        </Box>
                    </Box>
                </Paper>


            </Grid>
        </Grid>

    )
}

export default GreetUser