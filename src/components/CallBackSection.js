import { React, useState } from "react";
import "./CallBack.css";
import WaitList from "./waitlist";

const CallBackSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <h5 className="section2Heading py-2">looking for instant Credit ?</h5>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <p className="section2Para">
            Our team is dedicated to providing personalized support and guidance
            every step of the way. With flexible repayment terms and competitive
            interest rates, you can rest assured that you're getting the best
            value for your money.
          </p>
        </div>
        <div className="col-md-2"></div>

        <div className="d-flex justify-content-center py-5 mb-5">
          <button className="btn callbtn" onClick={() => setShowPopup(true)}>
            Reach out to us
          </button>
          {showPopup && (
            <div className="popup">
              <div className="popup-inner">
                <WaitList />
                <button
                  onClick={() => setShowPopup(false)}
                  className="closepopup"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallBackSection;
