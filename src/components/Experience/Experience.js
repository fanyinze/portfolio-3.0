import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ExpItem from "./ExpItem";
import { expData } from "../../data";

const Experience = () => {
  return (
    <div className='section-container section-grey'>
      <div className='section-content'>
        <h3 className='section-title'>Experience</h3>
        <hr className='bar-black' />
        <VerticalTimeline>
          {expData.map((element) => {
            return (
              <ExpItem
                type={element.type}
                company={element.company}
                position={element.position}
                date={element.date}
                description={element.description}
                skills={element.skills}
                themeColor={element.themeColor}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
