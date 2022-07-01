export const availableFiltersTextMap = {
  Is: true,
  "Is not": true,
  "Is empty": false,
  "Is not empty": false,
  "Is equal to": true,
  "Is not equal to": true,
  "Begins with": true,
  "Ends with": true,
  Contains: true,
  "Does not contain": true,
};

export const availableFilters = [
  {
    text: "Is",
    requiresText: true,
  },
  {
    text: "Is not",
    requiresText: true,
  },
  {
    text: "Is empty",
    requiresText: false,
  },
  {
    text: "Is not empty",
    requiresText: false,
  },
  {
    text: "Is equal to",
    requiresText: true,
  },
  {
    text: "Is not equal to",
    requiresText: true,
  },
  {
    text: "Begins with",
    requiresText: true,
  },
  {
    text: "Ends with",
    requiresText: true,
  },
  {
    text: "Contains",
    requiresText: true,
  },
  {
    text: "Does not contain",
    requiresText: true,
  },
];
