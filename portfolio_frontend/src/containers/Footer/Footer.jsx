import React from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";


const Footer = () => {

  const [formData, setFormData] = useState({name:'', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);
  return (
    <>
      <h2 className="head-text">
        Want to <span>connect</span> ?
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jaswantkondurofficial@gmail.com" className="p-text">
            jaswantkondurofficial@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel +919607851184" className="p-text">
            📞 +919607851184
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            className="p-text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            className="p-text"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            name={message}
            value={message}
            placeholder="Your Message"
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending': 'Send Message'}>
          Send Message
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
