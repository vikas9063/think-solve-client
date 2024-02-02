import { Box, Typography } from '@mui/material'
import React from 'react'
import { RotatingSquare } from 'react-loader-spinner'

const Loader = () => {
    return (
       <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'90vh'}}>
         <RotatingSquare
            visible={true}
            height="100"
            width="100"
            color="#7D0A7E"
            ariaLabel="rotating-square-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
        <Typography variant='h5'>Please Wait ...</Typography>
       </Box>
    )
}

export default Loader