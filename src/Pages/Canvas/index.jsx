import React from 'react';
import Fourier from './Fourier';
import Rose from './Rose';

function CanvasPage() {

    return (
        <div className="page-layout-container">
            <h2 className="header-text">Processing.js Canvas</h2>
            <p className="paragraph-text">p5.js is a popular JavaScript graphics programming library used to create visual interactive applications on the web. The library enables users to
            easily create visual simulations, algorithmic art, and any kind of processing related graphics effects. Below are some examples made using p5.js.
            </p>
            <Fourier />
            <Rose />
        </div>
    )
}

export default CanvasPage;