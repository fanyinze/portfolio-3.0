import React from "react";

const ProjectItemOverlay = (props) => {
  return (
    <div className='project-overlay'>
      <div className='project-overlay-content'>
        <div className='project-overlay-label'>{props.label}</div>
        <div className='project-overlay-sublabel'>{props.sublabel}</div>
        <a target='_blank' href={props.href}>
          <div className='project-overlay-button'>Learn more</div>
        </a>
      </div>
    </div>
  );
};

export default ProjectItemOverlay;
