import React from "react";
import { motion } from "framer-motion";

const CareerGoals = () => {
  return (
    <section
      id="career-goals"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6"
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Career Goals
      </motion.h2>
      <motion.ul
        className="space-y-4 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <li> Master Data Structures & Algorithms with Java</li>
        <li> Become a Full-Stack Developer (Java + Spring Boot + React + AWS)</li>
        <li> Secure a 10+ LPA Software Engineering Role</li>
        <li> Build impactful AI/Cloud projects</li>
      </motion.ul>
    </section>
  );
};

export default CareerGoals;
