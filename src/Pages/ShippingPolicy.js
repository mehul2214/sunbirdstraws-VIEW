import React from "react";
import "./ShippingPolicy.css";
import Footer from "../components/Footer";

function ShippingPolicy() {
  return (
    <div className="shipping-wrapper">
      <div className="shipping-container">
        <h1 className="shipping-title">SHIPPING POLICY</h1>
        <p className="shipping-updated">
          <strong>Last updated on Jun 7th 2025</strong>
        </p>

        <div className="shipping-content">
          <p>
            For International buyers, orders are shipped and delivered through
            registered international courier companies and/or International
            speed post only.
          </p>
          <p>
            For domestic buyers, orders are shipped through registered domestic
            courier companies and/or speed post only.
          </p>
          <p>
            Orders are shipped within 3–5 days or as per the delivery date
            agreed at the time of order confirmation, and delivery of the
            shipment is subject to courier company / post office norms.
          </p>
          <p>
            BROWN REED AGRI-WASTE INNOVATIONS PRIVATE LIMITED is not liable for
            any delay in delivery by the courier company / postal authorities
            and only guarantees to hand over the consignment to the courier
            company or postal authorities within 3–5 days from the date of the
            order and payment, or as per the delivery date agreed at the time of
            order confirmation.
          </p>
          <p>
            Delivery of all orders will be to the address provided by the buyer.
          </p>
          <p>
            Delivery of our services will be confirmed on your mail ID as
            specified during registration.
          </p>
          <p>
            For any issues in utilizing our services, you may contact our
            helpdesk at <strong>info@sunbirdstraws.com</strong>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShippingPolicy;
