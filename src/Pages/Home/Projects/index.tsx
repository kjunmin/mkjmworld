import React from 'react';
import { projectList } from './projects';

function ProjectGrid(props) {

    const { projects } = props;

    return (
        <div className="test">
            {projects.map((project, idx) => <ProjectCard key={idx} image={project.image} title={project.title} description={project.description} link={project.link} />)}
        </div>
    )
}

function ProjectCard(props) {
    const { title, description, image, link } = props;


    const cardImage = {
        backgroundImage: `url(${image})`
    }

    return (
        <a className="project-card-item" href={link} style={cardImage}>
            <section className="project-card-info">
                <h2 className="project-card-title">{title}</h2>
                <p className="project-card-body">{description}</p>
            </section>
        </a>
    )
}


function Projects() {
    return (
        <div>
            <h2 className="header-text">Projects</h2>
            <ProjectGrid projects={projectList} />
        </div>
    )
}

export default Projects;