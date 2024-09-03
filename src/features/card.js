import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define the Card component
const Card = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-2 py-4 rounded-lg shadow-md">
      <FontAwesomeIcon icon={icon} className="text-4xl text-gray-700 mb-4" />
      <div className="text-center">
        <h2 className="font-medium text-xl mb-2">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
