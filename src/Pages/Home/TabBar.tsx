import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { isMobile } from 'react-device-detect';
import '../../css/styles.scss';

function TabBar() {
    return (
        <div className="home-button-tabbar">
            <Button
                className="home-tabbar-item"
                shape="round"
                size={isMobile ? "small" : "large"}
                icon={<UserOutlined />}
            >
                About Me
            </Button>
            <Button
                className="home-tabbar-item"
                shape="round"
                size={isMobile ? "small" : "large"}
                icon={<UserOutlined />}
            >
                Projects
            </Button>
            <Button
                className="home-tabbar-item"
                shape="round"
                size={isMobile ? "small" : "large"}
                icon={<UserOutlined />}
            >
                Contact
            </Button>
        </div>
    )
}

export default TabBar;