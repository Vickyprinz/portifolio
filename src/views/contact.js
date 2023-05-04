import React from 'react'

import './contact.css'

const Contact = (props) => {
  return (
    <div>
    <nav className="about-nav">
      <div className="about-link-wrapper">
        <a href="/" className="about-link">Home</a>
      </div>
      <div className="about-link-wrapper">
        <a href="/about"className="about-link">About</a>
      </div>
      <div className="about-link-wrapper">
        <a href="/contact" className="about-link">Contact</a>
      </div>
    </nav>
    <div className="contact-container">
      <div className="contact-stats">
        <div className="contact-stat">
          <h1 className="contact-text">
            <span>50</span>
            <span>+</span>
          </h1>
          <span className="contact-text03">Happy clients</span>
          <span className="contact-text04">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing. */}
          </span>
        </div>
        <div className="contact-stat1">
          <h1 className="contact-text05">
            <span>215</span>
          </h1>
          <span className="contact-text07">Projects completed</span>
          <span className="contact-text08">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing. */}
          </span>
        </div>
        <div className="contact-stat2">
          <h1 className="contact-text09">
            <span>500</span>
            <span>+</span>
          </h1>
          <span className="contact-text12">Hours</span>
          <span className="contact-text13">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing. */}
          </span>
        </div>
        <div className="contact-stat3">
          <h1 className="contact-text14">
            <span>24/7</span>
          </h1>
          <span className="contact-text16">Support</span>
          <span className="contact-text17">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing. */}
          </span>
        </div>
      </div>
      <span className="contact-text18 H4-18px">
        <span>Your Full Name ( Required)</span>
      </span>
      <span className="contact-text20 H4-18px">
        <span>Your Email ( Required)</span>
      </span>
      <span className="contact-text22 H4-18px">
        <span>Subject</span>
      </span>
      <span className="contact-text24">Your Message</span>
      <input type="text" className="contact-textinput input" />
      <input type="text" className="contact-textinput1 input" />
      <input type="text" className="contact-textinput2 input" />
      <button type="submit" className="contact-button button">
        <span className="contact-text25">
          <span>Send Message</span>
          <br></br>
        </span>
      </button>
      <input type="text" className="contact-textinput3 input" />
      <h1 className="contact-text28">Leave your info</h1>
      </div>
    </div>
  )
}

export default Contact
