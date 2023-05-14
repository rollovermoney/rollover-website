import React from "react";
import "./privacypolicy.css";
const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-heading">Privacy Policy</h1>
      <p className="privacy-policy-text">
        Your privacy is important to us. This Privacy Policy outlines how we
        collect, use, disclose, and protect your personal information when you
        visit our website or use our services. By accessing our website or using
        our services, you consent to the practices described in this Privacy
        Policy.
      </p>
      <h2 className="section-heading">Introduction:</h2>
      <p className="section-text">
        RollOver Money is committed to protecting the privacy of its users. This
        privacy policy explains how we collect, use, and disclose personal
        information that we collect from users of our website. By using our
        website, you agree to the terms of this privacy policy.
      </p>
      <h2 className="section-heading">Information We Collect</h2>
      <p className="section-text">
        We may collect the following types of personal information when you
        interact with our website or use our services:
      </p>
      <ol className="nested-list">
        <li>
          <strong className="nested-list-heading">
            Personal Information Provided by You:
          </strong>
          <ul className="nested-list">
            <li>Name</li>
            <li>Email address</li>
            <li>Postal address</li>
            <li>Phone number</li>
            <li>Any other information you voluntarily provide to us</li>
          </ul>
        </li>
        <li>
          <strong className="nested-list-heading">
            Automatically Collected Information:
          </strong>
          <ul className="nested-list">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>
              Website usage information (e.g., pages visited, time spent on the
              site)
            </li>
          </ul>
        </li>
      </ol>
      <h2 className="section-heading">Information Sharing and Disclosure</h2>
      <p className="section-text">
        We may share your personal information with third parties in the
        following circumstances:
      </p>
      <ul className="nested-list">
        <li>With your consent</li>
        <li>To comply with legal obligations</li>
        <li>
          With service providers who assist us in operating our website and
          services
        </li>
        <li>In connection with a merger, acquisition, or sale of assets</li>
      </ul>
      <h2 className="section-heading">Security</h2>
      <p className="section-text">
        We take reasonable measures to protect your personal information from
        unauthorized access, use, or disclosure. However, please be aware that
        no method of transmission over the internet or electronic storage is
        100% secure.
      </p>
      <h2 className="section-heading">Links to Other Websites</h2>
      <p className="section-text">
        Our website may contain links to other websites that are not operated by
        us. We have no control over the content and privacy practices of these
        third-party websites. We encourage you to review the privacy policies of
        those websites.
      </p>
      <h2 className="section-heading">Changes to This Privacy Policy</h2>
      <p className="section-text">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated "Effective Date." We encourage you
        to review this Privacy Policy periodically for any changes.
      </p>
      <h2 className="section-heading">Contact Us</h2>
      <p className="section-text">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at [contact email or phone number].
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
