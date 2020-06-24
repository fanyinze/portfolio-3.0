/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { projectData } from "../../data";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div className='section-container'>
      <div className='section-content'>
        <h3 className='section-title'>Project</h3>
        <hr className='bar-black' />
        <Grid container spacing={1}>
          {projectData.map((data) => {
            return (
              <ProjectItem
                name={data.name}
                image={data.image}
                href={data.url}
              />
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Project;
