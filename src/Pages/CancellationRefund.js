import React from "react";
import "./CancellationRefund.css";
import Footer from "../components/Footer";

function CancellationRefund() {
  return (
    <div className="cancel-wrapper">
      <div className="cancel-container">
        <h1 className="cancel-title">CANCELLATION & REFUND POLICY</h1>
        <p className="cancel-updated">
          <strong>Last updated on June 7th 2025</strong>
        </p>

        <div className="cancel-content">
          <p>
            At BROWN REED AGRI-WASTE INNOVATIONS PRIVATE LIMITED, we strive to
            deliver quality products and services. If you are not entirely
            satisfied with your purchase, we’re here to help.
          </p>

          <h3>Cancellation Policy</h3>
          <ul className="cancel-list">
            <li>
              To cancel, please contact our support team at{" "}
              <strong>info@sunbirdstraws.com</strong>.
            </li>
            <li>
              Once the order is processed or shipped, cancellation is not
              possible.
            </li>
          </ul>

          <h3>Refund Policy</h3>
          <ul className="cancel-list">
            <li>Refunds are applicable only for damaged products.</li>
            <li>
              To request a refund, please email us with photos of the product
              within 24 hours of delivery.
            </li>
            <li>
              Approved refunds will be processed within 7–10 business days.
            </li>
            <li>Shipping charges are non-refundable.</li>
          </ul>

          <p>
            For any questions regarding cancellation or refund, feel free to
            reach out to us at <strong>info@sunbirdstraws.com</strong>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CancellationRefund;
