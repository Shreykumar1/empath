import React from 'react';

const PersonalityTraitsGrid = () => {
      const personalityTraits = [
        {
          key: "I",
          title: "Introverted",
          description: "Prefers solitude and feels drained by social interactions.",
          strengths: "Focus, independence, deep thinking.",
          challenges: "Can seem aloof, may struggle with networking.",
        },
        {
          key: "E",
          title: "Extraverted",
          description: "Energized by social interactions and group activities.",
          strengths: "Communication, enthusiasm, teamwork.",
          challenges: "May struggle with alone time, can be seen as overbearing.",
        },
        {
          key: "T",
          title: "Thinking",
          description: "Decisions based on logic and objective criteria.",
          strengths: "Objectivity, analytical thinking, problem-solving.",
          challenges: "Can seem cold or insensitive, may overlook emotions.",
        },
        {
          key: "F",
          title: "Feeling",
          description: "Decisions based on emotions and values.",
          strengths: "Empathy, relationship-building, conflict resolution.",
          challenges: "Can be overly emotional, may struggle with tough decisions.",
        },
        {
          key: "N",
          title: "Intuitive",
          description: "Focuses on ideas and future possibilities.",
          strengths: "Innovation, big-picture thinking, creativity.",
          challenges: "May overlook details, can seem impractical.",
        },
        {
          key: "S",
          title: "Sensing",
          description: "Focuses on concrete facts and details.",
          strengths: "Attention to detail, practicality, reliability.",
          challenges: "May struggle with abstract thinking, can seem rigid.",
        },
        {
          key: "J",
          title: "Judging",
          description: "Prefers structure and firm decisions.",
          strengths: "Organization, decisiveness, reliability.",
          challenges: "Can be inflexible, may struggle with spontaneity.",
        },
        {
          key: "P",
          title: "Perceiving",
          description: "Prefers flexibility and keeping options open.",
          strengths: "Adaptability, openness, creativity.",
          challenges: "Can be indecisive, may struggle with following through.",
        },
      ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {personalityTraits.map((trait) => (
        <div
          key={trait.key}
          style={{
            backgroundColor: "#f0f4f8",
            color: '#333',
          }}
          className="shadow-lg rounded-lg p-4 max-w-xs "
        >
          <h2 className="text-xl font-bold">{trait.title} ({trait.key})</h2>
          <p className="mt-2 text-sm">{trait.description}</p>
          <div className="mt-4">
            <h3 className="font-semibold">Strengths:</h3>
            <p className="text-sm">{trait.strengths}</p>
            <h3 className="font-semibold mt-2">Challenges:</h3>
            <p className="text-sm">{trait.challenges}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalityTraitsGrid;