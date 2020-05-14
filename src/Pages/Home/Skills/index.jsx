import React from 'react';
import '../../../css/styles.scss';
import { techSkills, designSkills, utilitySkills } from './skills';
import Tabs from '../../../LayoutComponents/Tabs';

function SkillsGrid(props) {
    return (
        <section className="skills-tab-container">
            {props.skills.map((skill, idx) => <img key={idx} className="skills-image-item" src={skill.logo} alt={skill.name} />)}
        </section>
    )
}

function Skills() {

    const designIcon = <i className="fa fa-paint-brush"></i>
    const techIcon = <i className="fa fa-code"></i>;
    const toolIcon = <i className="fa fa-wrench"></i>

    return (
        <div className="skills-tab-container">
            <h2 className="header-text">Skills & Experiences</h2>
            <Tabs>
                <div label="Design" key='0' icon={designIcon}>
                    <SkillsGrid skills={designSkills} />
                </div>
                <div label="Tech" key='1' icon={techIcon}>
                    <SkillsGrid skills={techSkills} />
                </div>
                <div label="Tools" key='2' icon={toolIcon}>
                    <SkillsGrid skills={utilitySkills} />
                </div>
            </Tabs>
        </div>
    )
}

export default Skills;