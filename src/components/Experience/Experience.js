import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import ExpItem from "./ExpItem";
import data from "../../data";

const Experience = () => {
  console.log(data);
  return (
    <div className='section-container'>
      <div className='section-content'>
        <h3 className='section-title'>Experience</h3>
        <hr className='bar-black' />
        <VerticalTimeline>
          {data.map((element) => {
            return (
              <ExpItem
                type={element.type}
                company={element.company}
                position={element.position}
                description={element.description}
                skills={element.skills}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
