import React from "react";

const Card = ({ title, subtitle, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-yellow-400 transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <h4 className="text-yellow-400 mb-2">{subtitle}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
