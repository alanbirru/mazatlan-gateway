import { motion } from "framer-motion";
import "../css/coming-soon.css";
import faroMazatlan from "../assets/faro_mazatlan.jpg";

const Shopping = () => {
  return (
    <motion.section
      id="shopping"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="coming-soon-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${faroMazatlan})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-container-coming">
          <h1 className="coming-soon-title">Comming Soon</h1>
          <p>We will have lots of great info here soon!</p>
          <p>Thanks for your patience.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Shopping;
