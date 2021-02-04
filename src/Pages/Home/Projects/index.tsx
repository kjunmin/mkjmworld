import React from 'react';
import ProjectCard from './card';
import { projectList } from './projects';


function ProjectGrid(props) {

    const { projects } = props;

    return (
        <div>
            <section className="card-list">
                {projects.map((project, idx) => <ProjectCard key={idx} image={project.image} title={project.title} description={project.description} link={project.link} />)}
            </section>
        </div>
    )
}


function Projects() {
    return (
        <div className="projects-container">
            <h2 className="header-text">Projects</h2>
            <ProjectGrid  projects={projectList} />
        </div>
    )
}

export default Projects;