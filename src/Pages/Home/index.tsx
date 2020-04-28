import React from 'react';
import HeaderSplash from '../../LayoutComponents/Header/HeaderSplash';
import '../../css/styles.css';
import TabBar from './TabBar';
import AboutMe from './AboutMe';

function Home() {
    return (
        <div>
            <div className="jumbotron">
                <div className="jumbotron-text-container">
                    <h1 className="jumbotron-main-text">The MKJM Progressive Web Application Project</h1>
                    <p className="jumbotron-sub-text">An experiment in building a modern fully functional Web Application.</p>
                </div>
            </div>
            <TabBar />
            <AboutMe />
        </div>
    )
}

export default Home;