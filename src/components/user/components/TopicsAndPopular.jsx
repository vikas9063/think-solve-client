import { Avatar, Box, Button, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import AnimatedBarChart from './AnimatedBarChart';
import TuneIcon from '@mui/icons-material/Tune';
import image from './../../../assets/team2.jpg'
import { BsArrowRightCircleFill } from "react-icons/bs";


const data = [
    { label: 'Apple', value: 10, color: 'blue' },
    { label: 'Banana', value: 20, color: 'red' },

    { label: 'Ckjashjsh', value: 15, color: 'green' },
    { label: 'D', value: 35, color: 'voilet' },
    { label: 'E', value: 5, color: 'pink' },
    { label: 'F', value: 20, color: 'purple' },
    // Add more data as needed
];


const PersonsData = {
title:'Popular Instructors',
header:['Instructors','Followers'],
isTopicPostRanking:false,
data:[
        {
            imageIcon:image,
            name:'Vikas Kumar',
            value:'356',
            subtitle:'Software Engineer'
        },
        {
            imageIcon:'hjagfhg  ',
            name:'Vikas Kumar',
            value:'356',
            subtitle:'Software Engineer'
        },
        {
            imageIcon:image,
            name:'Vikas Kumar',
            value:'356',
            subtitle:'Software Engineer'
        },
        {
            imageIcon:image,
            name:'Vikas Kumar',
            value:'356',
            subtitle:'Software Engineer'
        }
    ]

}






const PersonsCom = (props) => {
    const value = props.data;

    return (<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px 4px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {console.log(value)}
            {/* <Avatar
                alt="Remy Sharp"
                src={image}
                sx={{ width: 46, height: 46 }}
            /> */}

            <Avatar>
                <img src={value?.imageIcon} alt='dshfj' style={{height:'46px', width:'46px'}} />
            </Avatar>
          
            <Box>
                <Typography variant='p' sx={{fontWeight:'15px'}}>{value.name}</Typography><br/>
                <Typography variant='p' sx={{fontSize:'12px'}}>{value.subtitle}</Typography>
            </Box>
        </Box>
        <Box>
            <Typography variant='h6 '>{value.value}</Typography>
            <BsArrowRightCircleFill style={{margin:'0px 10px', color:'#9003fc'}} />
        </Box>
        
    </Box>)
}

export const PopularPersons = (props) => {
    const personsData=props.cardData;
    return (
   
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom:'3px'}}>
                    <Typography variant='h6'>{personsData?.title}</Typography>
                    <TuneIcon fontSize='small' />
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '4px' }}>
                    <Typography variant='p' color="secondary">{personsData.header[0]}</Typography>
                    <Typography variant='p' color="secondary">{personsData.header[1]}</Typography>
                </Box>
                <Divider />
                <Box>
                    {
                        personsData.data.map((person,index)=>{
                            return <PersonsCom  data={person} index={index}/>
                        })
                    }    
                </Box>    
                {personsData.isTopicPostRanking && <Box sx={{paddingTop:{xs:'40px',sm:'0px'}}}>
                    <Button color='secondary'>View All</Button>
                </Box>}      
                
            </Box>
        
    )

}

const TopicsAndPopular = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ marginTop: '5px' }}>
                <Grid item xs={12} sm={8}>
                    <Paper style={{ padding: 15, textAlign: 'center', height: {xs:'450px',sm:'450px',md:'450px'} }}>
                        <Box>                            
                            <AnimatedBarChart data={data} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper style={{ padding: 15, textAlign: 'center', height: {xs:'450px',sm:'450px',md:'450px'} }}>
                        <PopularPersons cardData={PersonsData}/>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default TopicsAndPopular