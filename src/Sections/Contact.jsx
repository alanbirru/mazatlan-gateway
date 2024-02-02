import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1 className="section-title">
          Welcome to Mazatlán's Marketplace: Your Ultimate Directory for Every
          Need
        </h1>

        <div>
          <p>
            Hey there! We're thrilled that you want to reach out to us. We
            absolutely love receiving feedback and suggestions from our awesome
            audience.
          </p>
        </div>

        <div>
          <p>
            I'm Chuck Groot, your dedicated publisher, and I'm beyond excited to
            assist you.
          </p>
        </div>

        <div>
          <p>Wishing you an amazing day ahead!</p>
        </div>
      </div>

      <form className="contact-form">
        <div>
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />
        </div>

        <div>
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" />
        </div>

        <div className="message-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" cols="40" />
        </div>

        <input type="submit" value="Submit" className="submit-btn" required />
      </form>
    </motion.section>
  );
};

export default Contact;
