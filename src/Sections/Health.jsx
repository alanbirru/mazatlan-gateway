import React from "react";
import { motion } from "framer-motion";

const Health = () => {
  return (
    <motion.section
      id="health"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1 className="section-title">
          Mazatlán Health and Wellness directory
        </h1>

        <div>
          <p>
            A Health and Wellness Directory is a valuable resource offering
            quick access to diverse health services, fostering a proactive
            well-being approach.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Health;
