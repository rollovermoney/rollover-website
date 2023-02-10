import MailchimpSubscribe from "react-mailchimp-subscribe"

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
        
        
        <input
         className="newsletter-input"
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button className="input-btn" onClick={submit}>
          Join Now
        </button>
      </div>
    );
  };
  
const CustomForm = () => {
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
export default CustomForm;