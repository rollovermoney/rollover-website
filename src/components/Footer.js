import React from "react";
import "./Footer.css";
import CustomForm from "./newsletter";
const Footer = () => {
  return (
    <>
      <div className="container-fluid pt-3 px-md-5" style={{ background: "#121139", marginTop: "-20px" }}>
        <div className="row">
          <div className="col-md-12">
            <img height="50px" src="/images/Logo.svg" alt="Logo" />
          </div>
        </div>
        <div className="row" style={{ marginLeft: "0px" }}>
          <div className="col-md-3 col-sm-6" >
            <div className="footercontent">
              <p style={{ fontWeight: "500", marginLeft: "20px", color: "white" }}>Services</p>
              <ul>
                <li style={{ fontSize: "14px" }}>Invoicing Tool</li>
                <li style={{ fontSize: "14px" }}>Analytics Dashboard</li>
                {/* <li style={{ fontSize: "14px" }}>Pricing Plans (Launching by July 23)</li> */}
              </ul>
            </div>
          </div>
        
          <div className="col-md-3 col-sm-6">
            <div className="footercontent">
              <p style={{ fontWeight: "500", marginLeft: "20px", color: "white" }}>Company</p>
              <ul>
                <li><a href="/contact-us" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Contact Us</a></li>
                <li style={{ fontSize: "14px" }}>About</li>
                {/* <li style={{ fontSize: "14px" }}></li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footercontent">
              <p style={{ fontWeight: "500", marginLeft: "20px", color: "white" }}>Legal</p>
              <ul>
                <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Privacy Policy</a></li>
                <li><a href="/terms-condition" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Terms & Conditions</a></li>
                <li><a href="/cancellation-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Cancellation policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footercontent">
              <p style={{ fontWeight: "500", marginLeft: "20px", color: "white" }}>Connect</p>
              <ul>
                <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Email: hey@rollovermoney.in</a></li>
                <li><a href="/terms-condition" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Address: New Delhi</a></li>
                <li><a href="/cancellation-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>Phone: +919650830027</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="footercontent" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20px", color: "red" }}>
              <p style={{ fontSize: "12px", textAlign: "center", color: "white" }}>&copy; 2023 Your Company. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Footer;