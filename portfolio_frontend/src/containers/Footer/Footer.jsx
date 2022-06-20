import React, { useState, useRef } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "jaswant_ds_email19",
        "portfolio-template",
        form.current,
        "9ctrctiuRha52nuKT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setIsFormSubmitted(true);
    form.current.reset();
  };

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
            +919607851184
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form ref={form} onSubmit={sendEmail}>
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                name="user_name"
                placeholder="Your Name"
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                name="user_email"
                placeholder="Your Email"
              />
            </div>
            <div className="app__flex">
              <textarea
                className="p-text"
                name="message"
                placeholder="Your Message"
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="submit"
                value="Send Message"
                id="submit"
              />
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h2 className="head-text">
            <span>Thanks!</span> Will Reach out soon.
          </h2>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
