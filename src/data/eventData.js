const eventData = [
  {
    title: "RainFocus Summit",
    date: "December 15th",
    location: "Lehi, Utah",
  },
  {
    title: "Oracle Summit",
    date: "November 23rd",
    location: "Lehi, Utah",
  },
];

eventData.forEach((obj, index) => (obj.id = index + 1));

export default eventData;
