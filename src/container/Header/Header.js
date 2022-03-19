import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const { text } = useTypewriter({
    words: [ "Frontend Developer", "Backend Developer", "Web Designer", "Mobile App Developer","Penetration Tester"],
    loop: false,
    cursor: true,
    cursorStyle: "_",
    typeSpeed: 60,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Tolulope</h1>
            </div>
          </div>
          <div className="tag-flex">
            <div className="tag-cmp app__flex first-tag">
              <p className="p-text typewriter">I'm a {text}</p>
            </div>
            <div className="tag-cmp app__flex special-tag">
              <p className="p-text">I develop websites that</p>
              <p className="p-text">ignite your business</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src="https://res.cloudinary.com/techwithtols/image/upload/v1647724108/portfolio/profile-removebg_jywocv.png" alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.redux, images.react, images.node].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
