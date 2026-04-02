import React from 'react';
import skillsData from '../Data/skillsData';

const Skills = () => {
  return (
    <div className="container px-4 py-5" id="skills">
      <h2 className="pb-2 border-bottom">Skills</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {skillsData.map((skill, ind) => {
          return (
            <div className="col d-flex align-items-start" key={ind}>
              <i className={`${skill.icon} me-3 fs-2`}></i>
              <div>
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"> {skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
