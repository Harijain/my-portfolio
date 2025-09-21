import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I'm Hariyantha C
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Aspiring Full-Stack Developer | Cloud Enthusiast | Problem Solver
      </motion.p>
    </section>
  );
};

export default Home;
