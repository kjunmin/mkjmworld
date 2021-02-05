import React from 'react';
import Button from '../../../LayoutComponents/Button/Button';

function Jumbotron() {
    
    return (
        <div className="jumbotron">
            <div className="jumbotron-splash"></div>
            <div className="jumbotron-content-container">
                <h1 className="jumbotron-splash-text">An experiment in building a <span className="jumbotron-splash-text-inner">modern</span>, rich and
                        <span className="jumbotron-splash-text-inner"> seemless</span> visual <span className="jumbotron-splash-text-inner">experience</span>
                </h1>
                <div className="jumbotron-button-container">
                    <Button primary>Theme</Button>
                    <Button>Test2</Button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;