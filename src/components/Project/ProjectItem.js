/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Grid from "@material-ui/core/Grid";
import ProjectItemOverlay from "./ProjectItemOverlay";

const getProjectImg = (image) => {
  return { backgroundImage: `url(${image})` };
};

const ProjectItem = (props) => {
  return (
    <Grid item xs={12} md={6} xl={3}>
      <div className='project-item' style={getProjectImg(props.image)}>
        <ProjectItemOverlay
          label={props.label}
          sublabel={props.sublabel}
          href={props.href}
        />
      </div>
    </Grid>
  );
};

export default ProjectItem;
