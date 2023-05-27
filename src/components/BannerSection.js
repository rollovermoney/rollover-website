import { React, useState } from "react";
import "./BannerSection.css";
const BannerSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openlink = () => {
    const url = "https://zeeg.me/rollover/30min";
    window.open(url, "_blank");
  };
  return (
    <>

      <div
        className="container-fluid px-5"
        style={{ backgroundColor: "#121139" }}
      >
        <div className="row pt-5">
          <div className="col-md-8 order-2 order-md-1 ">
            <h1 className="headingtext1">Accelerate Cashflow</h1>
            <h1 className="headingtext2 mb-5">Simplify Financing</h1>
            <p className="description mb-5">
              with our finance analytics dashboard, catch hold the weakness of your businesses, manage finances, track, analyse and improve cashflows for better liquidity.
            </p>
            <div className="row">
              <button className="bookbtn mb-5 mb-sm-0 " onClick={openlink}>
                Get on a call
              </button>

            </div>
            {/* <h1 className="onlysaas">THE ONLY <span style={{ color: "#F4933C" }}>SaaS</span>  YOU NEED TO UNDERSTAND BUSINESS HEALTH</h1> */}

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
