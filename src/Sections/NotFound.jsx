import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      NotFound
    </motion.section>
  );
};

export default NotFound;
