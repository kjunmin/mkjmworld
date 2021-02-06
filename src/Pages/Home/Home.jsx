import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills/Skills';

import Jumbotron from './Jumbotron';

function Home() {
    return (
        <>
            <Jumbotron />
            <div className="content-container">
                <AboutMe />
                <Skills />
                {/* <Projects /> */}
            </div>
        </>
    )
}

export default Home;