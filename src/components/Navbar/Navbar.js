import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src="https://res.cloudinary.com/techwithtols/image/upload/v1647721273/portfolio/logo_2_gejxz5.png"
          alt="logo"
        />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text">
          <div />
          <a href={images.resume}>Download CV</a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <RiMenu3Line onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            transition={{
              scale: [0, 1],
              opacity: [0, 1],
              duration: 0.85,
              ease: "easeOut",
            }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="app__flex p-text">
                <div />
                <a href={images.resume}>Download CV</a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
