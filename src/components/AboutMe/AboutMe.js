import React from "react";
import SkillBar from "./SkillBar";
import resume from "../NavBar/assets/resume.docx";

const skillData = [
  { category: "Java", bgcolor: "#f9ab48", percentage: 90 },
  { category: "React", bgcolor: "#f9ab48", percentage: 80 },
  { category: "JavaScript", bgcolor: "#f9ab48", percentage: 80 },
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
            I am a full stack developer for
            <a class='highlight' href='https://www.veeva.com/' target='_blank'> Veeva </a>
            in Toronto.
            <br />
            I am passionate about software development because there are so many
            ways to achieve the same goal and I like to find the optimal one for
            each scenario.
            <br />
            <a href={resume} className='highlight' target='_blank'>
              Learn more about me
            </a>
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
