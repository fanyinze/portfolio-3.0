import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

const Experience = () => {
  return (
    <div className="section-container">
      <div className="section-content">
        <h3 className="section-title">Experience</h3>
        <hr className="bar-black" />
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: '#f5f5f5', color: '#555', border: '2px solid #898b8d' }}
            contentArrowStyle={{ borderRight: '7px solid #898b8d' }}
            date="2018 - Present"
            iconStyle={{ background: '#FF9300', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{  color: '#FF9300'}}>Veeva System</h3>
            <h4 className="vertical-timeline-element-subtitle">Associate Software Engineer</h4>
            <p> 
            I worked in the Veeva Claims application team. Our objective was to provide marketing claim management solution for consumer products and cosmetic vertical.
            </p>
            <div>
              <span className="vertical-timeline-element-skills" style={{  backgroundColor: "#FF9300", color: '#fff'}}>Java</span>
              <span className="vertical-timeline-element-skills" style={{  backgroundColor: "#FF9300", color: '#fff'}}>JavaScript</span>
              <span className="vertical-timeline-element-skills" style={{  backgroundColor: "#FF9300", color: '#fff'}}>React</span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#f5f5f5', color: '#555', border: '2px solid #898b8d' }}
            contentArrowStyle={{ borderRight: '7px solid #898b8d' }}
            date="2016 - 2018"
            iconStyle={{ background: '#00204e', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{  color: '#00204e'}}>University of Toronto</h3>
            <h4 className="vertical-timeline-element-subtitle">Master of Engineering (MEng), Computer Engineering</h4>
            <p> Specialized in Computer Engineering, gained hands-on experience in AWS, Tensorflow and iOS app development.</p>
            <div>
              <span className="vertical-timeline-element-skills" style={{  backgroundColor: "#00204e", color: '#fff'}}>JavaScript</span>
              <span className="vertical-timeline-element-skills" style={{  backgroundColor: "#00204e", color: '#fff'}}>Python</span>
              <span className="vertical-timeline-element-skills" style={{  backgroundColor: "#00204e", color: '#fff'}}>AWS</span>
              <span className="vertical-timeline-element-skills" style={{  backgroundColor: "#00204e", color: '#fff'}}>TensorFlow</span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#f5f5f5', color: '#555', border: '2px solid #898b8d' }}
            contentArrowStyle={{ borderRight: '7px solid #898b8d' }}
            date="2011 - 2016"
            iconStyle={{ background: '#00204e', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{  color: '#00204e'}}>University of Toronto</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor of Applied Science (BASc), Electrical Engineering</h4>
            <p> Specialized in Power Electronics and Control System.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;