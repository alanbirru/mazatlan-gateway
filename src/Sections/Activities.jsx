import React from "react";
import { motion } from "framer-motion";
const Activities = () => {
  return (
    <motion.section
      id="activities"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1 className="section-title">
          Embrace the Spirit of Mazatlán: Unleash Your Adventure
        </h1>

        <div>
          <p>
            Welcome to Mazatlán, where the sun-drenched shores meet a world of
            exhilarating experiences. In this section, we invite you to discover
            the dynamic and vibrant tapestry of fun activities that make
            Mazatlán a playground for the adventurous and the leisure seekers
            alike. From the rhythmic beats of vibrant street festivals to the
            adrenaline-pumping water sports along the golden coastline, Mazatlán
            is a haven for those seeking unforgettable moments.
          </p>
        </div>

        <div>
          <p>
            Whether you're drawn to the laid-back charm of beachside relaxation,
            the thrill of exploring historic sites, or the pulse-pounding
            excitement of local festivities, Mazatlán offers a kaleidoscope of
            activities to suit every taste. Join us as we dive into the heart of
            this coastal gem, where the sun, sea, and smiles create an
            atmosphere of pure joy. Let the adventure begin, and immerse
            yourself in the diverse and entertaining world of Mazatlán's
            fun-filled activities. Your journey awaits!
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Activities;
