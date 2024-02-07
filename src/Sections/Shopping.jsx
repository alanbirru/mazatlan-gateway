import { motion } from "framer-motion";

const Shopping = () => {
  return (
    <motion.section
      id="shopping"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Shopping
    </motion.section>
  );
};

export default Shopping;