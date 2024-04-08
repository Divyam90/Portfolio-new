import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import MyWork from './components/mywork/MyWork'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App
