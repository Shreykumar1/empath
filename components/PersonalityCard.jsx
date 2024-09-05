import React from 'react';

const PersonalityCard = ({ personality }) => {
  
  return (
    <div className=" mx-auto pt-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-3xl font-bold text-primary ">{personality.type} ({personality.name})</h2>
        <h3 className="text-sm text-gray-600 mb-2">{personality.full_name}</h3>
        <p className="text-gray-700 mb-4">{personality.description}</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Traits:</h4>
          <ul className="text-gray-600">
            {Object.entries(personality.traits).map(([key, value]) => (
              <li key={key} className="mb-1">
                <span className="font-bold">{key}</span>: {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalityCard;
