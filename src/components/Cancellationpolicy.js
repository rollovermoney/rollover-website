import React from "react";
import "./cancellationpolicy.css";

const CancellationPolicyPage = () => {
  return (
    <div className="cancellation-policy-container">
      <h1 className="cancellation-policy-heading">Cancellation Policy</h1>
      <p className="cancellation-policy-text">
        At RollOver Money, we understand that users may need to cancel their
        subscription to our services. Please read and familiarize yourself with
        our cancellation policy outlined below.
      </p>
      <h2 className="section-heading">Introduction</h2>
      <p className="section-text">
        RollOver Money understands that users may need to cancel their
        subscription to our services from time to time. This cancellation policy
        explains how we handle cancellations and refunds.
      </p>
      <h2 className="section-heading">Cancellation:</h2>
      <p className="section-text">
        Users may cancel their subscription to our services at any time by
        logging into their account and selecting the cancel subscription option.
        Users may also contact our support team for assistance with canceling
        their subscription.
      </p>
      <h2 className="section-heading">Refunds</h2>
      <p className="section-text">
        Users may be eligible for a refund of the unused portion of their
        subscription if they cancel within a specified time period. The time
        period and refund amount will be specified in the subscription
        agreement. We do not provide refunds for subscriptions that have been
        canceled after the specified time period, or for any reason related to a
        user's dissatisfaction with our services.
      </p>
      <h2 className="section-heading">Billing</h2>
      <p className="section-text">
        Users will be billed for their subscription on a recurring basis, as
        specified in the subscription agreement. Users will continue to be
        billed until they cancel their subscription.
      </p>
      <h2 className="section-heading">Changes to the Cancellation Policy</h2>
      <p className="section-text">
        We may change this cancellation policy at any time. We will notify users
        of any material changes to this policy by posting a notice on our
        website or sending an email. Users are responsible for reviewing this
        policy periodically to ensure they are aware of any changes.
      </p>
      <h2 className="section-heading">Contact Information</h2>
      <p className="section-text">
        If you have any questions or concerns about this cancellation policy,
        please contact us at [insert contact information].
      </p>
    </div>
  );
};

export default CancellationPolicyPage;
