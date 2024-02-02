import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './Theme.js'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import LocomotiveScroll from 'locomotive-scroll';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

const scroll = new LocomotiveScroll();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer />
    </ThemeProvider>
  </Provider>
)
