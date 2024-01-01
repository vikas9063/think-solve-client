import React from 'react'
import Sidebar from './sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/system'
import { useMediaQuery } from '@mui/material'

const Authlayout = () => {

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={{
      marginLeft: '10%',
      marginTop: isSmallScreen ? '10%' : '5%',
    }}>
      <Outlet />
    </Box>
  )
}

export default Authlayout