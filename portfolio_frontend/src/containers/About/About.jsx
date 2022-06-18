import React, {useState, useEffect} from 'react';
import './About.scss';
import {motion} from 'framer-motion';
import { images } from '../../constants';


const abouts = [
  {
    title: "Web Development",
    description:
      "I am good at Web Dev. I have experience with Full Stack (MERN).",
    imgURL: images.about01,
  },
  {
    title: "Data Scientist",
    description:
      "I love Data and I love playing with it. I have good experience with Python and libraries like Pandas, Numpy, Scikit Learn, TensorFlow etc.",
    imgURL: images.about02,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        Welcome to my
        <br />
        <span>VoodooVerse</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );}

export default About