import React, { useContext, useState } from "react";
import "./Contact.css";
import freshCare from "../../img/freshCare.png";
// import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const { name, email, message } = msg;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to
      // Submit it on Backend which is on
      // Port 3001. So we need Proxy.
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      console.log(res.status);
      if (res.status === 400 || !res) {
        window.alert("Message Not Sent. Try Again Later");
      } else {
        window.alert("Message Sent");
        setMsg({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact us</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
          <div className="imageDiv">
            <img
              src={freshCare}
              alt="customerMain"
              className="imageContainer"
            />
          </div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form onSubmit={handleSubmit} method="POST">
          <div className="nameForm">
            {/* <label htmlFor="name" className='form-label'>Your Name</label> */}
            <input
              type="text"
              className="user"
              id="name"
              placeholder="John Doe"
              name="name"
              value={msg.name}
              onChange={handleChange}
            />
          </div>
          <div className="emailForm">
            {/* 
            <label htmlFor="exampleFormControlInput1" className='form-label'>
              Email address
            </label> */}
            <input
              type="email"
              className="user"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="email"
              value={msg.email}
              onChange={handleChange}
            />
          </div>
          <div className="msgForm">
            {/* <label htmlFor="exampleFormControlInput1" className='form-label'>
              Your Message
            </label> */}
            <textarea
              className="user"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Your Message"
              name="message"
              value={msg.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {/* <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form> */}
            <button type="submit" className="button-one">
              Send Message
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
