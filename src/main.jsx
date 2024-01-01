import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './Theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
