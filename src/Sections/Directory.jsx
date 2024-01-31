import React from "react";
import { motion } from "framer-motion";

const Directory = () => {
  return (
    <motion.section
      id="directory"
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
            Step into the vibrant tapestry of Mazatlán's bustling business
            landscape with our comprehensive directory, where every desire finds
            its perfect match. Whether you're in search of top-notch
            construction suppliers, the latest fashion trends, or a retail haven
            offering a diverse array of products, we've curated a one-stop
            destination for all your needs.
          </p>
        </div>

        <div>
          <p>
            Our directory is your gateway to discovering the hidden gems that
            make Mazatlán a shopper's paradise. From clothing boutiques that
            showcase the latest styles to construction suppliers delivering
            quality materials, we've compiled a diverse collection of businesses
            that define the city's dynamic spirit.
          </p>
        </div>

        <div>
          <p>
            Navigate through our listings and explore the myriad options
            available for every taste and preference. Mazatlán's directory is
            your go-to resource, ensuring you can effortlessly connect with the
            best stores, suppliers, and retailers in the area. Let the journey
            through Mazatlán's vibrant commercial landscape begin, where every
            visit to a store is an opportunity to discover something new.
            Welcome to a world of endless choices!
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Directory;
