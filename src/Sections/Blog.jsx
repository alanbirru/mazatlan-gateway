import { motion } from "framer-motion";

motion;

const Blog = () => {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    ></motion.section>
  );
};

export default Blog;
