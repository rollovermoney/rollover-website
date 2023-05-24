import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./Popup.css";

const CustomFormNewsletter = ({ status, message, onValidated }) => {
  let email, number, name, businessname, businessType, annualRevenue;

  const submit = () =>
    email &&
    number &&
    name &&
    businessname &&
    businessType &&
    annualRevenue &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      PHONE: number.value,
      NAME: name.value,
      BUSINESSNAME: businessname.value,
      BUSINESSTYPE: businessType.value,
      ANNUALREVENUE: annualRevenue.value,
    });

  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green", textAlign: "center" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <h1
        style={{
          color: "white",
          fontSize: "38px",
          fontFamily: "Poppins-Bold",
          textAlign: "center",
          marginTop: "-10px",
        }}
      >
        Join the waitlist
      </h1>
      <div className="signup-counter">
        <h1 className="signup-counter-number">1.2K</h1>
        <p className="signup-counter-text">people have already signed up</p>
      </div>

      <input
        className="waitlist-input"
        ref={(node) => (name = node)}
        type="text"
        placeholder="Your Name"
      />
      <br></br>
      <input
        className="waitlist-input"
        ref={(node) => (businessname = node)}
        type="text"
        placeholder="Business Name"
      />
      <br></br>
      <input
        className="waitlist-input"
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br></br>
      <input
        className="waitlist-input"
        ref={(node) => (number = node)}
        type="text"
        placeholder="Your number"
      />
      <br></br>
      <select className="waitlist-input" ref={(node) => (businessType = node)}>
        <option value="">Select Business Type</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Service">Service</option>
      </select>
      <br></br>
      <input
        className="waitlist-input"
        ref={(node) => (annualRevenue = node)}
        type="text"
        placeholder="Annual Revenue"
      />
      <br></br>

      <button className="waitlist-btn" onClick={submit}>
        Join Now
      </button>
    </div>
  );
};

const WaitList = () => {
  const url =
    "https://app.us20.list-manage.com/subscribe/post?u=b3da267118ca3ca4df4e1cac1&amp;id=5c586c2cbc&amp;f_id=00ed0debf0";
  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomFormNewsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default WaitList;
