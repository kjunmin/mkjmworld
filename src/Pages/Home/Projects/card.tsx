import React from 'react';

function ProjectCard(props) {
    const { title, description, image, link } = props;


    const cardImage = {
        backgroundImage: `url(${image})`
    }

    return (

        <article className="card">
            <header className="card-header">
                <p>{title}</p>
                <h2>{description}</h2>
            </header>
        </article>

    )
}

export default ProjectCard;