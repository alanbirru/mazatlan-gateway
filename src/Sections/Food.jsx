import React from "react";
import { motion } from "framer-motion";

const Food = () => {
  return (
    <motion.section
      id="food"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1 className="section-title">
          Welcome to Mazatlan Gateway Food Section – your ultimate guide to the
          culinary wonders of this Pacific paradise
        </h1>

        <div>
          <p>
            Beyond the breathtaking shores, Mazatlan offers a haven for both
            beach lovers and culinary enthusiasts alike. We've carefully curated
            a selection of Mazatlan's finest establishments, including
            restaurants, cafes, bakeries, bistros, pubs, tavernas, and diverse
            food vendors. Whether you're a seasoned foodie or just looking for a
            great place to savor local flavors, Mazatlan Gateway Food Section is
            your go-to resource for a memorable dining experience.
          </p>
        </div>

        <div>
          <p>
            Embark on a journey through Mazatlan's vibrant culinary landscape,
            featuring a tapestry of tastes and aromas. Indulge in freshly caught
            seafood with a local twist or explore international cuisines that
            mirror the city's cultural diversity. Whether hidden in historic
            streets or along the beachfront with breathtaking ocean views,
            Mazatlan Gateway Food Section ensures you're covered, whether you
            fancy a leisurely brunch, a romantic dinner, or a quick street food
            snack.
          </p>
        </div>

        <div>
          <p>
            Join us as we showcase the passion and creativity of Mazatlan's
            culinary artisans, from innovative chefs crafting menus to street
            vendors offering authentic local delights. Whether you're a visitor
            seeking the best dining spots or a local eager for new culinary
            experiences, Mazatlan Gateway Food Section invites you to savor the
            city's rich culture and culinary excellence. Get ready to indulge in
            Mazatlan's flavors, where every meal is a celebration of this
            vibrant destination.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Food;
