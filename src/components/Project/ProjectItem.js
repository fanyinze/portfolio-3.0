/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Grid from "@material-ui/core/Grid";

const getProjectImg = (image) => {
  return {backgroundImage: `url(${image})`}
}

const ProjectItem = (props) => {
  return (
    <Grid item xs={6}>
            <div className='project-item' style={getProjectImg(props.image)}>
              <a
                target='_blank'
                href= {props.href}
              >
                <div className='project-overlay'>
                  <span>{props.name}</span>
                </div>
              </a>
            </div>
          </Grid>
    );
}
 
export default ProjectItem;