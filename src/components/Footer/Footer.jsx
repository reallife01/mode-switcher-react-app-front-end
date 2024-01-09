import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        {/* <span>Zainkeepscode@gmail.com</span> */}
        
    {/* <div className="bestowal__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="bestowal__footer-links">
      <div className="bestowal__footer-links_logo">
        {/* <img src={assets.bestowal1} alt="gpt3_logo" /> */}
        <p>No 6 Adebola Adeniyi street, Ota Ogun, Ng <br /> All Rights Reserved</p>
      </div>
      <div className="bestowal__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="bestowal__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="bestowal__footer-links_div">
        <h4>Get in touch</h4>
        <p>No 6 Adebola Adeniyi street, Ota Ogun, Ng</p>
        <p>+234 810 383 1029</p>
        <p>info@payme.net</p>
      </div>
    </div>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
