import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const GreetUser = () => {

    const answerSolved = 11;
    return (

        <Grid container spacing={2}>
            {console.log("ajshf hjsg fjhs gfj")}
            {/* First Column */}
            <Grid item xs={12} sm={4}>
                <Paper style={{ padding: 20, textAlign: 'center' }}>
                    <Box sx={{ height: '100px', width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography variant='h6' color="secondary">{answerSolved > 10 ? "Congratulations " : "Hi "}Vikky </Typography>
                        <Typography variant='p' fontSize="small">You Answered more than {answerSolved} questions this year</Typography>
                        <Button color="secondary" size='small' sx={{ width: '50%' }}>View Answers</Button>
                    </Box>
                </Paper>
            </Grid>

            {/* Second Column */}
            <Grid item xs={12} sm={4}>
                <Paper style={{ padding: 20, textAlign: 'center' }}>
                    {/* Content for the second column */}
                    Column 2
                </Paper>
            </Grid>

            {/* Third Column */}
            <Grid item xs={12} sm={4}>
                <Paper style={{ padding: 20, textAlign: 'center' }}>
                    {/* Content for the third column */}
                    Column 3
                </Paper>
            </Grid>
        </Grid>

    )
}

export default GreetUser