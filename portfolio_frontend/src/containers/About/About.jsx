import React, {useState, useEffect} from 'react';
import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import {motion} from 'framer-motion';
import { urlFor, client } from "../../client";


const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [me, setMe] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const myQuery = '*[_type == "me"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
    client.fetch(myQuery).then((data) => {
      setMe(data);
    });
  }, []);
  return (
    <div>
      <h2 className="head-text">
        Welcome to my
        <br />
        <span>VoodooVerse</span>
      </h2>

      <div className="app__aboutme">
        {me.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__aboutme-item"
            key={about.title + index}
          >
            
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>

      <hr />

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'), 'about', 'app__whitebg')