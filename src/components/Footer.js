import React from "react";
import "./Footer.css";
import CustomForm from "./newsletter";
const Footer = () => {
  return (
    <>
    
      <div
        className="container-fluid pt-3 px-md-5"
        style={{ background: " #121139" }}
      >
        <div className="row">
          <div className="col-md-12">
            <img height="50px" src="/images/Logo.svg"></img>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-10 p-sm-5">
            <div className="d-flex footercontent">
              <div className="col">
                <p>Services</p>
                <ul>
                  <li>Invoice Discounting</li>
                  <li> Receivable Discounting</li>
                  <li>Invoicing SaaS Platform</li>
                  <li>Pay Later (coming soon)</li>
                </ul>
              </div>
              <div className="col">
                <p>Support</p>
                <ul>
                  <li>Pricing Plan</li>
                  <li>Documentation</li>
                  <li>Guide</li>
                  <li>Tutorial</li>
                </ul>
              </div>
              <div className="col">
                <p>Company</p>
                <ul>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <a href="/contact-us" target="_blank" style={{textDecoration:"none",color:"white"}}>Contact Us</a>
              </li>
                  <li>About</li>
                  <li>Blog</li>
                  
                 
                </ul>
              </div>
              <div className="col">
                <p>Legal</p>
                <ul>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <a href="/privacy-policy" target="_blank" style={{textDecoration:"none",color:"white"}}>Privacy Policy</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/terms-condition" target="_blank" style={{textDecoration:"none",color:"white"}}>Terms & Conditions</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="/cancellation-policy" target="_blank" style={{textDecoration:"none",color:"white"}}>Cancellation policy</a>
              </li>
                </ul>
              </div>
              <div className="col" >
                <p>Subcribe to our newsletter</p>
                <ul>
                  <li>Be ahead of your competitors by efficiently managing your working capital</li>
                </ul>
                {/* <CustomForm /> */}
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;