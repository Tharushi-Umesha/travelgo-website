import './App.css'
import Navbar from './components/NavBar'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Service from './sections/Service.jsx'
import Gallery from './sections/Gallery.jsx'
import ContactUs from './sections/ContactUs.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Gallery />
        <ContactUs />
        <Navbar />
        <Footer />
      </div>

    </>
  )
}

export default App
