import { React, useState } from "react";
import "./BannerSection.css";
import CustomForm from "./newsletter";
import WaitList from "./waitlist";
const BannerSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openlink = () => {
    const url = "https://zeeg.me/rollover/30min";
    window.open(url, "_blank");
  };
  return (
    <>
      {/* <div class="container">
        <div style={{ marginTop: "-220px", marginLeft: "-100px" }}>
          <div className="content">
            Accelerate Cashflow
            <div className='content-simplify'>
              Simplify Financing</div>
          </div>
        </div>
        <div class="landingimage">
          <img src={img1} />
        </div>
        <div className='content-landing'>
          start unlocking the value of your invoices.
          Get the cash you need,<br></br> when you need  it,and invest in your business's future.
          It's time to   <br></br>take control of your finances and reach your full potential.
        </div>
      </div>

      <div className='container'>
        <button className="btn">
          book consultation

        </button>
        <div className='getcredit'>
        Get Credit on the Go
        </div>
      </div> */}

      <div
        className="container-fluid px-5"
        style={{ backgroundColor: "#121139" }}
      >
        <div className="row pt-5">
          <div className="col-md-8 order-2 order-md-1 ">
            <h1 className="headingtext1">Accelerate Cashflow</h1>
            <h1 className="headingtext2 mb-5">Simplify Financing</h1>
            <p className="description mb-5">
              start unlocking the value of your invoices. Get the cash you need,
              when you need it, and invest in your business's future. It's time
              to take control of your finances and reach your full potential.
            </p>
            <div className="row">
              <button className="bookbtn mb-5 mb-sm-0 " onClick={openlink}>
              Get on a call
              </button>
             
              <div className="col creditText">
                <span>
                  Get Credit on the Go <br></br>without collateral
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3 order-1 order-md-2">
            <img className="bannerImage" src="/images/img1.png"></img>
          </div>
        </div>

        <div className="row logolist pb-5">
          {/* <img className="col mb-3" width="236px" src="/images/Logo 2.svg"></img>
          <img className="col mb-3" width="100px" src="/images/Logo.svg"></img>
          <img className="col mb-3" width="120px" src="/images/Logo 4.svg"></img>
          <img className="col mb-3" width="100px" src="/images/Logo 3.svg"></img> */}
        </div>
      </div>
    </>
  );
};

export default BannerSection;
