import React from "react";
import SkillBar from "./SkillBar";

const skillData = [
  { category: "React", bgcolor: "#f9ab48", percentage: 90 },
  { category: "JavaScript", bgcolor: "#f9ab48", percentage: 80 },
  { category: "Java", bgcolor: "#f9ab48", percentage: 80 },
  { category: "HTML/CSS", bgcolor: "#f9ab48", percentage: 75 },
  { category: "Node.js", bgcolor: "#f9ab48", percentage: 70 },
  { category: "Python", bgcolor: "#f9ab48", percentage: 70 },
  { category: "AWS", bgcolor: "#f9ab48", percentage: 65 },
];

const AboutMe = () => {
  return (
    <div className='section-container'>
      <div className='section-content'>
        <h3 className='section-title'>About Myself</h3>
        <hr className='bar-black' />
        <div className='intro-container'>
          <div className='avatar'>
            <div className='avatar-image'></div>
          </div>
          <div className='intro'>
            <p>
              <strong>I am Yinze Fan and I am a computer engineer.</strong>I
              graduated from University of Toronto. My favorite subjects at
              university were all the ones related with software development.
              The main reason I am passionate about developing is that I can
              leverage my creativity, because there are so many ways to achieve
              the same goal when you code a software and I like to find the
              optimal one for each scenario
            </p>
          </div>
        </div>
        <div className='skill-bar-container'>
          {skillData.map((item, idx) => (
            <SkillBar
              key={idx}
              category={item.category}
              color={item.bgcolor}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
