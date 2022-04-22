const { getDefaultNormalizer } = require("@testing-library/react");

const experienceData = [
  {
    type: "work",
    company: "Dropbox",
    position: "Software Engineer",
    date: "2022 - Present",
    description:
      "Customer Growth Infrastructure.",
    skills: ["Python", "Go", "Spark"],
    themeColor:"#0061fe"
  },

  {
    type: "work",
    company: "Veeva System",
    position: "Software Engineer",
    date: "2018 - Present",
    description:
      "I worked in the Veeva Claims application team. Our objective was to provide marketing claim management solution for consumer products and cosmetic vertical.",
    skills: ["Java", "JavaScipt", "React"],
    themeColor: "#FF9300"
  },

  {
    type: "study",
    company: "University of Toronto",
    position: "Master of Engineering (MEng), Computer Engineering",
    date: "2016 - 2018",
    description:
      "Specialized in Computer Engineering, gained hands-on experience in AWS, Tensorflow and iOS app development.",
    skills: ["JavaScipt", "Python", "AWS", "TensorFlow"],
    themeColor: "#00204E"
  },

  {
    type: "study",
    company: "University of Toronto",
    position: "Bachelor of Applied Science (BASc), Electrical Engineering",
    date: "2011 - 2016",
    description: "Specialized in Power Electronics and Control System.",
    skills: [],
    themeColor: "#00204E"
  },
];

export default experienceData;
