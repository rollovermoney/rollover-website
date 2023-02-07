import './App.css';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import CallBackSection from './components/CallBackSection';
import BusinessSteps from './components/BusinessSteps';
import Mobile from './components/Mobile';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BannerSection />
      <CallBackSection />
      <BusinessSteps />
      <Mobile />
      <Footer />
    </div> 
  );
}



export default App;
