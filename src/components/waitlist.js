import MailchimpSubscribe from "react-mailchimp-subscribe"
import "./Popup.css"


const CustomFormNewsletter = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  
    return (
      <div
        
      >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <h1 style={{color:"white",fontSize:"38px",fontFamily:"Poppins-Bold",textAlign:"center",margin:"20px"}}>Join the waitlist</h1>
        <input
         className="waitlist-input"
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <input
         className="waitlist-input"
          ref={node => (email = node)}
          type="number"
          placeholder="Your ph"
        />
        <br />
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
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      );
    }
export default WaitList;