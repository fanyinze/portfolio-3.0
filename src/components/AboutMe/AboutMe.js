import React from "react";
import SkillBar from "./SkillBar";
import resume from "../NavBar/assets/resume.docx";

const skillBarBgColor = "#007BE8"
const skillData = [
  { category: "Java", percentage: 90 },
  { category: "React", percentage: 80 },
  { category: "JavaScript", percentage: 80 },
  { category: "Python", percentage: 80 },
  { category: "HTML/CSS", percentage: 75 },
  { category: "Go", percentage: 70 },
  { category: "AWS", percentage: 65 },
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
            <a className='highlight' href='https://www.dropbox.com/home' target='_blank'> Dropbox </a>
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
              color={skillBarBgColor}
              percentage={item.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
