import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { projectList } from './projects';

const { Meta } = Card;

function ProjectGrid(props) {
    return (
        <section className="grid-layout-container">
            {props.projects.map((project, idx) =>
                <Link key={idx} to={process.env.PUBLIC_URL + project.link} >
                    <Card
                        key={idx}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={project.alt} src={project.image} />}
                    >
                        <Meta title={project.title} description={project.description} />
                    </Card>
                </Link>
            )}
        </section>
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