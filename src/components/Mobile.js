import React, { useEffect, useState } from "react";
import DonutChart from "./DonutChart";
import "./Mobile.css";
import RangeField from "./RangeField";
import AOS from "aos";
import "aos/dist/aos.css";

const Mobile = () => {
  const [price, setPrice] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [period, setPeriod] = useState(5);
  const [estReturn, setEstReturn] = useState(0);

  useEffect(() => {
    setEstReturn(price * (returnRate / 100));
    AOS.init();
  }, [price, returnRate, estReturn]);

  const url2 = "https://api.whatsapp.com/send?phone=9650830027";
  const openlink = () => {
    const url = "https://zeeg.me/rollover/30min";
    window.open(url, "_blank");
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
            <h6 className="invoicingText my-0" >
              Analytics Dashboard
            </h6>
            <p className="invoicingPara my-5">
              Easily track your invoice, payable and receivables and also, raise
              invoice using our invoicing software and get better discounting
              rates and faster approvals.
            </p>

            <div className="my-5 position-relative">
              <img className="macImg" src="/images/macdash.jpeg"></img>
            </div>

            <div className="d-flex d-sm-none div1macpoints my-0" data-aos="fade-up">
              upto 50% less approval time
            </div>
            <div className="d-flex d-sm-none div1macpoints mb-0" data-aos="fade-up">
              better discounting rates on invoices
            </div>
            <div className="d-flex d-sm-none div1macpoints mb-4" data-aos="fade-up">
              earn commission on referral
            </div>

            <div className="MacPointsDiv1 d-none d-sm-flex" data-aos="fade-up" data-aos-offset="300">
              upto 50% less approval time
            </div>
            <div className="MacPointsDiv2 d-none d-sm-flex" data-aos="fade-up" data-aos-offset="300">
              better discounting rates on invoices
            </div>
            <div className="MacPointsDiv3 d-none d-sm-flex" data-aos="fade-up" data-aos-offset="300">
              earn commission on referral
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Mobile;
