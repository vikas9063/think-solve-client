
import './App.css'
import AboutUsSection from './components/aboutus/AboutUs'
import Banner from './components/banner/Banner'
import ContactSection from './components/contact/ContactSection'
import FeaturesSection from './components/features/FeaturesSection'
import Footer from './components/footer/Footer'
import HowItWorksSection from './components/howitworks/HowItWork'
import MyAppBar from './components/navbar/MyAppBar'
import NewsSection from './components/news/NewsSection'
import TestimonialSection from './components/testimonial/TestimonialSection'

function App() {
  

  return (
    <>
      <MyAppBar />
      <Banner />
      <FeaturesSection />
      <AboutUsSection />
      <HowItWorksSection/>
      <NewsSection />
      <TestimonialSection />
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
