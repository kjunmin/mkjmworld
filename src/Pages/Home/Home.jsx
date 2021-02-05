import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills/Skills';

import Jumbotron from './Jumbotron';

function Home() {
    return (
        <>
            <Jumbotron />
            <div className="homepage-container">
                <AboutMe />
                <Skills />
                {/* <Projects /> */}
            </div>
        </>
    )
}

export default Home;