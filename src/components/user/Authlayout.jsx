import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import { useMediaQuery } from '@mui/material'

const Authlayout = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
   <Sidebar />
  )
}

export default Authlayout