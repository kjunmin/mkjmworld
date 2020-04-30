import React, { useEffect } from 'react';

function SkillsGrid(props) {

    useEffect(() => {

    }, props.skills)

    function skillsImageAnimationStyle(delay) {
        console.log(delay);
        return {
            animation: `fadeIn ${delay}s`,
            webkitAnimation: `fadeIn ${delay}s`
        }
    }
    return (
        <section className="skills-tab-container">
            {props.skills.map((skill, idx) => <img key={idx} style={skillsImageAnimationStyle(idx)} className="skills-image-item" src={skill.logo} alt={skill.name} />)}
        </section>

    )
}

export default SkillsGrid;