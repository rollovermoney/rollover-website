import React from "react";
import "./Footer.css";
import CustomForm from "./newsletter";
const Footer = () => {
  return (
    <>
      <div className="container-fluid pt-3 px-md-5" style={{ background: "#121139" }}>
        <div className="row">
          <div className="col-md-12">
            <img height="50px" src="/images/Logo.svg" alt="Logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footercontent">
              <p>Services</p>
              <ul>
                <li>Invoice Discounting</li>
                <li>Receivable Discounting</li>
                <li>Invoicing SaaS Platform</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footercontent">
              <p>Support</p>
              <ul>
                <li>Pricing Plan</li>
                <li>Documentation</li>
                <li>Guide</li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footercontent">
              <p>Company</p>
              <ul>
                <li><a href="/contact-us" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>Contact Us</a></li>
                <li>About</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footercontent">
              <p>Legal</p>
              <ul>
                <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>Privacy Policy</a></li>
                <li><a href="/terms-condition" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>Terms & Conditions</a></li>
                <li><a href="/cancellation-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>Cancellation policy</a></li>
              </ul>
            </div>
          </div>
        </div>
       
        <div className="row">
          <div className="col-md-12">
            <div className="footercontent" style={{marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
              <p style={{fontSize:"12px",textAlign:"center"}}>&copy; 2023 Your Company. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Footer;