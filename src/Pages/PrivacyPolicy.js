import React from "react";
import "./PrivacyPolicy.css";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-container">
        <h1 className="privacy-title">PRIVACY POLICY</h1>
        <p className="privacy-updated">
          <strong>Last updated on June 7th 2025</strong>
        </p>

        <div className="privacy-content">
          <p>
            This privacy policy sets out how BROWN REED AGRI-WASTE INNOVATIONS
            PRIVATE LIMITED uses and protects any information that you give when
            you use this website.
          </p>
          <p>
            We are committed to ensuring that your privacy is protected. Should
            we ask you to provide certain information by which you can be
            identified when using this website, you can be assured that it will
            only be used in accordance with this privacy statement.
          </p>
          <p>
            BROWN REED AGRI-WASTE INNOVATIONS PRIVATE LIMITED may change this
            policy from time to time by updating this page. You should check
            this page periodically to ensure that you are happy with any
            changes.
          </p>

          <h3>Information We Collect and How We Use It</h3>
          <ul className="privacy-list">
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>
              Demographic information such as postcode, preferences and
              interests
            </li>
            <li>
              Other information relevant to customer surveys and/or offers
            </li>
          </ul>

          <h3>What We Do with the Information We Gather</h3>
          <p>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </p>
          <ul className="privacy-list">
            <li>Internal record keeping</li>
            <li>
              We may use the information to improve our products and services
            </li>
            <li>
              We may periodically send promotional emails about new products,
              special offers or other information which we think you may find
              interesting using the email address you have provided
            </li>
            <li>
              From time to time, we may use your information to contact you for
              market research purposes via email, phone, fax or mail
            </li>
            <li>
              We may use the information to customise the website according to
              your interests
            </li>
          </ul>

          <h3>Controlling Your Personal Information</h3>
          <p>
            You may choose to restrict the collection or use of your personal
            information in the following ways:
          </p>
          <ul className="privacy-list">
            <li>
              Whenever you are asked to fill in a form on the website, look for
              the box that you can click to indicate that you do not want the
              information to be used by anybody for direct marketing purposes
            </li>
            <li>
              If you have previously agreed to us using your personal
              information for direct marketing purposes, you may change your
              mind at any time by writing to or emailing us at{" "}
              <strong>info@sunbirdstraws.com</strong>
            </li>
          </ul>

          <h3>Security</h3>
          <p>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorized access or disclosure, we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
          </p>

          <h3>How We Use Cookies</h3>
          <p>
            A cookie is a small file which asks permission to be placed on your
            computer’s hard drive. Once you agree, the file is added and the
            cookie helps analyze web traffic or lets you know when you visit a
            particular site.
          </p>
          <p>
            You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer.
          </p>

          <h3>Links to Other Websites</h3>
          <p>
            Our website may contain links to other websites of interest.
            However, once you have used these links to leave our site, you
            should note that we do not have any control over that other website.
          </p>
          <p>
            Therefore, we cannot be responsible for the protection and privacy
            of any information which you provide whilst visiting such sites and
            such sites are not governed by this privacy statement.
          </p>

          <h3>Correction of Information</h3>
          <p>
            If you believe that any information we are holding on you is
            incorrect or incomplete, please write to or email us as soon as
            possible. We will promptly correct any information found to be
            incorrect.
          </p>
        </div>
      </div>

      {/* ✅ Footer for consistency */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
