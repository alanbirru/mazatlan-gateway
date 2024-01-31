import Hero from "../Inicio/Hero";
import SectionVideo from "../Inicio/SectionVideo";
import Carousel from "../Inicio/Carousel";
import { motion } from "framer-motion";
const PrincipalPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <SectionVideo />
      <Carousel />
    </motion.div>
  );
};

export default PrincipalPage;
