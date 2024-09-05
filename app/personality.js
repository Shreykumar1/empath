const personalityDetails = [
  {
    type: "INTJ",
    name: "Architect",
    full_name: "Introverted, Intuitive, Thinking, Judging",
    description: "Imaginative and strategic thinkers, with a plan for everything.",
    traits: {
      I: "Introverted - Prefer solitary activities and get exhausted by social interaction.",
      N: "Intuitive - Focus on ideas and concepts rather than facts and details.",
      T: "Thinking - Make decisions based on logic and reason.",
      J: "Judging - Prefer structure and firm decisions."
    }
  },
  {
    type: "INTP",
    name: "Logician",
    full_name: "Introverted, Intuitive, Thinking, Perceiving",
    description: "Innovative inventors with an unquenchable thirst for knowledge.",
    traits: {
      I: "Introverted - Prefer solitary activities and get exhausted by social interaction.",
      N: "Intuitive - Focus on ideas and concepts rather than facts and details.",
      T: "Thinking - Make decisions based on logic and reason.",
      P: "Perceiving - Prefer flexibility and spontaneity."
    }
  },
  {
    type: "ENTJ",
    name: "Commander",
    full_name: "Extraverted, Intuitive, Thinking, Judging",
    description: "Bold, imaginative, and strong-willed leaders, always finding a way or making one.",
    traits: {
      E: "Extraverted - Prefer group activities and get energized by social interaction.",
      N: "Intuitive - Focus on ideas and concepts rather than facts and details.",
      T: "Thinking - Make decisions based on logic and reason.",
      J: "Judging - Prefer structure and firm decisions."
    }
  },
  {
    type: "ENTP",
    name: "Debater",
    full_name: "Extraverted, Intuitive, Thinking, Perceiving",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    traits: {
      E: "Extraverted - Prefer group activities and get energized by social interaction.",
      N: "Intuitive - Focus on ideas and concepts rather than facts and details.",
      T: "Thinking - Make decisions based on logic and reason.",
      P: "Perceiving - Prefer flexibility and spontaneity."
    }
  },
  {
    type: "INFJ",
    name: "Advocate",
    full_name: "Introverted, Intuitive, Feeling, Judging",
    description: "Quiet and mystical, yet very inspiring and tireless idealists.",
    traits: {
      I: "Introverted - Prefer solitary activities and get exhausted by social interaction.",
      N: "Intuitive - Focus on ideas and concepts rather than facts and details.",
      F: "Feeling - Make decisions based on personal values and how they affect others.",
      J: "Judging - Prefer structure and firm decisions."
    }
  },
  {
    type: "INFP",
    name: "Mediator",
    full_name: "Introverted, Intuitive, Feeling, Perceiving",
    description: "Poetic, kind, and altruistic people, always eager to help a good cause.",
    traits: {
      I: "Introverted - Prefer solitary activities and get exhausted by social interaction.",
      N: "Intuitive - Focus on ideas and concepts rather than facts and details.",
      F: "Feeling - Make decisions based on personal values and how they affect others.",
      P: "Perceiving - Prefer flexibility and spontaneity."
    }
  },
  {
    type: "ENFJ",
    name: "Protagonist",
    full_name: "Extraverted, Intuitive, Feeling, Judging",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    traits: {
      E: "Extraverted - Prefer group activities and get energized by social interaction.",
      N: "Intuitive - Focus on ideas and concepts rather than facts and details.",
      F: "Feeling - Make decisions based on personal values and how they affect others.",
      J: "Judging - Prefer structure and firm decisions."
    }
  },
  {
    type: "ENFP",
    name: "Campaigner",
    full_name: "Extraverted, Intuitive, Feeling, Perceiving",
    description: "Enthusiastic, creative, and sociable free spirits, who can always find a reason to smile.",
    traits: {
      E: "Extraverted - Prefer group activities and get energized by social interaction.",
      N: "Intuitive - Focus on ideas and concepts rather than facts and details.",
      F: "Feeling - Make decisions based on personal values and how they affect others.",
      P: "Perceiving - Prefer flexibility and spontaneity."
    }
  },
  {
    type: "ISTJ",
    name: "Logistician",
    full_name: "Introverted, Sensing, Thinking, Judging",
    description: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    traits: {
      I: "Introverted - Prefer solitary activities and get exhausted by social interaction.",
      S: "Sensing - Focus on facts and details rather than ideas and concepts.",
      T: "Thinking - Make decisions based on logic and reason.",
      J: "Judging - Prefer structure and firm decisions."
    }
  },
  {
    type: "ISFJ",
    name: "Defender",
    full_name: "Introverted, Sensing, Feeling, Judging",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    traits: {
      I: "Introverted - Prefer solitary activities and get exhausted by social interaction.",
      S: "Sensing - Focus on facts and details rather than ideas and concepts.",
      F: "Feeling - Make decisions based on personal values and how they affect others.",
      J: "Judging - Prefer structure and firm decisions."
    }
  },
  {
    type: "ESTJ",
    name: "Executive",
    full_name: "Extraverted, Sensing, Thinking, Judging",
    description: "Excellent administrators, unsurpassed at managing things – or people.",
    traits: {
      E: "Extraverted - Prefer group activities and get energized by social interaction.",
      S: "Sensing - Focus on facts and details rather than ideas and concepts.",
      T: "Thinking - Make decisions based on logic and reason.",
      J: "Judging - Prefer structure and firm decisions."
    }
  },
  {
    type: "ESFJ",
    name: "Consul",
    full_name: "Extraverted, Sensing, Feeling, Judging",
    description: "Extraordinarily caring, social, and popular people, always eager to help.",
    traits: {
      E: "Extraverted - Prefer group activities and get energized by social interaction.",
      S: "Sensing - Focus on facts and details rather than ideas and concepts.",
      F: "Feeling - Make decisions based on personal values and how they affect others.",
      J: "Judging - Prefer structure and firm decisions."
    }
  },
  {
    type: "ISTP",
    name: "Virtuoso",
    full_name: "Introverted, Sensing, Thinking, Perceiving",
    description: "Bold and practical experimenters, masters of all kinds of tools.",
    traits: {
      I: "Introverted - Prefer solitary activities and get exhausted by social interaction.",
      S: "Sensing - Focus on facts and details rather than ideas and concepts.",
      T: "Thinking - Make decisions based on logic and reason.",
      P: "Perceiving - Prefer flexibility and spontaneity."
    }
  },
  {
    type: "ISFP",
    name: "Adventurer",
    full_name: "Introverted, Sensing, Feeling, Perceiving",
    description: "Flexible and charming artists, always ready to explore and experience something new.",
    traits: {
      I: "Introverted - Prefer solitary activities and get exhausted by social interaction.",
      S: "Sensing - Focus on facts and details rather than ideas and concepts.",
      F: "Feeling - Make decisions based on personal values and how they affect others.",
      P: "Perceiving - Prefer flexibility and spontaneity."
    }
  },
  {
    type: "ESTP",
    name: "Entrepreneur",
    full_name: "Extraverted, Sensing, Thinking, Perceiving",
    description: "Smart, energetic, and very perceptive people, who truly enjoy living on the edge.",
    traits: {
      E: "Extraverted - Prefer group activities and get energized by social interaction.",
      S: "Sensing - Focus on facts and details rather than ideas and concepts.",
      T: "Thinking - Make decisions based on logic and reason.",
      P: "Perceiving - Prefer flexibility and spontaneity."
    }
  },
  {
    type: "ESFP",
    name: "Entertainer",
    full_name: "Extraverted, Sensing, Feeling, Perceiving",
    description: "Spontaneous, energetic, and enthusiastic people – life is never boring around them.",
    traits: {
      E: "Extraverted - Prefer group activities and get energized by social interaction.",
      S: "Sensing - Focus on facts and details rather than ideas and concepts.",
      F: "Feeling - Make decisions based on personal values and how they affect others.",
      P: "Perceiving - Prefer flexibility and spontaneity."
    }
  }
]


export default personalityDetails;
