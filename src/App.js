import './App.css';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import CallBackSection from './components/CallBackSection';
import BusinessSteps from './components/BusinessSteps';
import Mobile from './components/Mobile';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import {Helmet} from "react-helmet";
const App = () => {
  return (
    <div className="App">


      <Helmet>
        
        <title>rollover</title>
        <meta name="description" content="RollOver Money is a unique invoice and receivable discounting platform. Investors can invest in an invoice basket, similar to mutual funds and REITs. Small businesses can receive financing with ease, while investors earn attractive returns. Join us in revolutionizing the traditional lending process by investing in RollOverMoney today." />
      </Helmet>
      <Navbar />
      <BannerSection />
  
      <CallBackSection />
      <BusinessSteps />
      <Mobile />
      <FAQ />
      <Footer />
    </div> 
  );
}



export default App;
