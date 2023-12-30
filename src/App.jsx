
import './App.css'
import AboutUsSection from './components/aboutus/AboutUs'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Banner from './components/banner/Banner'
import ContactSection from './components/contact/ContactSection'
import FeaturesSection from './components/features/FeaturesSection'
import Footer from './components/footer/Footer'
import HowItWorksSection from './components/howitworks/HowItWork'
import MyAppBar from './components/navbar/MyAppBar'
import NewsSection from './components/news/NewsSection'
import TestimonialSection from './components/testimonial/TestimonialSection'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/user/dashboard/Dashboard'


const HomeElement = ()=>{
  return(
    <>
        <Banner />
        <FeaturesSection />
        <AboutUsSection />
        <HowItWorksSection />
        <NewsSection />
        <TestimonialSection />
        <ContactSection />
      </> 
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeElement />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {


  return (
    <>
      <MyAppBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
