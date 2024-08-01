import './App.css'
import Carousel from './components/corousel/Corousel'
import CustomerServices from './components/CustomerServices'
import Footer from './components/footer/Footer'
import Immigration from './components/immigration-section/Immigration'
import MeetingSection from './components/meeting-section/MeetingSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
        <Carousel />
      <CustomerServices />
      <Immigration/> 
       <MeetingSection/>
       <Footer/>  
    </>
  )
}

export default App
