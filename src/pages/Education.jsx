import React from "react";
import Card from "../components/Card";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Engineering (CSE)",
      subtitle: "DSATM, Bangalore",
      description: "Pursuing core computer science subjects with focus on Java, DSA, and Cloud computing."
    },
    {
      title: "Diploma in CSE",
      subtitle: "Government Polytechnic Sorab",
      description: "Specialized in Java & AWS with excellent grades in Math and Cloud Computing."
    }
  ];

  return (
    <section id="education" className="min-h-screen bg-black text-white px-8 py-20">
      <h2 className="text-4xl font-bold mb-8">Education</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, idx) => (
          <Card key={idx} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
