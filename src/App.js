import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import CallBackSection from './components/CallBackSection';
import BusinessSteps from './components/BusinessSteps';
import Mobile from './components/Mobile';
import Footer from './components/Footer';
import PrivacyPolicyPage from './components/Privacypolicy';
import TermsConditionsPage from "./components/TNC"
import CancellationPolicyPage from './components/Cancellationpolicy';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>rollover money</title>
          <meta name="description" content="RollOver Money is a unique invoice and receivable discounting platform. Investors can invest in an invoice basket, similar to mutual funds and REITs. Small businesses can receive financing with ease, while investors earn attractive returns. Join us in revolutionizing the traditional lending process by investing in RollOverMoney today." />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-condition" element={<TermsConditionsPage />} />
          <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <BannerSection />
       <CallBackSection />
      <BusinessSteps />
      <Mobile />
     
     
    </>
  );
};

export default App;
