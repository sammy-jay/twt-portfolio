import React, { useState } from "react";

import { BsTwitter, BsInstagram,BsLinkedin } from "react-icons/bs";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
   

    if (formData.username && formData.email &&  formData.message){
       setLoading(true);
      
      const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h2 className="head-text">Take a <span>coffee & chat</span> with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:techwithtols@gmail.com" className="p-text">
            techwithtols@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+234 (807) 503-2390" className="p-text">
            +234 (807) 503-2390
          </a>
        </div>
      </div>

       <div className="app__footer-cards footer-two">
         <div className="social-icon">
      <a
        href="https://linkedin.com/in/tolulope-soneye-5526a51b7"
        target="_blank"
      >
        
        <BsLinkedin size={32}/>
      </a>
    </div>
  <div className="social-icon">
      <a
        href="https://twitter.com/TolulopeSoneye3?t=3XdYF_fZljuuDMfpYluONw&s=09"
        target="_blank"
      >
        <BsTwitter size={32}/>
      </a>
    </div>
    <div className="social-icon">
      <a href="" target="_blank">
        <BsInstagram size={32}/>
      </a>
    </div>
         </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
        <div style={{ marginTop: '40px', width:'100%', display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>

            <p className="p-text">&copy;2022 TOLULOPE</p>

            <p className="p-text">All rights reserved</p>

          </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
