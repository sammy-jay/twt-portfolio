import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
          
            style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
          >
             <h1 className="bold-text" style={{fontSize:'35px'}}>11</h1>
            <h3 className="p-text" style={{fontSize:'14px'}}>Clients</h3>
           
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
           
            style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
          >
             <h1 className="bold-text" style={{fontSize:'35px'}}>27</h1>
            <h2 className="p-text" style={{fontSize:'14px'}}>Projects Completed</h2>
           
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
           
            style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
          >
            <h1 className="bold-text" style={{fontSize:'35px'}}>6</h1>
            <h3 className="p-text" style={{fontSize:'14px'}}>Projects Ongoing</h3>
            
          </motion.div>


          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
           
            style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
          >
             <h1 className="bold-text" style={{fontSize:'35px'}}>11</h1>
            <h3 className="p-text" style={{fontSize:'14px'}}>Clients Satisfied</h3>
           
          </motion.div>
       
      </div>
    </>
  );
};

export default AppWrap(
 Testimonial,
  'testimonial'
);
