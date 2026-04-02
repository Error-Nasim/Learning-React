import React from 'react';
import projectsData from '../Data/projectsData';

const Projects = () => {
  return (
    <div className="container px-4 py-5" id='projects'>
      <h2 className="pb-2 border-bottom">Projects</h2>
      {projectsData.map((project, ind) => {
        return (
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5" key={ind}>
            <div className="col d-flex flex-column align-items-start gap-2">
              <h2 className="fw-bold text-body-emphasis">{project.title}</h2>
              <p className="text-body-secondary">{project.description}</p>
              <a href={project.link} target="_blank" className="btn btn-primary btn-lg">
                View Project
              </a>
            </div>
            <div className="col">
              <div className="row row-cols-1 row-cols-sm-2 g-4">
                {project.features.map((feature, ind) => {
                  return (
                    <div className="col d-flex flex-column gap-2" key={ind}>
                      <i className={`${feature.icon} me-3 fs-2`}></i>
                      <h4 className="fw-semibold mb-0 text-body-emphasis">{feature.title}</h4>
                      <p className="text-body-secondary">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
