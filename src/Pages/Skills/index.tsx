import React from 'react';
import { Tabs } from 'antd';
import '../../css/styles.scss';
import { AppleOutlined, AndroidOutlined, ToolOutlined } from '@ant-design/icons';
import SkillsGrid from './SkillsGrid';
import { techSkills, designSkills, utilitySkills } from './skills';
import { isMobile } from 'react-device-detect';


const { TabPane } = Tabs;



function Skills() {

    return (
        <div className="skills-tab-container">
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