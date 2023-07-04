import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/sammy-jay" target="_blank">
        <BsGithub />
      </a>
    </div>
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
  </div>
);

export default SocialMedia;
