import React from "react";
import "./BusinessSteps.css";

const BusinessSteps = () => {
  return (
    <div className="container-fluid py-5" style={{ background: "#121139" ,}}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h5 className="businessHeading">
            Delivering value in every <br /> step of production
          </h5>
          <div className="py-5 my-5">
            <h6 className="stepsHeading">For Businesses</h6>
            <p className="stepspara ">
              A 3 step easy process once you are onboarded to help you get
              access to easy credit to fund your working capital needs.
            </p>
            <h5 className="lsoon">LAUNCHING SOON</h5>
          </div>
      
            <div className="col-md-12 d-flex flex-wrap flex-sm-nowrap" >
              <div className="stepsBox">
                <img height="50px" src="/images/upload.png" ></img>
                <span>Integrate ERP & Upload Invoice</span>
                <p>1</p>
              </div>
              <div className="stepsBox">
                <img height="50px" src="/images/chart.png" ></img>
                <span className="text-center">Analysis & Verification</span>
                <p>2</p>
              </div>
              <div className="stepsBox">
                <img height="50px" src="/images/money.png" ></img>
                <span >Fund Transfer</span>
                <p>3</p>
              </div>
            </div>
           

        </div>
        
        <div className="col-md-3"></div>
       
      </div>
     
    </div>
    
  );
};

export default BusinessSteps;
