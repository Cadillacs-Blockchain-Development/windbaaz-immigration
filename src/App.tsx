import './App.css';
import Carousel from './components/corousel/slider/Carousel';
// import Carousel from './components/corousel/Corousel'
import CustomerServices from './components/CustomerServices';
import Footer from './components/footer/Footer';
import Immigration from './components/immigration-section/Immigration';
import MeetingSection from './components/meeting-section/MeetingSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* Navbar Section */}
      <div className="sticky top-0 z-[99999] bg-white ">
        <Navbar />
      </div>

      {/* Content Section */}
      <div className="">
        <Carousel />
        <CustomerServices />
        <Immigration />
        <MeetingSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
