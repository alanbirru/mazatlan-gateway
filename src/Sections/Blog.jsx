import { motion } from "framer-motion";

motion;

const Blog = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Blog
    </motion.section>
  );
};

export default Blog;
