import React from 'react';
import '../../css/styles.css';
import TabBar from './TabBar';
import AboutMe from './AboutMe';
import JumbotronSplash from './JumbotronSplash';
import ProjectGrid from './ProjectGrid';
import Skills from '../Skills';

function Home() {
    return (
        <div>
            <div className="jumbotron">
                <div className="jumbotron-text-container">
                    <h1 className="jumbotron-main-text">The MKJM Progressive Web Application Project</h1>
                    <p className="jumbotron-sub-text">An experiment in building a modern fully functional Web Application.</p>
                </div>
                <div className="jumbotron-splash-container">
                    <JumbotronSplash />
                </div>
            </div>
            {/* <TabBar /> */}
            <AboutMe />
            <ProjectGrid />
            {/* <AboutMe /> */}
            <Skills />
        </div>
    )
}

export default Home;