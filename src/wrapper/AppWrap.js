import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import { BsTwitter, BsInstagram,BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '4px auto',
              }}
            >
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
            <p className="p-text">&copy;2022 TOLULOPE</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
