import React from 'react';

function SkillsGrid(props) {
    return (
        <section className="skills-tab-container">
            {props.skills.map((skill, idx) => <img key={idx} className="skills-image-item" src={skill.logo} alt={skill.name} />)}
        </section>

    )
}

export default SkillsGrid;