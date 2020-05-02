import React from 'react';
import { Tabs } from 'antd';
import '../../../css/styles.scss';
import { AppleOutlined, AndroidOutlined, ToolOutlined } from '@ant-design/icons';
import { techSkills, designSkills, utilitySkills } from './skills';
import { isMobile } from 'react-device-detect';


const { TabPane } = Tabs;

function SkillsGrid(props) {
    return (
        <section className="skills-tab-container">
            {props.skills.map((skill, idx) => <img key={idx} className="skills-image-item" src={skill.logo} alt={skill.name} />)}
        </section>
    )
}

function Skills() {

    return (
        <div className="skills-tab-container">
            <h2 className="header-text">Skills & Experiences</h2>
            <Tabs defaultActiveKey="1" size={isMobile ? "default" : "large"} animated={false} >
                <TabPane
                    tab={
                        <span>
                            <AppleOutlined />
                            Design
                        </span>
                    }
                    key="1"
                >
                    <SkillsGrid skills={designSkills} />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <AndroidOutlined />
                            Tech
                         </span>
                    }
                    key="2"
                >
                    <SkillsGrid skills={techSkills} />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <ToolOutlined />
                            Tools
                         </span>
                    }
                    key="3"
                >
                    <SkillsGrid skills={utilitySkills} />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Skills;