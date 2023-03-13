import React, { useEffect, useState } from "react";
import DonutChart from "./DonutChart";
import "./Mobile.css";
import RangeField from "./RangeField";

const Mobile = () => {
  const [price, setPrice] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [period, setPeriod] = useState(5);
  const [estReturn, setEstReturn] = useState(0);

  useEffect(() => {
    setEstReturn(price * (returnRate / 100));
  }, [price, returnRate, estReturn]);

  const url2 = "https://api.whatsapp.com/send?phone=9650830027";

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h3 className="investorText"></h3>
          {/* <p className="launch">Mobile App Launching Soon!</p> */}
        </div>
      </div>

      <div className="row mx-md-5 mainMobileDiv mb-5">
        <div className="col-md-6 intro text-start">
          <h6 className="first">FIRST IN INDIA!</h6>
          <p className="introText">
            Automate your account receivables <br></br> and payable seamlessly
            and <br></br>achieve better cash flows and more<br></br> working
            capital.{" "}
          </p>
          <button className="interestedbtn">
            <a
              href="https://api.whatsapp.com/send?phone=919650830027"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              I AM INTERESTED!
            </a>
          </button>
        </div>

        <div className="mt-5 mt-sm-0 d-block justify-content-center d-md-none position-relative ">
          <img
            className="cover"
            src="/images/iPhone 13 Max - Midnight.png"
          ></img>
          <div>
            <div className="div1mobilepoints m-3">
              Instant credit for working capital
            </div>
            <div className="div1mobilepoints m-3">
              Automate your account receivables and payables
            </div>
            <div className="div1mobilepoints m-3">
              Earn rewards and cashback on timely repayments
            </div>
          </div>
        </div>

        <div className="mobile d-none d-md-flex">
          <img
            className="cover"
            src="/images/iPhone 13 Max - Midnight.png"
          ></img>
          <img className="screen" src="/images/mobile.png"></img>

          <div className="mobilePointsDiv1">
            Instant credit for working capital
          </div>
          <div className="mobilePointsDiv2">
            Automate your account receivables and payables
          </div>
          <div className="mobilePointsDiv3">
            Earn rewards and cashback on timely repayments
          </div>
        </div>
      </div>

      {/* <div className="row py-5 my-5 mx-3   p-md-5 m-md-5  calculationBox">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 mb-5">Monthly Investment</div>
            <div className="col-md-6 mb-5">
              <div className="price">
                {`₹${new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 1,
                }).format(price)}`}
              </div>
            </div>
            <div className="col-12 mb-5">
              <RangeField
                price={price}
                setPrice={setPrice}
                min={1000}
                max={100000}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-5">Expected return rate(p.a)%</div>
            <div className="col-md-6 mb-5">
              <div className="price">{`${returnRate} %`}</div>
            </div>
            <div className="col-12 mb-5" >
              <RangeField
                price={returnRate}
                setPrice={setReturnRate}
                min={1}
                max={100}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-5">Time period (Yrs)</div>
            <div className="col-md-6 mb-5">
              <div className="price">{`${period} Yrs`}</div>
            </div>
            <div className="col-12 mb-5">
              <RangeField
                price={period}
                setPrice={setPeriod}
                min={1}
                max={50}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 my-4">Invested Amount</div>
            <div className="col-md-6 my-4">
              <b>
              ₹
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 1,
                }).format(price * 12 * period)}
              </b>
            </div>
            <div className="col-md-6 my-4">Est. returns</div>
            <div className="col-md-6 my-4">
              <b>
              ₹
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 1,
                }).format(estReturn * 12 * period)}
              </b>
            </div>
            <div className="col-md-6 my-4">Total value</div>
            <div className="col-md-6 my-4">
              <b>
              ₹
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 1,
                }).format(
                  price * 12 * period + estReturn * 12 * period
                )}
              </b>
            </div>
          </div>
        </div>
        <div className="col-md-6 "> 
          <div className="d-flex justify-content-around mb-5">
            <div className="d-flex align-items-center">
            <div className="darkIcon" ></div>
             <div className="lightIconText" >Invested amount</div>
            </div>
            <div className="d-flex align-items-center">
            <div className="lightIcon" ></div>
             <div className="darkIconText" >Estd returns</div>
            </div>
          </div>
          <DonutChart price={price} estReturn={estReturn} />
        </div>
      </div> */}

      <div className="row p-5" style={{ backgroundColor: "#15123E" }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 position-relative">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h6 className="invoicingText my-5">
              Invoicing
              <br />
              Dashboard
            </h6>
            <p className="invoicingPara my-5">
              Easily track your invoice, payable and receivables and also, raise
              invoice using our invoicing software and get better discounting
              rates and faster approvals.
            </p>
            <div className="my-5 position-relative">
              <img className="macImg" src="/images/Mac Dashboard.png"></img>
            </div>

            <div className="d-flex d-sm-none div1macpoints my-3">
              upto 50% less approval time
            </div>
            <div className="d-flex d-sm-none div1macpoints mb-3">
              better discounting rates
            </div>
            <div className="d-flex d-sm-none div1macpoints mb-3">
              earn commission on referral
            </div>

            <div className="MacPointsDiv1 d-none d-sm-flex">
              upto 50% less approval time
            </div>
            <div className="MacPointsDiv2 d-none d-sm-flex">
              better discounting rates
            </div>
            <div className="MacPointsDiv3 d-none d-sm-flex">
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
