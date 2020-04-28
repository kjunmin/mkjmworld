import React from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RocketTwoTone } from '@ant-design/icons';
import '../../css/styles.css';

const { Title } = Typography;

function HeaderSplash() {
    return (
        <div>
            <Link to={process.env.PUBLIC_URL + "/"}>
                <Button className="header-splash"
                    shape="round"
                    size="large"
                    icon={<RocketTwoTone />}
                    type="ghost"
                >
                    MKJMWorld
                </Button>
            </Link>
        </div>
    )
}

export default HeaderSplash;