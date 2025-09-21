import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6"
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-2xl text-lg text-gray-300 text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am a Computer Science student passionate about software development,
        cloud computing, and solving real-world problems. My mission is to
        become a skilled Full-Stack Developer and Cloud Architect, while
        continuously improving problem-solving skills.
      </motion.p>
    </section>
  );
};

export default About;
