import React from "react";
import { BsTwitter, BsInstagram,BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://linkedin.com/in/tolulope-soneye-5526a51b7"
        target="_blank"
      >
        
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://twitter.com/TolulopeSoneye3?t=3XdYF_fZljuuDMfpYluONw&s=09"
        target="_blank"
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
