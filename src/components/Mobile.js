import React, { useEffect, useState } from "react";
import DonutChart from "./DonutChart";
import "./Mobile.css";
import RangeField from "./RangeField";
import AOS from "aos";
import "aos/dist/aos.css";
import WaitList from "./waitlist";

const Mobile = () => {
  const [price, setPrice] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [period, setPeriod] = useState(5);
  const [estReturn, setEstReturn] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setEstReturn(price * (returnRate / 100));
    AOS.init();
  }, [price, returnRate, estReturn]);

  const handleJoinWaitlist = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h3 className="investorText"></h3>
          {/* <p className="launch">Mobile App Launching Soon!</p> */}
        </div>
      </div>

      <div className="row p-0" style={{ backgroundColor: "white" }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 position-relative">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h6 className="invoicingText my-0">Analytics Dashboard</h6>
            <p className="invoicingPara my-5">
              Welcome to RolloverMoney, your one-stop solution for intelligent financial management. We understand the importance of maximizing your hard-earned money and making it work for you. With RolloverMoney, you can take control of your finances, plan for the future, and secure your financial well-being.
            </p>
            <button
              className="bookbtn2 mb-5 mb-sm-0"
             
              data-aos="zoom-in"
            >
              Join Waitlist
            </button>

            {showPopup && (
              <div className="popup">
                <div className="popup-inner">
                  <WaitList />
                  <button onClick={handleClosePopup} className="closepopup">
                    Close
                  </button>
                </div>
              </div>
            )}

            <div className="my-5 position-relative">
              <img className="macImg" src="/images/macdash.jpeg" alt="Mac Dashboard" />
            </div>

            <div className="d-flex d-sm-none div1macpoints my-0" data-aos="fade-up">
              Sync with your existing ERP
            </div>
            <div className="d-flex d-sm-none div1macpoints mb-0" data-aos="fade-up">
              Invoicing made simple
            </div>
            <div className="d-flex d-sm-none div1macpoints mb-4" data-aos="fade-up">
              Analytics that is easy to understand
            </div>

            <div className="MacPointsDiv1 d-none d-sm-flex" data-aos="fade-up" data-aos-offset="300">
              Sync with your existing ERP
            </div>
            <div className="MacPointsDiv2 d-none d-sm-flex" data-aos="fade-up" data-aos-offset="300">
              Invoicing made simple
            </div>
            <div className="MacPointsDiv3 d-none d-sm-flex" data-aos="fade-up" data-aos-offset="300">
              Analytics that is easy to understand
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Mobile;
