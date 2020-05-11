import React from 'react';
import '../../css/styles.scss';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills, { SkillsGrid } from './Skills';

import Jumbotron from './Jumbotron';

function Home() {
    return (
        <div>
            <Jumbotron />
            <AboutMe />
            <Skills />
            <Projects />
        </div >
    )
}

export default Home;